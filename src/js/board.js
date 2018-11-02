var state = require('./utils/state');
var updateStateCardBoard = require('./utils/update-state-card');
var removeCard = require('./utils/remove-card');
var putCardArea = $('.card-played')[0];


function BoardView() {
    this.zoneCardRealPlayer = $('.zone-player-bottom')[0];
    this.cardPlayed = $('.card-played-board')[0];

    this.cardClick = function(card, cardDomElt, player, currentPlayerCards) {
        var cardOnBoardPlayed = state.cardsPlayed[0].slice(-1)[0];

        //placer un data-attribut sur chaque carte générer

        //je vérifie un tas de règle avant de décider si je peux jouer
        //state.cardsPlayed[0].find(function(cardState) {

        //cardState.id === card.id;
        //})

        if (card.number === cardOnBoardPlayed.number || card.color === cardOnBoardPlayed.color) {
            console.log('je peux jouer');
            playCard(card, player.id, currentPlayerCards, cardDomElt);
            state.cardsPlayed.push(card);
        } else {
            console.log('je ne peux pas jouer');
            // je ne peux que cliquer sur la pioche 
            var cardPickaxe = null;
            $('.pickaxe').click(function(e) {
                cardPickaxe = state.board.cards[0].find(function(card) {
                    if (card.id == e.target.id) {
                        return card;
                    }
                });
                //j'ajoute la 1e carte à mon tas joueur
                var addCardPlayerGame = '<button role="button"><div class="card card-' + cardPickaxe.color + '" id="' + cardPickaxe.id + '">' + '<span class="card-number">' + cardPickaxe.number + '</span>' + '</div></button>';
                $('#' + player.id + '')[0].innerHTML += addCardPlayerGame;

                //je supprime la carte de la pile de la pioche
                $('.pickaxe button').last().remove()

                //je met à jour mon obj player.card avec la carte en plsu dans son jeu
                player.cards.push(cardPickaxe);



            });
        }
    }

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
                    }
                })
            }
        });
        removeCard(currentPlayerCards, cardObjRemove);

        //j'update le state card.board
        updateStateCardBoard(card.number + card.color, currentPlayerCards);

        //je retire l'ancienne carte du tas 'cartes à jouer'
        $('.card-played button')[0].remove();

        //j'ajoute cette carte au tas 'cartes à jouer'
        var newCard = '<button role="button"><div class="card card-' + card.color + '" id="' + card.id + '">' + '<span class="card-number">' + card.number + '</span>' + '</div></button>';
        $('.card-played')[0].innerHTML += newCard;
    }
}

module.exports = BoardView;