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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cardsGame = __webpack_require__(/*! ./utils/get-card.js */ \"./src/js/utils/get-card.js\");\r\n\r\nconst state = {\r\n    player1: {\r\n        cards: []\r\n    },\r\n\r\n    player2: {\r\n        cards: []\r\n    },\r\n\r\n    board: {\r\n        cards: []\r\n    },\r\n\r\n    pioche: {\r\n        cards: []\r\n    },\r\n\r\n    turn: 'player1',\r\n}\r\n\r\nfunction shuffle(cards) {\r\n    var arrCards = [];\r\n    for (i = 0; i < cards.length; i++) {\r\n        arrCards.push(cards[Math.floor(Math.random() * cards.length)])\r\n    }\r\n    console.log('voici la liste des ', arrCards.length, ' cartes mélangées : ', arrCards);\r\n    //je met à jour la liste de mes cartes qui se trouvent sur la table\r\n    state.board.cards.push(arrCards);\r\n    return arrCards;\r\n}\r\n\r\nfunction removeCard(playerCard, card) {\r\n\r\n}\r\n\r\nfunction distributeCards(cardsNumbers, player) {\r\n    //var cards = state.board.cards[0];\r\n    var arrCards = [];\r\n    var boardCards = state.board.cards[0];\r\n    for (i = 0; i < cardsNumbers; i++) {\r\n        arrCards.push(boardCards[Math.floor(Math.random() * boardCards.length)])\r\n    }\r\n    console.log('le ', player, ' à ', arrCards.length, ' cartes. Voici la liste: ', arrCards);\r\n\r\n    // je met à jour la liste de mes cartes qui se trouvent sur la table\r\n    // en y supprimant les cartes distribuées au joueur \r\n    boardCards.forEach(function(cardBoard) {\r\n        arrCards.forEach(function(card) {\r\n            if (cardBoard === card) {\r\n                boardCards.splice(card, 1)\r\n            }\r\n        })\r\n    });\r\n\r\n    //je met à jour le tableau des cartes du joueur \r\n    state[player].cards.push(arrCards);\r\n    return arrCards;\r\n\r\n}\r\n\r\nif ('toutuntasdetests') {\r\n    //playCard('player1', 2)\r\n}\r\n\r\n\r\n/*function playCard(player, card) {\r\n    removeCard(state[player].cards, card)\r\n    state.board.cards.push(card)\r\n}*/\r\n\r\nwindow.onload = function() {\r\n    //je mélange mes 76 cartes \r\n    shuffle(cardsGame());\r\n\r\n    //je distribue 7 cartes au joueur 1\r\n    distributeCards(7, \"player1\");\r\n    //état de mon store \r\n    console.log('il me reste ', state.board.cards[0].length, ' après la distribution du player 1 sur la table à jouer');\r\n\r\n    //je distribue 7 cartes au joueur 2\r\n    distributeCards(7, \"player2\");\r\n    //état de mon store \r\n    console.log('il me reste ', state.board.cards[0].length, ' après la distribution du player2 sur la table à jouer');\r\n\r\n    //état de mon store \r\n    console.log('il me reste ', state.board.cards[0].length, 'sur la table à jouer');\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhcmRzR2FtZSA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0LWNhcmQuanMnKTtcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gICAgcGxheWVyMToge1xyXG4gICAgICAgIGNhcmRzOiBbXVxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5ZXIyOiB7XHJcbiAgICAgICAgY2FyZHM6IFtdXHJcbiAgICB9LFxyXG5cclxuICAgIGJvYXJkOiB7XHJcbiAgICAgICAgY2FyZHM6IFtdXHJcbiAgICB9LFxyXG5cclxuICAgIHBpb2NoZToge1xyXG4gICAgICAgIGNhcmRzOiBbXVxyXG4gICAgfSxcclxuXHJcbiAgICB0dXJuOiAncGxheWVyMScsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoY2FyZHMpIHtcclxuICAgIHZhciBhcnJDYXJkcyA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXJyQ2FyZHMucHVzaChjYXJkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYXJkcy5sZW5ndGgpXSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCd2b2ljaSBsYSBsaXN0ZSBkZXMgJywgYXJyQ2FyZHMubGVuZ3RoLCAnIGNhcnRlcyBtw6lsYW5nw6llcyA6ICcsIGFyckNhcmRzKTtcclxuICAgIC8vamUgbWV0IMOgIGpvdXIgbGEgbGlzdGUgZGUgbWVzIGNhcnRlcyBxdWkgc2UgdHJvdXZlbnQgc3VyIGxhIHRhYmxlXHJcbiAgICBzdGF0ZS5ib2FyZC5jYXJkcy5wdXNoKGFyckNhcmRzKTtcclxuICAgIHJldHVybiBhcnJDYXJkcztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2FyZChwbGF5ZXJDYXJkLCBjYXJkKSB7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXN0cmlidXRlQ2FyZHMoY2FyZHNOdW1iZXJzLCBwbGF5ZXIpIHtcclxuICAgIC8vdmFyIGNhcmRzID0gc3RhdGUuYm9hcmQuY2FyZHNbMF07XHJcbiAgICB2YXIgYXJyQ2FyZHMgPSBbXTtcclxuICAgIHZhciBib2FyZENhcmRzID0gc3RhdGUuYm9hcmQuY2FyZHNbMF07XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2FyZHNOdW1iZXJzOyBpKyspIHtcclxuICAgICAgICBhcnJDYXJkcy5wdXNoKGJvYXJkQ2FyZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRDYXJkcy5sZW5ndGgpXSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdsZSAnLCBwbGF5ZXIsICcgw6AgJywgYXJyQ2FyZHMubGVuZ3RoLCAnIGNhcnRlcy4gVm9pY2kgbGEgbGlzdGU6ICcsIGFyckNhcmRzKTtcclxuXHJcbiAgICAvLyBqZSBtZXQgw6Agam91ciBsYSBsaXN0ZSBkZSBtZXMgY2FydGVzIHF1aSBzZSB0cm91dmVudCBzdXIgbGEgdGFibGVcclxuICAgIC8vIGVuIHkgc3VwcHJpbWFudCBsZXMgY2FydGVzIGRpc3RyaWJ1w6llcyBhdSBqb3VldXIgXHJcbiAgICBib2FyZENhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZEJvYXJkKSB7XHJcbiAgICAgICAgYXJyQ2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXJkQm9hcmQgPT09IGNhcmQpIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkQ2FyZHMuc3BsaWNlKGNhcmQsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9qZSBtZXQgw6Agam91ciBsZSB0YWJsZWF1IGRlcyBjYXJ0ZXMgZHUgam91ZXVyIFxyXG4gICAgc3RhdGVbcGxheWVyXS5jYXJkcy5wdXNoKGFyckNhcmRzKTtcclxuICAgIHJldHVybiBhcnJDYXJkcztcclxuXHJcbn1cclxuXHJcbmlmICgndG91dHVudGFzZGV0ZXN0cycpIHtcclxuICAgIC8vcGxheUNhcmQoJ3BsYXllcjEnLCAyKVxyXG59XHJcblxyXG5cclxuLypmdW5jdGlvbiBwbGF5Q2FyZChwbGF5ZXIsIGNhcmQpIHtcclxuICAgIHJlbW92ZUNhcmQoc3RhdGVbcGxheWVyXS5jYXJkcywgY2FyZClcclxuICAgIHN0YXRlLmJvYXJkLmNhcmRzLnB1c2goY2FyZClcclxufSovXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvL2plIG3DqWxhbmdlIG1lcyA3NiBjYXJ0ZXMgXHJcbiAgICBzaHVmZmxlKGNhcmRzR2FtZSgpKTtcclxuXHJcbiAgICAvL2plIGRpc3RyaWJ1ZSA3IGNhcnRlcyBhdSBqb3VldXIgMVxyXG4gICAgZGlzdHJpYnV0ZUNhcmRzKDcsIFwicGxheWVyMVwiKTtcclxuICAgIC8vw6l0YXQgZGUgbW9uIHN0b3JlIFxyXG4gICAgY29uc29sZS5sb2coJ2lsIG1lIHJlc3RlICcsIHN0YXRlLmJvYXJkLmNhcmRzWzBdLmxlbmd0aCwgJyBhcHLDqHMgbGEgZGlzdHJpYnV0aW9uIGR1IHBsYXllciAxIHN1ciBsYSB0YWJsZSDDoCBqb3VlcicpO1xyXG5cclxuICAgIC8vamUgZGlzdHJpYnVlIDcgY2FydGVzIGF1IGpvdWV1ciAyXHJcbiAgICBkaXN0cmlidXRlQ2FyZHMoNywgXCJwbGF5ZXIyXCIpO1xyXG4gICAgLy/DqXRhdCBkZSBtb24gc3RvcmUgXHJcbiAgICBjb25zb2xlLmxvZygnaWwgbWUgcmVzdGUgJywgc3RhdGUuYm9hcmQuY2FyZHNbMF0ubGVuZ3RoLCAnIGFwcsOocyBsYSBkaXN0cmlidXRpb24gZHUgcGxheWVyMiBzdXIgbGEgdGFibGUgw6Agam91ZXInKTtcclxuXHJcbiAgICAvL8OpdGF0IGRlIG1vbiBzdG9yZSBcclxuICAgIGNvbnNvbGUubG9nKCdpbCBtZSByZXN0ZSAnLCBzdGF0ZS5ib2FyZC5jYXJkc1swXS5sZW5ndGgsICdzdXIgbGEgdGFibGUgw6Agam91ZXInKTtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/utils/get-card.js":
/*!**********************************!*\
  !*** ./src/js/utils/get-card.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//function qui génère des cartes\r\n/*var cardValue = [\r\n    '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',\r\n    '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',\r\n    '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',\r\n    '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET'\r\n];\r\n\r\nfunction getCard() {\r\n    var cards = [];\r\n    for (i = 0; i < cardValue.length; i++) {\r\n        cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])\r\n    }\r\n    return cards;\r\n}\r\n\r\nmodule.exports = getCard;\r\n*/\r\n\r\n//fonction qui génère dans un tableau mes 76 cartes avec leurs exceptions\r\nfunction generateCard() {\r\n    var colorCard = ['ROSE', 'ROUGE', 'BLEU', 'VIOLET'];\r\n    var arrCard = [];\r\n\r\n    colorCard.map(function(color) {\r\n        var arr = new Array(9);\r\n        for (var i = 0; i < arr.length + 1; i++) {\r\n            var card = (i + color);\r\n            //var result = i === 0 ? arrCard.push(card) : arrCard.push(card, card);\r\n            if (i === 0) {\r\n                arrCard.push(card)\r\n            } else {\r\n                arrCard.push(card, card)\r\n            }\r\n        }\r\n    })\r\n    return arrCard;\r\n}\r\n\r\nmodule.exports = generateCard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvZ2V0LWNhcmQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZ2V0LWNhcmQuanM/MDZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2Z1bmN0aW9uIHF1aSBnw6luw6hyZSBkZXMgY2FydGVzXHJcbi8qdmFyIGNhcmRWYWx1ZSA9IFtcclxuICAgICcwUk9TRScsICcxUk9TRScsICcyUk9TRScsICczUk9TRScsICc0Uk9TRScsICc1Uk9TRScsICc2Uk9TRScsICc3Uk9TRScsICc4Uk9TRScsICc5Uk9TRScsXHJcbiAgICAnMFJPVUdFJywgJzFST1VHRScsICcyUk9VR0UnLCAnM1JPVUdFJywgJzRST1VHRScsICc1Uk9VR0UnLCAnNlJPVUdFJywgJzdST1VHRScsICc4Uk9VR0UnLCAnOVJPVUdFJyxcclxuICAgICcwQkxFVScsICcxQkxFVScsICcyQkxFVScsICczQkxFVScsICc0QkxFVScsICc1QkxFVScsICc2QkxFVScsICc3QkxFVScsICc4QkxFVScsICc5QkxFVScsXHJcbiAgICAnMFZJT0xFVCcsICcxVklPTEVUJywgJzJWSU9MRVQnLCAnM1ZJT0xFVCcsICc0VklPTEVUJywgJzVWSU9MRVQnLCAnNlZJT0xFVCcsICc3VklPTEVUJywgJzhWSU9MRVQnLCAnOVZJT0xFVCdcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldENhcmQoKSB7XHJcbiAgICB2YXIgY2FyZHMgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBjYXJkVmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjYXJkcy5wdXNoKGNhcmRWYWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYXJkVmFsdWUubGVuZ3RoKV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FyZHM7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2V0Q2FyZDtcclxuKi9cclxuXHJcbi8vZm9uY3Rpb24gcXVpIGfDqW7DqHJlIGRhbnMgdW4gdGFibGVhdSBtZXMgNzYgY2FydGVzIGF2ZWMgbGV1cnMgZXhjZXB0aW9uc1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICB2YXIgY29sb3JDYXJkID0gWydST1NFJywgJ1JPVUdFJywgJ0JMRVUnLCAnVklPTEVUJ107XHJcbiAgICB2YXIgYXJyQ2FyZCA9IFtdO1xyXG5cclxuICAgIGNvbG9yQ2FyZC5tYXAoZnVuY3Rpb24oY29sb3IpIHtcclxuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5KDkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aCArIDE7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2FyZCA9IChpICsgY29sb3IpO1xyXG4gICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBpID09PSAwID8gYXJyQ2FyZC5wdXNoKGNhcmQpIDogYXJyQ2FyZC5wdXNoKGNhcmQsIGNhcmQpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYXJyQ2FyZC5wdXNoKGNhcmQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcnJDYXJkLnB1c2goY2FyZCwgY2FyZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYXJyQ2FyZDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUNhcmQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils/get-card.js\n");

/***/ })

/******/ });