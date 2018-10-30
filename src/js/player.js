function Player(name, cards) {
    this.name = name;
    this.cards = cards;
    this.id = null;
    this.turn = false;
    this.isBot = false;
    this.play = function() {

    }
}

module.exports = Player;