function removeCard(monTasDeCartesAParser, laCarteASupprimer) {
    for (var i = monTasDeCartesAParser.length - 1; i >= 0; i--) {
        if (monTasDeCartesAParser[i] === laCarteASupprimer) {
            monTasDeCartesAParser.splice(i, 1);
        }
    }
}

module.exports = removeCard;