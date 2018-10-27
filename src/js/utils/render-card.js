function renderCard(cardsArray) {
    //var cardsArray = getRandomCard();
    var newArr = [];
    cardsArray.forEach(function(card) {
        var numberCard = card.split('');
        var cardColor = card.slice(1);
        var toto = '<div class="card card-' + cardColor + '" >' + '<span class="card-number">' + numberCard[0] + '</span>' + '</div>';
        newArr.push(toto);
    });

    return newArr;
}

module.exports = renderCard;