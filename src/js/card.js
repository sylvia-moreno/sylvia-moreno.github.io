function Card(color, number, id) {
    //gestion du nombre de cartes possibles dans le jeu 
    this.color = color;
    this.number = number;
    this.state = null;
    this.id = id;
}

module.exports = Card;