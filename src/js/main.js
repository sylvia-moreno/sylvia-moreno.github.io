var cardsGame = require('./utils/get-card.js');

const state = {
    player1: {
        cards: []
    },

    player2: {
        cards: []
    },

    board: {
        cards: []
    },

    pioche: {
        cards: []
    },

    turn: 'player1',
}

function shuffle(cards) {
    var arrCards = [];
    for (i = 0; i < cards.length; i++) {
        arrCards.push(cards[Math.floor(Math.random() * cards.length)])
    }
    console.log('voici la liste des ', arrCards.length, ' cartes mélangées : ', arrCards);
    //je met à jour la liste de mes cartes qui se trouvent sur la table
    state.board.cards.push(arrCards);
    return arrCards;
}

function removeCard(playerCard, card) {

}

function distributeCards(cardsNumbers, player) {
    //var cards = state.board.cards[0];
    var arrCards = [];
    var boardCards = state.board.cards[0];
    for (i = 0; i < cardsNumbers; i++) {
        arrCards.push(boardCards[Math.floor(Math.random() * boardCards.length)])
    }
    console.log('le ', player, ' à ', arrCards.length, ' cartes. Voici la liste: ', arrCards);

    // je met à jour la liste de mes cartes qui se trouvent sur la table
    // en y supprimant les cartes distribuées au joueur 
    boardCards.forEach(function(cardBoard) {
        arrCards.forEach(function(card) {
            if (cardBoard === card) {
                boardCards.splice(card, 1)
            }
        })
    });

    //je met à jour le tableau des cartes du joueur 
    state[player].cards.push(arrCards);
    return arrCards;

}

if ('toutuntasdetests') {
    //playCard('player1', 2)
}


/*function playCard(player, card) {
    removeCard(state[player].cards, card)
    state.board.cards.push(card)
}*/

window.onload = function() {
    //je mélange mes 76 cartes 
    shuffle(cardsGame());

    //je distribue 7 cartes au joueur 1
    distributeCards(7, "player1");
    //état de mon store 
    console.log('il me reste ', state.board.cards[0].length, ' après la distribution du player 1 sur la table à jouer');

    //je distribue 7 cartes au joueur 2
    distributeCards(7, "player2");
    //état de mon store 
    console.log('il me reste ', state.board.cards[0].length, ' après la distribution du player2 sur la table à jouer');

    //état de mon store 
    console.log('il me reste ', state.board.cards[0].length, 'sur la table à jouer');
}