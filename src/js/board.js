var state = require('./utils/state');
var updateStateCardBoard = require('./utils/update-state-card');
var removeCard = require('./utils/remove-card');
var cardTemplate = require('./utils/card-template');

var marginLeftValue = 0;
var putCardArea = $('.card-played')[0];


function BoardView(curentPlayer) {
    this.startGameBtn = $('#start-game')[0];
    this.zoneCardsPlayer1 = $('div[data-player="player1"]')[0];
    this.zoneCardsPlayer2 = $('div[data-player="player2"]')[0];
    this.cardOnBoard = $('button.card')[0];
    this.cardPlayed = $('#card-played')[0];
    this.pickaxe = $('#pickaxe button:last-child')[0];

    var marginLeftValue = 0;
    var modale = $('.game-modal')[0];

    this.startGame = function() {
        var playerName1 = $('#input-name-player1')[0].value || 'player1';
        var playerName2 = $('#input-name-player2')[0].value || 'player2';

        //-- A l'ouverture de la page, je dispose la modale
        //on remplit les input names et on ferme la modale
        $('#game-player-name-player1')[0].innerHTML = playerName1;
        $('#game-player-name-player2')[0].innerHTML = playerName2;
        //je ferme la modale
        $('.game-modal-block').removeClass('visible');
        $('.game-modal-backdrop').removeClass('visible');


    }

    this.cardClick = function(card, cardDomElt, curentPlayer, currentPlayerCards, updatePlayers, gameOver) {
        var cardOnBoardPlayed = state.cardsPlayed.slice(-1)[0]; // /!\ c'est la dernière carte qui donne le jeu 'tas pioche'

        //-- Est ce que je peux jouer ?
        if (card.number === cardOnBoardPlayed.number || card.color === cardOnBoardPlayed.color) {
            console.log('je peux jouer');
            this.playCard(card, curentPlayer.id, currentPlayerCards, cardDomElt);
            state.cardsPlayed.push(card);
            console.log('mon joueur ' + curentPlayer.id + ' possède ' + curentPlayer.cards.length + ' cartes');

            //c'est au tour de l'autre joueur
            updatePlayers(curentPlayer, gameOver(curentPlayer));
        } else {
            console.log('je ne peux pas jouer');
            // je ne peux que cliquer sur la pioche 
            this.pickaxeClick();

            //c'est au tour de l'autre joueur
            updatePlayers(curentPlayer, gameOver(curentPlayer));
        }
        //je retire la classe qui anime le nom du joueur à qui ce n'est plus le tour
        $('#game-player-name-' + curentPlayer.id + '').removeClass('isTurn');

        //j'disabled les cartes de l'autre joueur
        //...
    }

    //-- Fonction 'je peux pas jouer'
    this.pickaxeClick = function(card) {
        //j'ajoute la carte pioche à celle du jeu de mon joueur courant ihm
        var addCardPlayerGame = cardTemplate(card.color, card.number, card.id, marginLeftValue += 40);
        $('div[data-player="' + curentPlayer + '"] .card-gamme button:last-child')[0].innerHTML += addCardPlayerGame;

        //je supprime la carte de la pioche 
        $('#pickaxe button:last-child')[0].remove();
    }

    //-- Fonction 'je peux jouer'
    this.playCard = function(card, curentPlayer, currentPlayerCards, cardDomElt) {
        //je supprime la carte ok du tas du joueur du DOM
        cardDomElt.remove();

        //je met à jour mon state card joueur en supprimant la carte de l'obj
        var cardObjRemove = null;
        state.players.find(function(p) {
            if (p.id === curentPlayer) {
                p.cards.map(function(c) {
                    if (c.number === card.number && c.color === card.color && c.id === card.id) {
                        cardObjRemove = card
                        console.log('player: ', p);
                        removeCard(currentPlayerCards, cardObjRemove);
                    }
                })
            }
        });

        //je retire l'ancienne carte du tas 'cartes à jouer'
        $('#card-played button')[0].remove();

        //j'ajoute cette carte au tas 'cartes à jouer'
        var newCard = cardTemplate(card.color, card.number, card.id, marginLeftValue);
        $('#card-played')[0].innerHTML += newCard;
    }

    //-- Mise en avant du nom du joueur à qui c'est le tour
    this.displayPlayerTurn = function(player) {
        var playerTurnDivName = $('#game-player-name-' + player.id + '').addClass('isTurn');
        var intervalID = setInterval(playerTurnDivName, 2000);
        clearInterval(intervalID);
    };

    //-- Je ne l'utilise pas encore
    function switchPlayer() {
        var players = state.players;
        //c'est le tour de l'autre joueur
        players.find(function(p) {
            if (!p.turn) {
                currentPlayer = p;
                p.turn = true;
                currentPlayerCards = p.cards;
                console.log('c\'est au tour du joueur ', currentPlayer);
            };
        });
    }

}

module.exports = BoardView;