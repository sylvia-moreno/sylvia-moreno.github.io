var cardsGame = require('./utils/get-card.js');

const state = {
    player1: {
        cards: []
    },

    player2: {
        cards: []
    },

    board: {
        cards: [] //cartes totales de mon jeu
    },

    pioche: {
        cards: []
    },

    turn: 'player1',
}



/* -------- */
/*
Functions utils
*/
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

function updateStateCardBoard(cards, arrCardBoard) {
    var index;
    for (var i = 0; i < cards.length; i++) {
        index = arrCardBoard.indexOf(arrCardBoard[i]);
        if (index > -1) {
            arrCardBoard.splice(index, 1);
        }
    }
}

function removeCard(monTasDeCartesAParser, laCarteASupprimer) {
    //removeCard(state[player].cards, card)
    for (var i = monTasDeCartesAParser.length - 1; i >= 0; i--) {
        if (monTasDeCartesAParser[i] === laCarteASupprimer) {
            monTasDeCartesAParser.splice(i, 1);
        }
    }
}


/* -------- */
/*
Init game functions
*/
function distributeCards(cardsNumbers, player) {
    //var cards = state.board.cards[0];
    var arrCards = [];
    var boardCards = state.board.cards[0];
    for (i = 0; i < cardsNumbers; i++) {
        arrCards.push(boardCards[Math.floor(Math.random() * boardCards.length)])
    }
    console.log('le ', player, ' à ', arrCards.length, ' cartes. Voici la liste: ', arrCards);

    // je met à jour la liste de mes cartes du jeu (board)
    // en y supprimant les cartes qui viennent d'être distribuées au joueur 
    updateStateCardBoard(arrCards, boardCards);

    //je met à jour le tableau des cartes du joueur 
    state[player].cards.push(arrCards);
    return arrCards;
}

function initCardOnBoard(numberCard) {

    //je prend le tas de cartes du board et j'en affiche le nombre que je désire
    var cardsBoard = state.board.cards[0];
    var newArr = [];

    for (var i = 0; i < numberCard; i++) {
        newArr.push(cardsBoard[i]);
    }

    //je met à jour le nombre de cartes dans le jeu
    updateStateCardBoard(newArr, cardsBoard) //=> PAS LA BONNE VALEUR !!

    return newArr;
}

function initCardPioche(cards) {
    state.pioche.cards = cards;
    return cards;
}


/* -------- */
/*
Game Tour function
*/
function gameTour(player) {
    //je met à jour le state du joueur à qui c'est le tour
    state.turn = player;

    //je place un event listener sur la div parent des cartes
    $('.zone-player-bottom').addEventListener('click', cardClick, false);

    function cardClick(e) {
        var element = e.target;
        //placer un data-attribut sur chaque carte générer

        //je vérifie un tas de règle avant de décider si je peux jouer 
        // if (...) => 
        /*  
            playCard(player, state[player].cards)
            function playCard(player, card) {
                removeCard(state[player].cards, card) //je supprime la carte cliquée du tas de cartes du joueur 
                state.board.cards.push(card) // je la rajoute au tas de cartes du board
                updatePioche()
                updateCardBoard()
            }
        */
        //je ne peux pas jouer  
        // else 
        /*
            function cannotPlay(player, card) {
                
            }
        */
    }
}

if ('toutuntasdetests') {
    //playCard('player1', 2)
}




window.onload = function() {
    //je mélange mes 76 cartes 
    shuffle(cardsGame());

    //je distribue 7 cartes au joueur 1
    distributeCards(7, "player1");
    //renderCards(cards, locationHTML);
    //état de mon store 
    console.log('il me reste ', state.board.cards[0].length, ' après la distribution du player 1 sur la table à jouer');

    //je distribue 7 cartes au joueur 2
    distributeCards(7, "player2");
    //état de mon store 
    console.log('il me reste ', state.board.cards[0].length, ' après la distribution du player2 sur la table à jouer');

    //état de mon store 
    console.log('il me reste ', state.board.cards[0].length, 'sur la table à jouer');

    //j'init une carte au hasard sur le board pour démarrer le jeu : il s'agit de la pile "cartes à jouer"
    initCardOnBoard(1);
    console.log('j\'ai ', initCardOnBoard(1).length, ' carte dans la pile "cartes à jouer" ');
    //état de mon store 
    console.log('il me reste ', state.board.cards[0].length, ' cartes sur la table à jouer');

    //j'init la pile de cartes de la pioche = reste des cartes du board
    initCardPioche(state.board.cards[0])
    console.log('j\'ai ', initCardPioche(state.board.cards[0].length), ' de cartes dans la pioche')
}