var state = require('./utils/state');
var updateStateCardBoard = require('./utils/update-state-card');
var removeCard = require('./utils/remove-card');
var cardTemplate = require('./utils/card-template');

var marginLeftValue = 0;
var putCardArea = $('.card-played')[0];


function BoardView(curentPlayer, player) {
    var marginLeftValue = 0;
    this.zoneCardsPlayer = $('div[data-player="' + player.id + '"]')[0];
    this.cardOnBoard = $('button.card')[0];
    this.cardPlayed = $('#card-played')[0];

    //mise en avant du nom du joueur à qui c'est le tour
    $('#game-player-name-' + player.id + '').addClass('isTurn');

    this.cardClick = function(card, cardDomElt, player, currentPlayerCards) {
        //var cardOnBoardPlayed = state.cardsPlayed[0].slice(-1)[0];
        var cardOnBoardPlayed = state.cardsPlayed[0]; // /!\ c'est la carte qui donne le jeu


        if (card.number === cardOnBoardPlayed.number || card.color === cardOnBoardPlayed.color) {
            console.log('je peux jouer');
            playCard(card, player.id, currentPlayerCards, cardDomElt);
            state.cardsPlayed.push(card);
            console.log('mon joueur ' + player.id + ' possède ' + player.cards.length + ' cartes');

            //c'est au tour de l'autre joueur
            // ....
        } else {
            console.log('je ne peux pas jouer');
            // je ne peux que cliquer sur la pioche 
            notPlayCard();

            //c'est au tour de l'autre joueur
            // ....
        }
        //je retire la classe qui anime le nom du joueur à qui ce n'est plus le tour
        $('#game-player-name-' + player.id + '').removeClass('isTurn');

    }

    //fonction 'je peux jouer'
    function playCard(card, player, currentPlayerCards, cardDomElt) {
        //je supprime la carte ok du tas du joueur du DOM
        cardDomElt.remove();

        //je met à jour mon state card joueur en supprimant la carte de l'obj
        var cardObjRemove = null;
        state.players.find(function(p) {
            if (p.id === player) {
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

    //fonction 'je peux pas jouer': pioche + ajoute de la carte dans le jeu du joueur
    function notPlayCard() {
        $('#pickaxe button.card').click(function(e) {
            var cardAdd = null;

            var card = e.target.closest('.card');
            cardAdd = state.board.cards[0][0].find(function(card) {
                if (card.id == e.target.closest('.card').id) {
                    return card;
                }
            });
            console.log('cardAdd: ', cardAdd);

            //je met à jour mon obj player.card avec la carte en plus dans son jeu
            player.cards.push(cardAdd);
            //j'ajoute la 1e carte à mon tas joueur
            var addCardPlayerGame = cardTemplate(cardAdd.color, cardAdd.number, cardAdd.id, marginLeftValue += 40);
            $('div[data-player="' + player.id + '"] .card-gamme button:last-child')[0].innerHTML += addCardPlayerGame;

            //je supprime la carte de la pile de la pioche
            $('#pickaxe button:last-child')[0].remove();
            console.log('mon joueur ', player.id, ' a ', player.cards.length, ' cartes')
        });
    }
}

module.exports = BoardView;