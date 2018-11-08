/*var state = require('./utils/state');
var BoardView = require('./board.js');
var Player = require('./player');

//fonctions utilitaires
var getCard = require('./utils/get-card');
var shuffleCard = require('./utils/shuffle-card');
var getRandomCards = require('./utils/get-random-cards');

var gameBoard = new BoardView(uno);
gameBoard.startGameBtn.addEventListener('click', function() { gameBoard.startGame(gameBoard) }, false);

//je saisi à qui c'est tour
function uno(player) { //=> à changer
    var isTurnPlayer = gameBoard.players.find(function(player) {
        state.players[player].turn = player.turn;
        return player.turn;
    });
    initCardsBoard(getCard());
    distributeCards(7);
}

//j'init mes cartes sur la table de jeu afin de mélanger mes 76 cartes
function initCardsBoard(cards) {
    var arrCards = [];
    arrCards.push(shuffleCard(cards));
    console.log('voici la liste des ', arrCards[0].length, ' cartes mélangées : ', arrCards);
    //je met à jour la liste de mes cartes qui se trouvent sur la table
    state.board.cards.push(arrCards);
    console.log('A initCardsBoard, voici ce que j\'ai dans mon state board cards ', state.board.cards[0][0]);
}


//je donne 7 cartes à chacun de mes joueurs
function distributeCards(cardsNumb) {
    var arrCardsPlayer1 = getRandomCards(cardsNumb, state);
    var arrCardsPlayer2 = getRandomCards(cardsNumb, state);
    gameBoard.startGame.player1[cards] = arrCardsPlayer1;
    gameBoard.startGame.player2.cards = arrCardsPlayer2;

    //state.players = [gameBoard.startGame.players];
}


//je met en place le tour du jeu
//var currentPlayer = playerTurn();

function gameTour(currentPlayer) {

}

module.exports = uno;

*/