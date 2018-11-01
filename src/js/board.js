var state = require('./utils/state');
var updateStateCardBoard = require('./utils/update-state-card');
var putCardArea = $('.card-played')[0];


function BoardView() {
    this.zoneCardRealPlayer = $('.zone-player-bottom')[0];
    this.cardPlayed = $('.card-played-board')[0];

    this.cardClick = function(card, player, currentPlayerCards) {
        var numberCard = card.innerText;
        var cardColor = card.className.slice(10);

        //placer un data-attribut sur chaque carte générer

        //je vérifie un tas de règle avant de décider si je peux jouer 
        if (numberCard === $('.card-played-board:last-child').innerText || cardColor === this.cardPlayed.className.slice(28)) {
            console.log('je peux jouer');
            playCard(card, player, currentPlayerCards);
            //playCard('player1', 2);
            //playCard(player, state[player].cards);
            debugger
        } else if (numberCard !== $('.card-played-board:last-child').innerText || cardColor !== this.cardPlayed.className.slice(28)) {
            //je ne peux pas jouer  
            //je déactive le clique sur mes cartes 
            boardGame.zoneCardRealPlayer.removeEventListener('click', cardClick, false);

            // je ne peux que cliquer sur la pioche 
            //j'ajoute la carte pioche à mon tas de cartes
            //je met à jour le state cards du joueur 
            debugger

            // else 
            /*
                function cannotPlay(player, card) {
                    
                }
            */
        }
    }

    function playCard(card, player, currentPlayerCards) {
        var numberCard = card.innerText;
        var cardColor = card.className.slice(10);
        var index = 0;

        //je supprime la carte ok du tas du joueur
        card.remove();

        //je met à jour mon state card joueur
        updateStateCardBoard(card.innerText + card.className.slice(10), currentPlayerCards);

        //j'ajoute cette carte au tas 'cartes à jouer'
        var newCard = '<button role="button"><div class="card card-' + cardColor + '" id="card-' + index + '">' + '<span class="card-number">' + numberCard + '</span>' + '</div></button>';
        $('.card-played')[0].innerHTML += newCard;
    }
}

module.exports = BoardView;