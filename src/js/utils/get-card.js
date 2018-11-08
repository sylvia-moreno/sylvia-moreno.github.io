//fonction qui génère dans un tableau mes 76 cartes avec leurs exceptions
var Card = require('../card');

function getCard() {
    var colorCard = ['red', 'blue', 'green', 'yellow'];
    var arrCard = [];
    var index = 0;
    colorCard.map(function(color) {
        var arr = new Array(9);
        for (var i = 0; i < arr.length + 1; i++) {
            var firstCard = new Card(color, i, index++);
            var secCArd = new Card(color, i, index++);
            //var result = i === 0 ? arrCard.push(card) : arrCard.push(card, card);
            if (i === 0) {
                arrCard.push(firstCard)
            } else {
                arrCard.push(firstCard, secCArd)
            }
        }
    });
    return arrCard;
}

module.exports = getCard;