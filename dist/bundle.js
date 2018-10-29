/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Card(color, number) {\r\n    //gestion du nombre de cartes possibles dans le jeu \r\n    //par type (color, number)\r\n    this.color = color;\r\n    this.number = number;\r\n    //this.isSelected = isSelected;\r\n\r\n}\r\n\r\nmodule.exports = Card;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2FyZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jYXJkLmpzPzYxNjYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ2FyZChjb2xvciwgbnVtYmVyKSB7XHJcbiAgICAvL2dlc3Rpb24gZHUgbm9tYnJlIGRlIGNhcnRlcyBwb3NzaWJsZXMgZGFucyBsZSBqZXUgXHJcbiAgICAvL3BhciB0eXBlIChjb2xvciwgbnVtYmVyKVxyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICAvL3RoaXMuaXNTZWxlY3RlZCA9IGlzU2VsZWN0ZWQ7XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhcmQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/card.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Player = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\r\nvar Card = __webpack_require__(/*! ./card.js */ \"./src/js/card.js\");\r\nvar getCard = __webpack_require__(/*! ./utils/get-card.js */ \"./src/js/utils/get-card.js\");\r\n\r\n//je click sur un element carte\r\nfunction cardClick(e) {\r\n\r\n    // alert('toto')\r\n    var cardNumber = e.path[0].textContent;\r\n    var cardColor = e.currentTarget.classList[1].slice(5);\r\n    player.play(cardNumber, cardColor);\r\n    // je dois passer à player.play :\r\n    // l'element cliqué, son numéro, sa couleur \r\n\r\n}\r\n\r\n\r\n\r\n//couleurs des cartes à jouer\r\n/*var cardValue = [\r\n    '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',\r\n    '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',\r\n    '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',\r\n    '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET'\r\n];*/\r\n\r\n//fonction qui génère dans un tableau mes 76 cartes avec leurs exceptions\r\nfunction generateCard() {\r\n    var colorCard = ['ROSE', 'ROUGE', 'BLEU', 'VIOLET'];\r\n    var arrCard = [];\r\n\r\n    colorCard.map(function(color) {\r\n        var arr = new Array(9);\r\n        for (var i = 0; i < arr.length + 1; i++) {\r\n            var card = (i + color);\r\n            //var result = i === 0 ? arrCard.push(card) : arrCard.push(card, card);\r\n            if (i === 0) {\r\n                arrCard.push(card)\r\n            } else {\r\n                arrCard.push(card, card)\r\n            }\r\n        }\r\n    })\r\n    return arrCard;\r\n}\r\n\r\n\r\n//function qui affiche 7 cartes random à l'init \r\nfunction getRandomCard() {\r\n    var cards = [];\r\n    var cardValue = generateCard();\r\n    for (i = 0; i < 7; i++) {\r\n        cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])\r\n    }\r\n    return cards;\r\n}\r\n\r\n\r\n//je veux associer la value de l'array 'cardValue' à une carte pour afficher le CSS\r\nfunction renderCard(player) {\r\n    var cardsArray = getRandomCard();\r\n    player.cardsArray = cardsArray;\r\n\r\n    var newArr = [];\r\n    var index = 0;\r\n    cardsArray.forEach(function(card) {\r\n        var numberCard = card.split('');\r\n        var cardColor = card.slice(1);\r\n        index++\r\n\r\n        var myCard = null;\r\n\r\n        var card = new Card(cardColor, numberCard[0]);\r\n\r\n        if (player.isCardVisible) {\r\n            myCard = '<div class=\"card card-' + card.color + '\" id=\"player1' + index + '\">' + '<span class=\"card-number\">' + card.number + '</span>' + '</div>';\r\n        } else {\r\n            myCard = '<div class=\"card card-BACK\"><span class=\"card-number\">B</span></div>';\r\n        }\r\n        newArr.push(myCard);\r\n    });\r\n\r\n    return newArr;\r\n}\r\n\r\n\r\n//j'affiche les cartes dans chaque zone joueur \r\nfunction zonePlayer(gameZone, typePlayer) {\r\n    var player = new Player(typePlayer, 'bob')\r\n    var arrCards = renderCard(player);\r\n\r\n    var boardGame = gameZone === 'top' && !player.isCardVisible ? $('.color-game_board--zone-player-2')[0] :\r\n        $('.color-game_board--zone-player-1')[0];\r\n    var card = document.createElement(\"div\");\r\n    card.className = 'card-game-container';\r\n\r\n    var index = 0;\r\n    arrCards.map(function(item) {\r\n        index++\r\n        boardGame.innerHTML += item;\r\n\r\n        if (typePlayer) {\r\n            //il ne s'ajoute qu'au dernier élément pourquoi ???\r\n            document.getElementById(\"player1\" + index).addEventListener(\"click\", cardClick, false);\r\n        }\r\n    });\r\n\r\n    player.arrayCard = arrCards; //7 cartes\r\n\r\n    return player\r\n}\r\n\r\n//affiche la zone de la pioche\r\nfunction zonePickaxe() {\r\n    var arrCards = new getCard();\r\n    var index = 0;\r\n    var pickaxe = $('.pickaxe')[0];\r\n    var newArr = [];\r\n\r\n    arrCards.forEach(function(card) {\r\n        var numberCard = card.split('');\r\n        var cardColor = card.slice(1);\r\n        var myCard = null;\r\n        var card = new Card(cardColor, numberCard[0]);\r\n        index++\r\n\r\n        myCard = '<div class=\"card card-pickaxe card-' + card.color + '\" id=\"card-pickaxe' + index + '\">' + '<span class=\"card-number\">' + card.number + '</span>' + '</div>';\r\n        newArr.push(myCard);\r\n    });\r\n\r\n    newArr.map(function(card) {\r\n        pickaxe.innerHTML += card;\r\n    });\r\n\r\n}\r\n\r\nfunction showFirstCard() {\r\n    var firstPickaxeCard = $('.card-pickaxe:first-child').detach();\r\n    $('.card-played').append(firstPickaxeCard);\r\n}\r\n\r\nwindow.onload = function() {\r\n    console.log('j\\'affiche 7 cartes random à l\\'init', getRandomCard());\r\n    console.log('je suis le joueur fictif et mes cartes sont en haut', new zonePlayer('top', false));\r\n    console.log('je suis le joueur fictif et mes cartes sont en bas', new zonePlayer('bottom', true));\r\n    console.log('je suis la pioche', zonePickaxe())\r\n\r\n    //à l'init j'affiche une carte random dans la zone 'carte à jouer' pour le début de jeu\r\n    showFirstCard()\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyLmpzJyk7XHJcbnZhciBDYXJkID0gcmVxdWlyZSgnLi9jYXJkLmpzJyk7XHJcbnZhciBnZXRDYXJkID0gcmVxdWlyZSgnLi91dGlscy9nZXQtY2FyZC5qcycpO1xyXG5cclxuLy9qZSBjbGljayBzdXIgdW4gZWxlbWVudCBjYXJ0ZVxyXG5mdW5jdGlvbiBjYXJkQ2xpY2soZSkge1xyXG5cclxuICAgIC8vIGFsZXJ0KCd0b3RvJylcclxuICAgIHZhciBjYXJkTnVtYmVyID0gZS5wYXRoWzBdLnRleHRDb250ZW50O1xyXG4gICAgdmFyIGNhcmRDb2xvciA9IGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMV0uc2xpY2UoNSk7XHJcbiAgICBwbGF5ZXIucGxheShjYXJkTnVtYmVyLCBjYXJkQ29sb3IpO1xyXG4gICAgLy8gamUgZG9pcyBwYXNzZXIgw6AgcGxheWVyLnBsYXkgOlxyXG4gICAgLy8gbCdlbGVtZW50IGNsaXF1w6ksIHNvbiBudW3DqXJvLCBzYSBjb3VsZXVyIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vL2NvdWxldXJzIGRlcyBjYXJ0ZXMgw6Agam91ZXJcclxuLyp2YXIgY2FyZFZhbHVlID0gW1xyXG4gICAgJzBST1NFJywgJzFST1NFJywgJzJST1NFJywgJzNST1NFJywgJzRST1NFJywgJzVST1NFJywgJzZST1NFJywgJzdST1NFJywgJzhST1NFJywgJzlST1NFJyxcclxuICAgICcwUk9VR0UnLCAnMVJPVUdFJywgJzJST1VHRScsICczUk9VR0UnLCAnNFJPVUdFJywgJzVST1VHRScsICc2Uk9VR0UnLCAnN1JPVUdFJywgJzhST1VHRScsICc5Uk9VR0UnLFxyXG4gICAgJzBCTEVVJywgJzFCTEVVJywgJzJCTEVVJywgJzNCTEVVJywgJzRCTEVVJywgJzVCTEVVJywgJzZCTEVVJywgJzdCTEVVJywgJzhCTEVVJywgJzlCTEVVJyxcclxuICAgICcwVklPTEVUJywgJzFWSU9MRVQnLCAnMlZJT0xFVCcsICczVklPTEVUJywgJzRWSU9MRVQnLCAnNVZJT0xFVCcsICc2VklPTEVUJywgJzdWSU9MRVQnLCAnOFZJT0xFVCcsICc5VklPTEVUJ1xyXG5dOyovXHJcblxyXG4vL2ZvbmN0aW9uIHF1aSBnw6luw6hyZSBkYW5zIHVuIHRhYmxlYXUgbWVzIDc2IGNhcnRlcyBhdmVjIGxldXJzIGV4Y2VwdGlvbnNcclxuZnVuY3Rpb24gZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdmFyIGNvbG9yQ2FyZCA9IFsnUk9TRScsICdST1VHRScsICdCTEVVJywgJ1ZJT0xFVCddO1xyXG4gICAgdmFyIGFyckNhcmQgPSBbXTtcclxuXHJcbiAgICBjb2xvckNhcmQubWFwKGZ1bmN0aW9uKGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IG5ldyBBcnJheSg5KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGggKyAxOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNhcmQgPSAoaSArIGNvbG9yKTtcclxuICAgICAgICAgICAgLy92YXIgcmVzdWx0ID0gaSA9PT0gMCA/IGFyckNhcmQucHVzaChjYXJkKSA6IGFyckNhcmQucHVzaChjYXJkLCBjYXJkKTtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFyckNhcmQucHVzaChjYXJkKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJyQ2FyZC5wdXNoKGNhcmQsIGNhcmQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGFyckNhcmQ7XHJcbn1cclxuXHJcblxyXG4vL2Z1bmN0aW9uIHF1aSBhZmZpY2hlIDcgY2FydGVzIHJhbmRvbSDDoCBsJ2luaXQgXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNhcmQoKSB7XHJcbiAgICB2YXIgY2FyZHMgPSBbXTtcclxuICAgIHZhciBjYXJkVmFsdWUgPSBnZW5lcmF0ZUNhcmQoKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICBjYXJkcy5wdXNoKGNhcmRWYWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYXJkVmFsdWUubGVuZ3RoKV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FyZHM7XHJcbn1cclxuXHJcblxyXG4vL2plIHZldXggYXNzb2NpZXIgbGEgdmFsdWUgZGUgbCdhcnJheSAnY2FyZFZhbHVlJyDDoCB1bmUgY2FydGUgcG91ciBhZmZpY2hlciBsZSBDU1NcclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChwbGF5ZXIpIHtcclxuICAgIHZhciBjYXJkc0FycmF5ID0gZ2V0UmFuZG9tQ2FyZCgpO1xyXG4gICAgcGxheWVyLmNhcmRzQXJyYXkgPSBjYXJkc0FycmF5O1xyXG5cclxuICAgIHZhciBuZXdBcnIgPSBbXTtcclxuICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICBjYXJkc0FycmF5LmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIHZhciBudW1iZXJDYXJkID0gY2FyZC5zcGxpdCgnJyk7XHJcbiAgICAgICAgdmFyIGNhcmRDb2xvciA9IGNhcmQuc2xpY2UoMSk7XHJcbiAgICAgICAgaW5kZXgrK1xyXG5cclxuICAgICAgICB2YXIgbXlDYXJkID0gbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIGNhcmQgPSBuZXcgQ2FyZChjYXJkQ29sb3IsIG51bWJlckNhcmRbMF0pO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyLmlzQ2FyZFZpc2libGUpIHtcclxuICAgICAgICAgICAgbXlDYXJkID0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtJyArIGNhcmQuY29sb3IgKyAnXCIgaWQ9XCJwbGF5ZXIxJyArIGluZGV4ICsgJ1wiPicgKyAnPHNwYW4gY2xhc3M9XCJjYXJkLW51bWJlclwiPicgKyBjYXJkLm51bWJlciArICc8L3NwYW4+JyArICc8L2Rpdj4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG15Q2FyZCA9ICc8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLUJBQ0tcIj48c3BhbiBjbGFzcz1cImNhcmQtbnVtYmVyXCI+Qjwvc3Bhbj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdBcnIucHVzaChteUNhcmQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld0FycjtcclxufVxyXG5cclxuXHJcbi8vaidhZmZpY2hlIGxlcyBjYXJ0ZXMgZGFucyBjaGFxdWUgem9uZSBqb3VldXIgXHJcbmZ1bmN0aW9uIHpvbmVQbGF5ZXIoZ2FtZVpvbmUsIHR5cGVQbGF5ZXIpIHtcclxuICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKHR5cGVQbGF5ZXIsICdib2InKVxyXG4gICAgdmFyIGFyckNhcmRzID0gcmVuZGVyQ2FyZChwbGF5ZXIpO1xyXG5cclxuICAgIHZhciBib2FyZEdhbWUgPSBnYW1lWm9uZSA9PT0gJ3RvcCcgJiYgIXBsYXllci5pc0NhcmRWaXNpYmxlID8gJCgnLmNvbG9yLWdhbWVfYm9hcmQtLXpvbmUtcGxheWVyLTInKVswXSA6XHJcbiAgICAgICAgJCgnLmNvbG9yLWdhbWVfYm9hcmQtLXpvbmUtcGxheWVyLTEnKVswXTtcclxuICAgIHZhciBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQtZ2FtZS1jb250YWluZXInO1xyXG5cclxuICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICBhcnJDYXJkcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIGluZGV4KytcclxuICAgICAgICBib2FyZEdhbWUuaW5uZXJIVE1MICs9IGl0ZW07XHJcblxyXG4gICAgICAgIGlmICh0eXBlUGxheWVyKSB7XHJcbiAgICAgICAgICAgIC8vaWwgbmUgcydham91dGUgcXUnYXUgZGVybmllciDDqWzDqW1lbnQgcG91cnF1b2kgPz8/XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMVwiICsgaW5kZXgpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF5ZXIuYXJyYXlDYXJkID0gYXJyQ2FyZHM7IC8vNyBjYXJ0ZXNcclxuXHJcbiAgICByZXR1cm4gcGxheWVyXHJcbn1cclxuXHJcbi8vYWZmaWNoZSBsYSB6b25lIGRlIGxhIHBpb2NoZVxyXG5mdW5jdGlvbiB6b25lUGlja2F4ZSgpIHtcclxuICAgIHZhciBhcnJDYXJkcyA9IG5ldyBnZXRDYXJkKCk7XHJcbiAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgdmFyIHBpY2theGUgPSAkKCcucGlja2F4ZScpWzBdO1xyXG4gICAgdmFyIG5ld0FyciA9IFtdO1xyXG5cclxuICAgIGFyckNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIHZhciBudW1iZXJDYXJkID0gY2FyZC5zcGxpdCgnJyk7XHJcbiAgICAgICAgdmFyIGNhcmRDb2xvciA9IGNhcmQuc2xpY2UoMSk7XHJcbiAgICAgICAgdmFyIG15Q2FyZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGNhcmQgPSBuZXcgQ2FyZChjYXJkQ29sb3IsIG51bWJlckNhcmRbMF0pO1xyXG4gICAgICAgIGluZGV4KytcclxuXHJcbiAgICAgICAgbXlDYXJkID0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtcGlja2F4ZSBjYXJkLScgKyBjYXJkLmNvbG9yICsgJ1wiIGlkPVwiY2FyZC1waWNrYXhlJyArIGluZGV4ICsgJ1wiPicgKyAnPHNwYW4gY2xhc3M9XCJjYXJkLW51bWJlclwiPicgKyBjYXJkLm51bWJlciArICc8L3NwYW4+JyArICc8L2Rpdj4nO1xyXG4gICAgICAgIG5ld0Fyci5wdXNoKG15Q2FyZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXdBcnIubWFwKGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICBwaWNrYXhlLmlubmVySFRNTCArPSBjYXJkO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rmlyc3RDYXJkKCkge1xyXG4gICAgdmFyIGZpcnN0UGlja2F4ZUNhcmQgPSAkKCcuY2FyZC1waWNrYXhlOmZpcnN0LWNoaWxkJykuZGV0YWNoKCk7XHJcbiAgICAkKCcuY2FyZC1wbGF5ZWQnKS5hcHBlbmQoZmlyc3RQaWNrYXhlQ2FyZCk7XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdqXFwnYWZmaWNoZSA3IGNhcnRlcyByYW5kb20gw6AgbFxcJ2luaXQnLCBnZXRSYW5kb21DYXJkKCkpO1xyXG4gICAgY29uc29sZS5sb2coJ2plIHN1aXMgbGUgam91ZXVyIGZpY3RpZiBldCBtZXMgY2FydGVzIHNvbnQgZW4gaGF1dCcsIG5ldyB6b25lUGxheWVyKCd0b3AnLCBmYWxzZSkpO1xyXG4gICAgY29uc29sZS5sb2coJ2plIHN1aXMgbGUgam91ZXVyIGZpY3RpZiBldCBtZXMgY2FydGVzIHNvbnQgZW4gYmFzJywgbmV3IHpvbmVQbGF5ZXIoJ2JvdHRvbScsIHRydWUpKTtcclxuICAgIGNvbnNvbGUubG9nKCdqZSBzdWlzIGxhIHBpb2NoZScsIHpvbmVQaWNrYXhlKCkpXHJcblxyXG4gICAgLy/DoCBsJ2luaXQgaidhZmZpY2hlIHVuZSBjYXJ0ZSByYW5kb20gZGFucyBsYSB6b25lICdjYXJ0ZSDDoCBqb3VlcicgcG91ciBsZSBkw6lidXQgZGUgamV1XHJcbiAgICBzaG93Rmlyc3RDYXJkKClcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Player(isCardVisible, name) {\r\n    this.isCardVisible = isCardVisible;\r\n    this.name = name;\r\n    this.arrayCard = null;\r\n    this.play = function(cardNumber, cardColor) {\r\n\r\n        //le joueur à le droit de poser une carte\r\n\r\n        if (cardNumber === cardNumberCardPlayed) {\r\n            //je fais disparaitre ma carte de mon jeu \r\n            // je fais apparaitre la même carte dans le tas 'cartes jouées'\r\n        }\r\n\r\n\r\n        /*gestion de la gestion des cartes \r\n          - est ce mon tour ? \r\n          - couleur de la carte \r\n          - nombre de carte\r\n          - quelle est la carte cliquée \r\n          - est ce que je peux jouer la carte ? {myCardColor vs cardColorOntheBoard}\r\n          - \r\n        */\r\n\r\n    };\r\n\r\n\r\n\r\n}\r\n\r\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGxheWVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsYXllci5qcz9lZTIwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBsYXllcihpc0NhcmRWaXNpYmxlLCBuYW1lKSB7XHJcbiAgICB0aGlzLmlzQ2FyZFZpc2libGUgPSBpc0NhcmRWaXNpYmxlO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYXJyYXlDYXJkID0gbnVsbDtcclxuICAgIHRoaXMucGxheSA9IGZ1bmN0aW9uKGNhcmROdW1iZXIsIGNhcmRDb2xvcikge1xyXG5cclxuICAgICAgICAvL2xlIGpvdWV1ciDDoCBsZSBkcm9pdCBkZSBwb3NlciB1bmUgY2FydGVcclxuXHJcbiAgICAgICAgaWYgKGNhcmROdW1iZXIgPT09IGNhcmROdW1iZXJDYXJkUGxheWVkKSB7XHJcbiAgICAgICAgICAgIC8vamUgZmFpcyBkaXNwYXJhaXRyZSBtYSBjYXJ0ZSBkZSBtb24gamV1IFxyXG4gICAgICAgICAgICAvLyBqZSBmYWlzIGFwcGFyYWl0cmUgbGEgbcOqbWUgY2FydGUgZGFucyBsZSB0YXMgJ2NhcnRlcyBqb3XDqWVzJ1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qZ2VzdGlvbiBkZSBsYSBnZXN0aW9uIGRlcyBjYXJ0ZXMgXHJcbiAgICAgICAgICAtIGVzdCBjZSBtb24gdG91ciA/IFxyXG4gICAgICAgICAgLSBjb3VsZXVyIGRlIGxhIGNhcnRlIFxyXG4gICAgICAgICAgLSBub21icmUgZGUgY2FydGVcclxuICAgICAgICAgIC0gcXVlbGxlIGVzdCBsYSBjYXJ0ZSBjbGlxdcOpZSBcclxuICAgICAgICAgIC0gZXN0IGNlIHF1ZSBqZSBwZXV4IGpvdWVyIGxhIGNhcnRlID8ge215Q2FyZENvbG9yIHZzIGNhcmRDb2xvck9udGhlQm9hcmR9XHJcbiAgICAgICAgICAtIFxyXG4gICAgICAgICovXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/player.js\n");

/***/ }),

/***/ "./src/js/utils/get-card.js":
/*!**********************************!*\
  !*** ./src/js/utils/get-card.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//function qui génère des cartes\r\nvar cardValue = [\r\n    '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',\r\n    '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',\r\n    '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',\r\n    '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET'\r\n];\r\n\r\nfunction getCard() {\r\n    var cards = [];\r\n    for (i = 0; i < cardValue.length; i++) {\r\n        cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])\r\n    }\r\n    return cards;\r\n}\r\n\r\nmodule.exports = getCard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvZ2V0LWNhcmQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZ2V0LWNhcmQuanM/MDZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2Z1bmN0aW9uIHF1aSBnw6luw6hyZSBkZXMgY2FydGVzXHJcbnZhciBjYXJkVmFsdWUgPSBbXHJcbiAgICAnMFJPU0UnLCAnMVJPU0UnLCAnMlJPU0UnLCAnM1JPU0UnLCAnNFJPU0UnLCAnNVJPU0UnLCAnNlJPU0UnLCAnN1JPU0UnLCAnOFJPU0UnLCAnOVJPU0UnLFxyXG4gICAgJzBST1VHRScsICcxUk9VR0UnLCAnMlJPVUdFJywgJzNST1VHRScsICc0Uk9VR0UnLCAnNVJPVUdFJywgJzZST1VHRScsICc3Uk9VR0UnLCAnOFJPVUdFJywgJzlST1VHRScsXHJcbiAgICAnMEJMRVUnLCAnMUJMRVUnLCAnMkJMRVUnLCAnM0JMRVUnLCAnNEJMRVUnLCAnNUJMRVUnLCAnNkJMRVUnLCAnN0JMRVUnLCAnOEJMRVUnLCAnOUJMRVUnLFxyXG4gICAgJzBWSU9MRVQnLCAnMVZJT0xFVCcsICcyVklPTEVUJywgJzNWSU9MRVQnLCAnNFZJT0xFVCcsICc1VklPTEVUJywgJzZWSU9MRVQnLCAnN1ZJT0xFVCcsICc4VklPTEVUJywgJzlWSU9MRVQnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRDYXJkKCkge1xyXG4gICAgdmFyIGNhcmRzID0gW107XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2FyZFZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2FyZHMucHVzaChjYXJkVmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FyZFZhbHVlLmxlbmd0aCldKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhcmRzO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldENhcmQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/get-card.js\n");

/***/ })

/******/ });