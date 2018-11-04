function cardTemplate(color, number, id, marginLeftValue) {

    var card =
        '<button role="button" class="card ' + color + '" id="' + id + '" style="margin-left:' + marginLeftValue + 'px;">' +
        '<div class="card_tabs card_top text-left">' + number + '</div>' +
        '<div class="card_centre text-center center-block">' + number + '</div>' +
        '<div class="card_tabs card_bottom text-left">' + number + '</div>' +
        '</button>';
    return card;
}

module.exports = cardTemplate;