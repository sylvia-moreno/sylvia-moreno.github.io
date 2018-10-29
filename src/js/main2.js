var Player = require('./player.js');
var Card = require('./card.js');
var getCard = require('./utils/get-card.js');
var totalCardGame = generateCard().length;


var state = {
    numberCard: totalCardGame,
    player1,
    player2,
    pioche: 0,
    tasJouer: 0;
}


//je click sur un element carte
function cardClick(e) {
    debugger
    // alert('toto')
    var cardNumber = e.path[0].textContent;
    var cardColor = e.currentTarget.classList[1].slice(5);

    // je dois passer à player.play :
    // l'element cliqué, son numéro, sa couleur
    //player.play(cardNumber, cardColor);
}



//couleurs des cartes à jouer
/*var cardValue = [
    '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',
    '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',
    '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',
    '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET'
];*/

//fonction qui génère dans un tableau mes 76 cartes avec leurs exceptions
function generateCard() {
    var colorCard = ['ROSE', 'ROUGE', 'BLEU', 'VIOLET'];
    var arrCard = [];

    colorCard.map(function(color) {
        var arr = new Array(9);
        for (var i = 0; i < arr.length + 1; i++) {
            var card = (i + color);
            //var result = i === 0 ? arrCard.push(card) : arrCard.push(card, card);
            if (i === 0) {
                arrCard.push(card)
            } else {
                arrCard.push(card, card)
            }
        }
    })
    return arrCard;
}


//function qui affiche 7 cartes random à l'init 
function getRandomCard() {
    var cards = [];
    var cardValue = generateCard();
    for (i = 0; i < 7; i++) {
        cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])
    }
    return cards;
}


//je veux associer la value de l'array 'cardValue' à une carte pour afficher le CSS
function renderCard(player) {
    var cardsArray = getRandomCard();
    player.cardsArray = cardsArray;

    var newArr = [];
    var index = 0;
    cardsArray.forEach(function(card) {
        var numberCard = card.split('');
        var cardColor = card.slice(1);
        index++

        var myCard = null;

        var card = new Card(cardColor, numberCard[0]);

        if (player.isCardVisible) {
            myCard = '<a href="#"><div class="card card-' + card.color + '" id="player1' + index + '">' + '<span class="card-number">' + card.number + '</span>' + '</div></a>';
        } else {
            myCard = '<div class="card card-BACK"><span class="card-number">B</span></div>';
        }
        newArr.push(myCard);
    });

    return newArr;
}


//j'affiche les cartes dans chaque zone joueur 
function zonePlayer(gameZone, typePlayer) {
    var player = new Player(typePlayer, 'bob')
    var arrCards = renderCard(player);

    var boardGame = gameZone === 'top' && !player.isCardVisible ? $('.color-game_board--zone-player-2')[0] :
        $('.color-game_board--zone-player-1')[0];
    var card = document.createElement("div");
    card.className = 'card-game-container';

    var index = 0;
    arrCards.map(function(item) {
        index++
        boardGame.innerHTML += item;

        if (typePlayer) {
            //il ne s'ajoute qu'au dernier élément pourquoi ???
            boardGame.addEventListener("click", cardClick, false);
        }
    });

    player.arrayCard = arrCards; //7 cartes
    return player
}

//affiche la zone de la pioche
function zonePickaxe() {
    var arrCards = new getCard();
    var index = 0;
    var pickaxe = $('.pickaxe')[0];
    var newArr = [];

    arrCards.forEach(function(card) {
        var numberCard = card.split('');
        var cardColor = card.slice(1);
        var myCard = null;
        var card = new Card(cardColor, numberCard[0]);
        index++

        myCard = '<a href="#"><div class="card card-pickaxe card-' + card.color + '" id="card-pickaxe' + index + '">' + '<span class="card-number">' + card.number + '</span>' + '</div></a>';
        newArr.push(myCard);
    });

    newArr.map(function(card) {
        pickaxe.innerHTML += card;
    });

}

function showFirstCard() {
    var firstPickaxeCard = $('.card-pickaxe:first-child').detach();
    $('.card-played').append(firstPickaxeCard);
}

window.onload = function() {
    console.log('j\'affiche 7 cartes random à l\'init', getRandomCard());
    console.log('je suis le joueur fictif et mes cartes sont en haut', new zonePlayer('top', false));
    console.log('je suis le joueur fictif et mes cartes sont en bas', new zonePlayer('bottom', true));
    console.log('je suis la pioche', zonePickaxe())

    //à l'init j'affiche une carte random dans la zone 'carte à jouer' pour le début de jeu
    showFirstCard()

    //je fais la zone du joueur 1
    // je fais la zone du joueur 2
    // Je distribue 7 cartes au joueur 1
    //je distribue 7 cartes au joueur 2
}