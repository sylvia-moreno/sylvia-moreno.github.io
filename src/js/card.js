function Card(color, number, id) {
    //gestion du nombre de cartes possibles dans le jeu 
    //par type (color, number)
    this.color = color;
    this.number = number;
    this.state = null;
    this.id = id;
    //this.isSelected = isSelected;
}

module.exports = Card;