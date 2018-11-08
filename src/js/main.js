var state = require('./utils/state');
var getCard = require('./utils/get-card');
var updateStateCardBoard = require('./utils/update-state-card');
var cardTemplate = require('./utils/card-template');
var shuffleCard = require('./utils/shuffle-card');
var BoardView = require("./board");
var Player = require('./player');

var player1Area = $('div[data-player="player1"]')[0];
var player2Area = $('div[data-player="player2"]')[0];
var putCardArea = $('#card-played')[0];
var pickaxe = $('#pickaxe')[0];



var boardGame = new BoardView(distributeCards);

boardGame.startGameBtn.addEventListener("click", function() { boardGame.startGame(); }, false);

/* -------- */
/*
Functions utils
*/
function initCardsBoard(cards) {
    var arrCards = [];
    arrCards.push(shuffleCard(cards));
    console.log('voici la liste des ', arrCards.length, ' cartes mélangées : ', arrCards);
    //je met à jour la liste de mes cartes qui se trouvent sur la table
    state.board.cards.push(arrCards);
    console.log('A initCardsBoard, voici ce que j\'ai dans mon state board cards ', state.board.cards[0][0]);
}

function updateStateCardBoard(cards, arrCardBoard) {
    var index;
    for (var i = 0; i < cards.length; i++) {
        index = arrCardBoard.indexOf(arrCardBoard[i]);
        if (index > -1) {
            arrCardBoard.splice(index, 1);
        }
    }
    console.log('il me reste ', state.board.cards[0][0].length, ' après la distribution ');
}

function getRandomCards(cardsNumbers) {
    var arrCards = [];
    var boardCards = state.board.cards[0][0];
    for (i = 0; i < cardsNumbers; i++) {
        arrCards.push(boardCards[i]);
    }

    // je met à jour la liste de mes cartes du jeu (board)
    // en y supprimant les cartes qui viennent d'être distribuées au joueur 
    updateStateCardBoard(arrCards, boardCards);
    return arrCards;
}

/* -------- */
/*
Init game functions
*/

function distributeCards(cardsNumbers) {
    var arrCardsPlayer1 = getRandomCards(cardsNumbers);
    var arrCardsPlayer2 = getRandomCards(cardsNumbers);
    var player1 = new Player('player1', arrCardsPlayer1);
    var player2 = new Player('player2', arrCardsPlayer2);

    player1.turn = true;
    player2.isBot = true;
    player1.id = 'player1';
    player2.id = 'player2';
    state.players = [player1, player2];
}

//fonction pour avoir la carte qui débute le jeu
function initCardStartGame(numberCard) {
    var cardsBoard = state.board.cards[0][0];
    var newArr = [];

    for (var i = 0; i < numberCard; i++) { newArr.push(cardsBoard[i]); }

    //je met à jour le nombre de cartes dans le jeu
    updateStateCardBoard(newArr, cardsBoard);

    console.log('J\'ai ' + newArr.length + ' carte pour débuter mon jeu')
    return newArr;
}




/* -------- */
/*
Functions rendu IHM
*/
//fonction qui affiches les cartes des joueurs dans l'ihm
var marginLeftValue = 0;

function renderPlayersCards(players) {
    var newCard = null;
    players.forEach(function(player) {
        player.cards.forEach(function(card) {
            newCard = cardTemplate(card.color, card.number, card.id, marginLeftValue += 60);
            $('div[data-player="' + player.id + '"] .card-gamme')[0].innerHTML += newCard;
        })
    })

}

function renderCardsBoard(cards, locationDom) {
    var newCard = null;
    cards.forEach(function(card) {
        newCard = cardTemplate(card.color, card.number, card.id, marginLeftValue = 0);
        locationDom.innerHTML += newCard;
    })

    //je met à jour le state de ma pile "cartes jouées"
    if (locationDom === putCardArea) { state.cardsPlayed.push(cards[0]) }
}


/* -------- */
/*
Game Tour function
*/
var updateStatusPlayers = function(player, gameOver) {
    debugger
    if (gameOver) {
        var winner = state.players.find(function(p) {
            return p.id = p.cards[0].length === 0;
        });
        //game.gameOver(player, winner);
        return;
    }

    var newPlayers = state.players.map(function(p) {
        if (p.turn) {
            p.turn = false;
            p = player;
        } else if (!p.turn) {
            p.turn = true;
            console.log("**********************");
            console.log("c'est au tour de ", p.name, " de jouer");
            boardGame.displayPlayerTurn(p);
        }
        return p;
    });

    state.players = newPlayers;
    console.log("players => ", state.players);
}

function gameTour(player) {
    var currentPlayer = state.players.find(function(player) {
        return player.turn;
    });

    console.log('le joueur qui joue est le ', currentPlayer.name);
    //je met à jour le state du joueur à qui c'est le tour
    state.turn = currentPlayer.id;

    var boardGame = new BoardView(currentPlayer.id, currentPlayer);

    //je place un event listener sur la div parent des cartes du joueur1 réel
    //qui appel la fonction qui check les règles du jeu 
    var cardClick = function(e) {
        var currentPlayer = state.players.find(function(player) {
            return player.turn;
        });
        var currentPlayerCards = currentPlayer.cards;

        var cardTargetObj = null;
        var cardTarget = e.target.closest('.card');
        cardTargetObj = currentPlayerCards.find(function(card) {
            if (card.id == cardTarget.id) { return card; }
        });
        console.log('cardTarget: ', cardTargetObj)

        boardGame.cardClick(cardTargetObj, cardTarget, currentPlayer, currentPlayerCards, updateStatusPlayers, gameOver);
    }

    boardGame.zoneCardsPlayer1.addEventListener('click', cardClick, true);
    boardGame.zoneCardsPlayer2.addEventListener('click', cardClick, true);

    var pickaxeClick = function(e) {
        var currentPlayer = state.players.find(function(player) {
            p = player.id;
            return player.turn;
        });
        var cardClick = e.target.closest('.card');
        var lastCardPickaxe = state.board.cards[0][0].slice(-1)[0];
        var cardPickaxe = state.board.cards[0][0].find(function(card) {
            if (card.id == cardClick.id) { return card; }
        });
        console.log('la carte cliquée dans la pioche: ', cardPickaxe);
        boardGame.pickaxeClick(cardPickaxe);

        //je met à jour la liste de carte de mon joueur courant
        currentPlayer.cards.push(cardPickaxe);
        //je supprime la carte du tas pioche 
        // removeCard(cardPickaxe, state.board.cards[0][0]); 

        updateStatusPlayers(currentPlayer, gameOver(currentPlayer));
    }
    boardGame.pickaxe.addEventListener('click', pickaxeClick, true);


    console.log('mon joueur ', currentPlayer.id, ' a ', currentPlayer.cards.length, ' cartes')
}

var gameOver = function(currentPlayer) {
    debugger
    if (currentPlayer.cards.length === 0) {
        return true;
    }
    return false;
}


window.onload = function() {
    //animation logo
    setTimeout(function() {
        document.querySelector('.logo').classList.add('open');
    }, 500);

    //je mélange mes 76 cartes 
    initCardsBoard(getCard());

    //je distribue 7 cartes au joueur 1
    distributeCards(7);

    //j'affiches les cartes de mes joueurs dans l'ihm
    renderPlayersCards(state.players);

    //j'init une carte au hasard sur le board pour démarrer le jeu : il s'agit de la pile "cartes à jouer"
    renderCardsBoard(initCardStartGame(1), putCardArea);

    //j'init le tas de cartes de la pioche
    renderCardsBoard(state.board.cards[0][0], pickaxe);

    //au tour du joueur 1
    gameTour(state.players)
}