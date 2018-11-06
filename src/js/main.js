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
function gameTour(player) {
    var currentPlayer = null;
    var currentPlayerCards = null;

    //je saisi à qui c'est tour
    player.find(function(p) {
        if (p.turn) {
            currentPlayer = p;
            currentPlayerCards = p.cards;
        };
    })

    console.log('le joueur qui joue est le ', currentPlayer.name);
    //je met à jour le state du joueur à qui c'est le tour
    state.turn = currentPlayer.id;

    var boardGame = new BoardView(currentPlayer.id, currentPlayer);

    //je place un event listener sur la div parent des cartes du joueur1 réel
    //qui appel la fonction qui check les règles du jeu 
    var cardClick = function(e) {
        var cardTargetObj = null;
        var cardTarget = e.target.closest('.card');
        cardTargetObj = currentPlayerCards.find(function(card) {
            if (card.id == cardTarget.id) { return card; }
        });
        console.log('cardTarget: ', cardTargetObj)

        boardGame.cardClick(cardTargetObj, cardTarget, currentPlayer, currentPlayerCards);

        //c'est le tour de l'autre joueur
        player.find(function(p) {
            if (!p.turn) {
                currentPlayer = p;
                p.turn = true;
                currentPlayerCards = p.cards;
                console.log('c\'est au tour du joueur ', currentPlayer);
            };
        });
    }
    boardGame.zoneCardsPlayer.addEventListener('click', cardClick, true);
    console.log('mon joueur ', currentPlayer.id, ' a ', currentPlayer.cards.length, ' cartes')
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