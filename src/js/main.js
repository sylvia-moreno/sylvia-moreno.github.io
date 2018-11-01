var state = require('./utils/state');
var generateCard = require('./utils/get-card');
var updateStateCardBoard = require('./utils/update-state-card');
var BoardView = require("./board");
var Player = require('./player');

var player1ZoneHTML = $('div[data-player="player1"]')[0];
var player2ZoneHTML = $('div[data-player="player2"]')[0];
var putCardArea = $('.card-played')[0];
var pickaxe = $('.pickaxe')[0];





/* -------- */
/*
Functions utils
*/
function initCardsBoard(cards) {
    var arrCards = [];
    for (i = 0; i < cards.length; i++) {
        arrCards.push(cards[Math.floor(Math.random() * cards.length)])
    }
    console.log('voici la liste des ', arrCards.length, ' cartes mélangées : ', arrCards);
    //je met à jour la liste de mes cartes qui se trouvent sur la table
    state.board.cards.push(arrCards);
}

function updateStateCardBoard(cards, arrCardBoard) {
    var index;
    for (var i = 0; i < cards.length; i++) {
        index = arrCardBoard.indexOf(arrCardBoard[i]);
        if (index > -1) {
            arrCardBoard.splice(index, 1);
        }
    }
    console.log('il me reste ', state.board.cards[0].length, ' après la distribution ');
}

function removeCard(monTasDeCartesAParser, laCarteASupprimer) {
    for (var i = monTasDeCartesAParser.length - 1; i >= 0; i--) {
        if (monTasDeCartesAParser[i] === laCarteASupprimer) {
            monTasDeCartesAParser.splice(i, 1);
        }
    }
}

function getRandomCards(cardsNumbers) {
    var arrCards = [];
    var boardCards = state.board.cards[0];
    for (i = 0; i < cardsNumbers; i++) {
        arrCards.push(boardCards[Math.floor(Math.random() * boardCards.length)])
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
    player1.isBot = true;
    player1.id = 'player1';
    player2.id = 'player2';
    state.players = [player1, player2];

}

//fonction pour avoir la carte qui débute le jeu
function initCardStartGame(numberCard) {
    var cardsBoard = state.board.cards[0];
    var newArr = [];

    for (var i = 0; i < numberCard; i++) {
        newArr.push(cardsBoard[i]);
    }

    //je met à jour le nombre de cartes dans le jeu
    updateStateCardBoard(newArr, cardsBoard) //=> PAS LA BONNE VALEUR !!

    console.log('J\'ai ' + newArr.length + ' carte pour débuter mon jeu')
    return newArr;
}




/* -------- */
/*
Functions rendu IHM
*/
//fonction qui affiches les cartes dans l'ihm
function renderCards(players) {
    var index = 0;
    var newCard = null;
    players.forEach(function(player) {
        player.cards.forEach(function(card) {
            var numberCard = card.split('', 1) + '';
            var cardColor = card.slice(1);
            index++;
            newCard = '<button role="button"><div class="card card-' + cardColor + '" id="card-' + index + '">' + '<span class="card-number">' + numberCard + '</span>' + '</div></button>';
            document.getElementById(player.id).innerHTML += newCard;
        })
    })

}

//fonction qui affiche la carte init dans l'ihm
function renderCardInitGame(card) {
    var numberCard = card[0].split('', 1) + '';
    var cardColor = card[0].slice(1);
    var index = 0;
    var startCard = '<button role="button"><div class="card card-played-board card-' + cardColor + '" id="card-' + index++ + '">' + '<span class="card-number">' + numberCard + '</span>' + '</div></button>';
    putCardArea.innerHTML += startCard;

}

//fonction pour avoir la pioche ihm
function renderCardsPioche(cards) {
    var index = 0;
    var newCard = null;
    cards.forEach(function(card) {
        var numberCard = card.split('', 1) + '';
        var cardColor = card.slice(1);
        index++;
        newCard = '<button role="button"><div class="card card-pickaxe card-' + cardColor + '" id="card-' + index + '">' + '<span class="card-number">' + numberCard + '</span>' + '</div></button>';
        pickaxe.innerHTML += newCard;
    })
}

/* -------- */
/*
Game Tour function
*/
/*  
            playCard(player, state[player].cards)
            function playCard(player, card) {
                removeCard(state[player].cards, card) //je supprime la carte cliquée du tas de cartes du joueur 
                state.board.cards.push(card) // je la rajoute au tas de cartes du board
                updatePioche()
                updateCardBoard()
            }
*/

function gameTour(player) {
    //je saisi à qui c'est tour
    var currentPlayer = null;
    var currentPlayerCards = null;
    player.find(function(p) {
        if (p.turn) {
            currentPlayer = p.name
            currentPlayerCards = p.cards;
        };
    })
    console.log('le joueur qui joue est le ', currentPlayer);
    //je met à jour le state du joueur à qui c'est le tour
    state.turn = currentPlayer;

    var boardGame = new BoardView();

    //je place un event listener sur la div parent des cartes du joueur1 réel
    //qui appel la fonction qui check les règles du jeu 
    var cardClick = function(e) {
        boardGame.cardClick(e.target, currentPlayer, currentPlayerCards);



        //c'est le tour de l'autre joueur
        player.find(function(p) {
            if (!p.turn) {
                currentPlayer = p.name
                p.turn = true;
                debugger
                currentPlayerCards = p.cards;
            };
        });


    }
    boardGame.zoneCardRealPlayer.addEventListener('click', cardClick, true);
}

if ('toutuntasdetests') {
    //playCard('player1', 2)
}




window.onload = function() {
    //je mélange mes 76 cartes 
    initCardsBoard(generateCard());

    //je distribue 7 cartes au joueur 1
    distributeCards(7);

    //j'affiches mes cartes sur l'ihm
    renderCards(state.players);

    //j'init une carte au hasard sur le board pour démarrer le jeu : il s'agit de la pile "cartes à jouer"
    renderCardInitGame(initCardStartGame(1));

    //j'init le tas de cartes de la pioche
    renderCardsPioche(state.board.cards[0]);

    //au tour du joueur 1
    gameTour(state.players)
}