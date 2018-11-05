//function qui génère des cartes
/*var cardValue = [
    '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',
    '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',
    '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',
    '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET'
];

function getCard() {
    var cards = [];
    for (i = 0; i < cardValue.length; i++) {
        cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])
    }
    return cards;
}

module.exports = getCard;
*/

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