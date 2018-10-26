function Player(name, cardsNumber, gameZone) {
    this.name = name;
    this.cardsNumber = cardsNumber;
    this.gameZone = gameZone;

    var cardValue = ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'BACK'];

    var boardGame = gameZone === 'top' ? document.getElementById('color-game_board--zone-player-1') :
        document.getElementById('color-game_board--zone-player-2');
    var card = document.createElement("div");
    card.className = 'card-game-container';
    card.innerHTML = "<img class=\"card-game\" src=\"src/assets/img/back.png\">";


    for (var i = 0; i < 7; i++) {
        var newCard = card.cloneNode(true);
        newCard.fromtop = 15 + 120 * Math.floor(i / 4);

        boardGame.appendChild(newCard);
    }




}

module.exports = Player;