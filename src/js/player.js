function Player(isCardVisible, name) {
    this.isCardVisible = isCardVisible;
    this.name = name;
    this.arrayCard = null;
    this.play = function(cardNumber, cardColor) {
        //le joueur à le droit de poser une carte

        if (cardNumber === cardNumberCardPlayed) {
            //je fais disparaitre ma carte de mon jeu 
            // je fais apparaitre la même carte dans le tas 'cartes jouées'
        }


        /*gestion de la gestion des cartes 
          - est ce mon tour ? 
          - couleur de la carte 
          - nombre de carte
          - quelle est la carte cliquée 
          - est ce que je peux jouer la carte ? {myCardColor vs cardColorOntheBoard}
          - 
        */

    };



}

module.exports = Player;