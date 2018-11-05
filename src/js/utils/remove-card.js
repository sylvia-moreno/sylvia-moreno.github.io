function removeCard(monTasDeCartesAParser, laCarteASupprimer) {
    for (var i = monTasDeCartesAParser.length - 1; i--;) {
        if ((monTasDeCartesAParser[i].color == laCarteASupprimer.color) && (monTasDeCartesAParser[i].id == laCarteASupprimer.id)) monTasDeCartesAParser.splice(i, 1);
    }
}

module.exports = removeCard;