function removeCard(monTasDeCartesAParser, laCarteASupprimer) {
    for (var i = monTasDeCartesAParser.length - 1; i >= 0; i--) {
        if ((monTasDeCartesAParser[i].color == laCarteASupprimer.color) && (monTasDeCartesAParser[i].id == laCarteASupprimer.id)) {
            monTasDeCartesAParser.splice(i, 1);
            return monTasDeCartesAParser;
        }
    }
}

module.exports = removeCard;