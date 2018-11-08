var updateStateCardBoard = require('./update-state-card');

function getRandomCards(cardsNumbers, state) {
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

module.exports = getRandomCards;