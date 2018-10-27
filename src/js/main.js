var Player = require('./player.js');
var Card = require('./card.js');


var CardGame = function() {

    //couleurs des cartes à jouer
    var cardValue = [
        '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',
        '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',
        '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',
        '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET'
    ];

    //function qui affiche 7 cartes random à l'init 
    function getRandomCard() {
        var cards = [];
        for (i = 0; i < 7; i++) {
            cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])
        }
        return cards;
    }

    function cardClick() {

        alert('toto')



        //je click sur un element carte
    }
    //je veux associer la value de l'array 'cardValue' à une carte pour afficher le CSS
    function renderCard(player) {
        var cardsArray = getRandomCard();
        player.cardsArray = cardsArray;

        var newArr = [];
        cardsArray.forEach(function(card) {
            var numberCard = card.split('');
            var cardColor = card.slice(1);

            var myCard = null;

            var card = new Card(cardColor, numberCard[0]);

            if (player.isCardVisible) {
                myCard = '<div onclick="cardClick()" class="card card-' + card.color + '" id="player1">' + '<span class="card-number">' + card.number + '</span>' + '</div>';

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

        arrCards.map(function(item) {

            boardGame.innerHTML += item;
        });

        player.arrayCard = arrCards; //7 cartes

        return player
    }


    window.onload = function() {

        console.log('j\'affiche 7 cartes random à l\'init', getRandomCard());
        console.log('je suis le joueur fictif et mes cartes sont en haut', new zonePlayer('top', false));
        console.log('je suis le joueur fictif et mes cartes sont en bas', new zonePlayer('bottom', true));


    }
}
CardGame();