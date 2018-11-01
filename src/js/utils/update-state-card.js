var state = require('./state');

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

module.exports = updateStateCardBoard;