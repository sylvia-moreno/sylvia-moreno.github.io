//fonction qui génère dans un tableau mes 76 cartes
const Card = require('../card');

function getCard() {
    const cardsColors = ['red', 'blue', 'green', 'yellow'];

    return cardsColors.reduce((cards, cardColor) => {
        const currentCards = _generateCards(cardColor);
        return [...cards, ...currentCards];
    }, []);


    /*const arrCard = [];
    let index = 0;
    colorCard.map(function(color) {
        const arr = new Array(9);
        for (let i = 0; i < arr.length + 1; i++) {
            const firstCard = new Card(color, i, index++);
            const secCArd = new Card(color, i, index++);
            //const result = i === 0 ? arrCard.push(card) : arrCard.push(card, card);
            if (i === 0) {
                arrCard.push(firstCard)
            } else {
                arrCard.push(firstCard, secCArd)
            }
        }
    });
    return arrCard;*/
}

function _generateCards(color){
    const minNumber = 0;
    const maxNumber = 9;
    const cardsArray = [];

    for(let index = minNumber; index <= maxNumber; index++) {
        cardsArray.push(new Card(color, index, cardsArray.length++))

        if(index !== 0) {
            cardsArray.push(new Card(color, index, cardsArray.length++))
        }
    }

    return cardsArray;
}

module.exports = getCard;