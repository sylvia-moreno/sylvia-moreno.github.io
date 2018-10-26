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

eval("var Player = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\r\n\r\n//couleur vert, rouge, bleu, jaune\r\nvar cardValue = [\r\n    '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',\r\n    '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',\r\n    '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',\r\n    '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET', 'BACK'\r\n];\r\n\r\n//function qui affiche des cartes au random\r\nfunction getRandomCard() {\r\n    var cards = [];\r\n    for (i = 0; i < 7; i++) {\r\n        cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])\r\n    }\r\n    return cards;\r\n}\r\n\r\n//je veux associer la value de l'array à une carte\r\nfunction showCard() {\r\n    var cardsArray = getRandomCard();\r\n    var newArr = [];\r\n    cardsArray.forEach(function(card) {\r\n        var numberCard = card.split('');\r\n        var cardColor = card.slice(1);\r\n        var toto = '<div class=\"card card-' + cardColor + '\" >' + '<span class=\"card-number\">' + numberCard[0] + '</span>' + '</div>';\r\n        newArr.push(toto);\r\n    });\r\n\r\n    return newArr;\r\n}\r\n\r\n//j'affiche les cartes dans chaque zone joueur \r\nfunction zonePlayer(gameZone) {\r\n    var boardGame = gameZone === 'top' ? document.getElementById('color-game_board--zone-player-1') :\r\n        document.getElementById('color-game_board--zone-player-2');\r\n    var card = document.createElement(\"div\");\r\n    card.className = 'card-game-container';\r\n\r\n    var arrCards = showCard();\r\n    arrCards.map(function(item) {\r\n        boardGame.innerHTML += item;\r\n    })\r\n\r\n}\r\n\r\n//quand le joueur réel clique sur une carte, celle-ci s'affiche dans la zone \"carte à jouer\"\r\n//\r\nwindow.onload = function() {\r\n\r\n\r\n    console.log('j\\'affiche 7 cartes random à l\\'init', getRandomCard());\r\n    console.log('je suis le joueur fictif et mes cartes sont en bas', realPlayer = new zonePlayer('bottom'));\r\n    console.log('je suis le joueur fictif et mes cartes sont en haut', fakePlayer = new zonePlayer('top'));\r\n\r\n\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyLmpzJyk7XHJcblxyXG4vL2NvdWxldXIgdmVydCwgcm91Z2UsIGJsZXUsIGphdW5lXHJcbnZhciBjYXJkVmFsdWUgPSBbXHJcbiAgICAnMFJPU0UnLCAnMVJPU0UnLCAnMlJPU0UnLCAnM1JPU0UnLCAnNFJPU0UnLCAnNVJPU0UnLCAnNlJPU0UnLCAnN1JPU0UnLCAnOFJPU0UnLCAnOVJPU0UnLFxyXG4gICAgJzBST1VHRScsICcxUk9VR0UnLCAnMlJPVUdFJywgJzNST1VHRScsICc0Uk9VR0UnLCAnNVJPVUdFJywgJzZST1VHRScsICc3Uk9VR0UnLCAnOFJPVUdFJywgJzlST1VHRScsXHJcbiAgICAnMEJMRVUnLCAnMUJMRVUnLCAnMkJMRVUnLCAnM0JMRVUnLCAnNEJMRVUnLCAnNUJMRVUnLCAnNkJMRVUnLCAnN0JMRVUnLCAnOEJMRVUnLCAnOUJMRVUnLFxyXG4gICAgJzBWSU9MRVQnLCAnMVZJT0xFVCcsICcyVklPTEVUJywgJzNWSU9MRVQnLCAnNFZJT0xFVCcsICc1VklPTEVUJywgJzZWSU9MRVQnLCAnN1ZJT0xFVCcsICc4VklPTEVUJywgJzlWSU9MRVQnLCAnQkFDSydcclxuXTtcclxuXHJcbi8vZnVuY3Rpb24gcXVpIGFmZmljaGUgZGVzIGNhcnRlcyBhdSByYW5kb21cclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ2FyZCgpIHtcclxuICAgIHZhciBjYXJkcyA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgIGNhcmRzLnB1c2goY2FyZFZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhcmRWYWx1ZS5sZW5ndGgpXSlcclxuICAgIH1cclxuICAgIHJldHVybiBjYXJkcztcclxufVxyXG5cclxuLy9qZSB2ZXV4IGFzc29jaWVyIGxhIHZhbHVlIGRlIGwnYXJyYXkgw6AgdW5lIGNhcnRlXHJcbmZ1bmN0aW9uIHNob3dDYXJkKCkge1xyXG4gICAgdmFyIGNhcmRzQXJyYXkgPSBnZXRSYW5kb21DYXJkKCk7XHJcbiAgICB2YXIgbmV3QXJyID0gW107XHJcbiAgICBjYXJkc0FycmF5LmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIHZhciBudW1iZXJDYXJkID0gY2FyZC5zcGxpdCgnJyk7XHJcbiAgICAgICAgdmFyIGNhcmRDb2xvciA9IGNhcmQuc2xpY2UoMSk7XHJcbiAgICAgICAgdmFyIHRvdG8gPSAnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC0nICsgY2FyZENvbG9yICsgJ1wiID4nICsgJzxzcGFuIGNsYXNzPVwiY2FyZC1udW1iZXJcIj4nICsgbnVtYmVyQ2FyZFswXSArICc8L3NwYW4+JyArICc8L2Rpdj4nO1xyXG4gICAgICAgIG5ld0Fyci5wdXNoKHRvdG8pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld0FycjtcclxufVxyXG5cclxuLy9qJ2FmZmljaGUgbGVzIGNhcnRlcyBkYW5zIGNoYXF1ZSB6b25lIGpvdWV1ciBcclxuZnVuY3Rpb24gem9uZVBsYXllcihnYW1lWm9uZSkge1xyXG4gICAgdmFyIGJvYXJkR2FtZSA9IGdhbWVab25lID09PSAndG9wJyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1nYW1lX2JvYXJkLS16b25lLXBsYXllci0xJykgOlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1nYW1lX2JvYXJkLS16b25lLXBsYXllci0yJyk7XHJcbiAgICB2YXIgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkLWdhbWUtY29udGFpbmVyJztcclxuXHJcbiAgICB2YXIgYXJyQ2FyZHMgPSBzaG93Q2FyZCgpO1xyXG4gICAgYXJyQ2FyZHMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICBib2FyZEdhbWUuaW5uZXJIVE1MICs9IGl0ZW07XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuLy9xdWFuZCBsZSBqb3VldXIgcsOpZWwgY2xpcXVlIHN1ciB1bmUgY2FydGUsIGNlbGxlLWNpIHMnYWZmaWNoZSBkYW5zIGxhIHpvbmUgXCJjYXJ0ZSDDoCBqb3VlclwiXHJcbi8vXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2pcXCdhZmZpY2hlIDcgY2FydGVzIHJhbmRvbSDDoCBsXFwnaW5pdCcsIGdldFJhbmRvbUNhcmQoKSk7XHJcbiAgICBjb25zb2xlLmxvZygnamUgc3VpcyBsZSBqb3VldXIgZmljdGlmIGV0IG1lcyBjYXJ0ZXMgc29udCBlbiBiYXMnLCByZWFsUGxheWVyID0gbmV3IHpvbmVQbGF5ZXIoJ2JvdHRvbScpKTtcclxuICAgIGNvbnNvbGUubG9nKCdqZSBzdWlzIGxlIGpvdWV1ciBmaWN0aWYgZXQgbWVzIGNhcnRlcyBzb250IGVuIGhhdXQnLCBmYWtlUGxheWVyID0gbmV3IHpvbmVQbGF5ZXIoJ3RvcCcpKTtcclxuXHJcblxyXG5cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Player(name, cardsNumber, gameZone) {\r\n    this.name = name;\r\n    this.cardsNumber = cardsNumber;\r\n    this.gameZone = gameZone;\r\n\r\n    var cardValue = ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'BACK'];\r\n\r\n    var boardGame = gameZone === 'top' ? document.getElementById('color-game_board--zone-player-1') :\r\n        document.getElementById('color-game_board--zone-player-2');\r\n    var card = document.createElement(\"div\");\r\n    card.className = 'card-game-container';\r\n    card.innerHTML = \"<img class=\\\"card-game\\\" src=\\\"src/assets/img/back.png\\\">\";\r\n\r\n\r\n    for (var i = 0; i < 7; i++) {\r\n        var newCard = card.cloneNode(true);\r\n        newCard.fromtop = 15 + 120 * Math.floor(i / 4);\r\n\r\n        boardGame.appendChild(newCard);\r\n    }\r\n\r\n\r\n\r\n\r\n}\r\n\r\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGxheWVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsYXllci5qcz9lZTIwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBsYXllcihuYW1lLCBjYXJkc051bWJlciwgZ2FtZVpvbmUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNhcmRzTnVtYmVyID0gY2FyZHNOdW1iZXI7XHJcbiAgICB0aGlzLmdhbWVab25lID0gZ2FtZVpvbmU7XHJcblxyXG4gICAgdmFyIGNhcmRWYWx1ZSA9IFsnMUMnLCAnMkMnLCAnM0MnLCAnNEMnLCAnNUMnLCAnNkMnLCAnN0MnLCAnOEMnLCAnOUMnLCAnQkFDSyddO1xyXG5cclxuICAgIHZhciBib2FyZEdhbWUgPSBnYW1lWm9uZSA9PT0gJ3RvcCcgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZ2FtZV9ib2FyZC0tem9uZS1wbGF5ZXItMScpIDpcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZ2FtZV9ib2FyZC0tem9uZS1wbGF5ZXItMicpO1xyXG4gICAgdmFyIGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZC1nYW1lLWNvbnRhaW5lcic7XHJcbiAgICBjYXJkLmlubmVySFRNTCA9IFwiPGltZyBjbGFzcz1cXFwiY2FyZC1nYW1lXFxcIiBzcmM9XFxcInNyYy9hc3NldHMvaW1nL2JhY2sucG5nXFxcIj5cIjtcclxuXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICB2YXIgbmV3Q2FyZCA9IGNhcmQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIG5ld0NhcmQuZnJvbXRvcCA9IDE1ICsgMTIwICogTWF0aC5mbG9vcihpIC8gNCk7XHJcblxyXG4gICAgICAgIGJvYXJkR2FtZS5hcHBlbmRDaGlsZChuZXdDYXJkKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/player.js\n");

/***/ })

/******/ });