var Player = require('./player.js');

//couleur vert, rouge, bleu, jaune
var cardValue = [
    '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',
    '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',
    '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',
    '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET', 'BACK'
];

//function qui affiche des cartes au random
function getRandomCard() {
    var cards = [];
    for (i = 0; i < 7; i++) {
        cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])
    }
    return cards;
}

//je veux associer la value de l'array à une carte
function showCard() {
    var cardsArray = getRandomCard();
    var newArr = [];
    cardsArray.forEach(function(card) {
        var numberCard = card.split('');
        var cardColor = card.slice(1);
        var toto = '<div class="card card-' + cardColor + '" >' + '<span class="card-number">' + numberCard[0] + '</span>' + '</div>';
        newArr.push(toto);
    });

    return newArr;
}

//j'affiche les cartes dans chaque zone joueur 
function zonePlayer(gameZone) {
    var boardGame = gameZone === 'top' ? document.getElementById('color-game_board--zone-player-1') :
        document.getElementById('color-game_board--zone-player-2');
    var card = document.createElement("div");
    card.className = 'card-game-container';

    var arrCards = showCard();
    arrCards.map(function(item) {
        boardGame.innerHTML += item;
    })

}

//quand le joueur réel clique sur une carte, celle-ci s'affiche dans la zone "carte à jouer"
//
window.onload = function() {


    console.log('j\'affiche 7 cartes random à l\'init', getRandomCard());
    console.log('je suis le joueur fictif et mes cartes sont en bas', realPlayer = new zonePlayer('bottom'));
    console.log('je suis le joueur fictif et mes cartes sont en haut', fakePlayer = new zonePlayer('top'));



}