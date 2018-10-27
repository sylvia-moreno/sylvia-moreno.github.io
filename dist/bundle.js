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

eval("var Player = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\r\n//var renderCard = require('./utils/render-card.js');\r\n\r\nvar CardGame = function() {\r\n\r\n    //couleurs des cartes à jouer\r\n    var cardValue = [\r\n        '0ROSE', '1ROSE', '2ROSE', '3ROSE', '4ROSE', '5ROSE', '6ROSE', '7ROSE', '8ROSE', '9ROSE',\r\n        '0ROUGE', '1ROUGE', '2ROUGE', '3ROUGE', '4ROUGE', '5ROUGE', '6ROUGE', '7ROUGE', '8ROUGE', '9ROUGE',\r\n        '0BLEU', '1BLEU', '2BLEU', '3BLEU', '4BLEU', '5BLEU', '6BLEU', '7BLEU', '8BLEU', '9BLEU',\r\n        '0VIOLET', '1VIOLET', '2VIOLET', '3VIOLET', '4VIOLET', '5VIOLET', '6VIOLET', '7VIOLET', '8VIOLET', '9VIOLET'\r\n    ];\r\n\r\n    //function qui affiche 7 cartes random à l'init \r\n    function getRandomCard() {\r\n        var cards = [];\r\n        for (i = 0; i < 7; i++) {\r\n            cards.push(cardValue[Math.floor(Math.random() * cardValue.length)])\r\n        }\r\n        return cards;\r\n    }\r\n\r\n    //je veux associer la value de l'array 'cardValue' à une carte pour afficher le CSS\r\n    function renderCard(player) {\r\n        var cardsArray = getRandomCard();\r\n        player.cardsArray = cardsArray;\r\n\r\n        var newArr = [];\r\n        cardsArray.forEach(function(card) {\r\n            var numberCard = card.split('');\r\n            var cardColor = card.slice(1);\r\n\r\n            var myCard = null;\r\n\r\n            if (player.isCardVisible) {\r\n                myCard = '<div class=\"card card-' + cardColor + '\" >' + '<span class=\"card-number\">' + numberCard[0] + '</span>' + '</div>';\r\n            } else {\r\n                myCard = '<div class=\"card card-BACK\"><span class=\"card-number\">B</span></div>';\r\n            }\r\n            newArr.push(myCard);\r\n        });\r\n\r\n        return newArr;\r\n    }\r\n\r\n    //j'affiche les cartes dans chaque zone joueur \r\n    function zonePlayer(gameZone, typePlayer) {\r\n        var player = new Player(typePlayer, 'bob')\r\n        var arrCards = renderCard(player);\r\n\r\n        var boardGame = gameZone === 'top' && !player.isCardVisible ? $('#color-game_board--zone-player-2')[0] :\r\n            $('#color-game_board--zone-player-1')[0];\r\n        var card = document.createElement(\"div\");\r\n        card.className = 'card-game-container';\r\n\r\n        arrCards.map(function(item) {\r\n            boardGame.innerHTML += item;\r\n\r\n        });\r\n\r\n        player.arrayCard = arrCards; //7 cartes\r\n        return player\r\n    }\r\n\r\n    window.onload = function() {\r\n\r\n        console.log('j\\'affiche 7 cartes random à l\\'init', getRandomCard());\r\n        console.log('je suis le joueur fictif et mes cartes sont en haut', new zonePlayer('top', false));\r\n        console.log('je suis le joueur fictif et mes cartes sont en bas', new zonePlayer('bottom', true));\r\n\r\n    }\r\n}\r\nCardGame();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyLmpzJyk7XHJcbi8vdmFyIHJlbmRlckNhcmQgPSByZXF1aXJlKCcuL3V0aWxzL3JlbmRlci1jYXJkLmpzJyk7XHJcblxyXG52YXIgQ2FyZEdhbWUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvL2NvdWxldXJzIGRlcyBjYXJ0ZXMgw6Agam91ZXJcclxuICAgIHZhciBjYXJkVmFsdWUgPSBbXHJcbiAgICAgICAgJzBST1NFJywgJzFST1NFJywgJzJST1NFJywgJzNST1NFJywgJzRST1NFJywgJzVST1NFJywgJzZST1NFJywgJzdST1NFJywgJzhST1NFJywgJzlST1NFJyxcclxuICAgICAgICAnMFJPVUdFJywgJzFST1VHRScsICcyUk9VR0UnLCAnM1JPVUdFJywgJzRST1VHRScsICc1Uk9VR0UnLCAnNlJPVUdFJywgJzdST1VHRScsICc4Uk9VR0UnLCAnOVJPVUdFJyxcclxuICAgICAgICAnMEJMRVUnLCAnMUJMRVUnLCAnMkJMRVUnLCAnM0JMRVUnLCAnNEJMRVUnLCAnNUJMRVUnLCAnNkJMRVUnLCAnN0JMRVUnLCAnOEJMRVUnLCAnOUJMRVUnLFxyXG4gICAgICAgICcwVklPTEVUJywgJzFWSU9MRVQnLCAnMlZJT0xFVCcsICczVklPTEVUJywgJzRWSU9MRVQnLCAnNVZJT0xFVCcsICc2VklPTEVUJywgJzdWSU9MRVQnLCAnOFZJT0xFVCcsICc5VklPTEVUJ1xyXG4gICAgXTtcclxuXHJcbiAgICAvL2Z1bmN0aW9uIHF1aSBhZmZpY2hlIDcgY2FydGVzIHJhbmRvbSDDoCBsJ2luaXQgXHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21DYXJkKCkge1xyXG4gICAgICAgIHZhciBjYXJkcyA9IFtdO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgY2FyZHMucHVzaChjYXJkVmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FyZFZhbHVlLmxlbmd0aCldKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FyZHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy9qZSB2ZXV4IGFzc29jaWVyIGxhIHZhbHVlIGRlIGwnYXJyYXkgJ2NhcmRWYWx1ZScgw6AgdW5lIGNhcnRlIHBvdXIgYWZmaWNoZXIgbGUgQ1NTXHJcbiAgICBmdW5jdGlvbiByZW5kZXJDYXJkKHBsYXllcikge1xyXG4gICAgICAgIHZhciBjYXJkc0FycmF5ID0gZ2V0UmFuZG9tQ2FyZCgpO1xyXG4gICAgICAgIHBsYXllci5jYXJkc0FycmF5ID0gY2FyZHNBcnJheTtcclxuXHJcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xyXG4gICAgICAgIGNhcmRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJDYXJkID0gY2FyZC5zcGxpdCgnJyk7XHJcbiAgICAgICAgICAgIHZhciBjYXJkQ29sb3IgPSBjYXJkLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG15Q2FyZCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAocGxheWVyLmlzQ2FyZFZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIG15Q2FyZCA9ICc8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLScgKyBjYXJkQ29sb3IgKyAnXCIgPicgKyAnPHNwYW4gY2xhc3M9XCJjYXJkLW51bWJlclwiPicgKyBudW1iZXJDYXJkWzBdICsgJzwvc3Bhbj4nICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBteUNhcmQgPSAnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1CQUNLXCI+PHNwYW4gY2xhc3M9XCJjYXJkLW51bWJlclwiPkI8L3NwYW4+PC9kaXY+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdBcnIucHVzaChteUNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3QXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaidhZmZpY2hlIGxlcyBjYXJ0ZXMgZGFucyBjaGFxdWUgem9uZSBqb3VldXIgXHJcbiAgICBmdW5jdGlvbiB6b25lUGxheWVyKGdhbWVab25lLCB0eXBlUGxheWVyKSB7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIodHlwZVBsYXllciwgJ2JvYicpXHJcbiAgICAgICAgdmFyIGFyckNhcmRzID0gcmVuZGVyQ2FyZChwbGF5ZXIpO1xyXG5cclxuICAgICAgICB2YXIgYm9hcmRHYW1lID0gZ2FtZVpvbmUgPT09ICd0b3AnICYmICFwbGF5ZXIuaXNDYXJkVmlzaWJsZSA/ICQoJyNjb2xvci1nYW1lX2JvYXJkLS16b25lLXBsYXllci0yJylbMF0gOlxyXG4gICAgICAgICAgICAkKCcjY29sb3ItZ2FtZV9ib2FyZC0tem9uZS1wbGF5ZXItMScpWzBdO1xyXG4gICAgICAgIHZhciBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkLWdhbWUtY29udGFpbmVyJztcclxuXHJcbiAgICAgICAgYXJyQ2FyZHMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgYm9hcmRHYW1lLmlubmVySFRNTCArPSBpdGVtO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLmFycmF5Q2FyZCA9IGFyckNhcmRzOyAvLzcgY2FydGVzXHJcbiAgICAgICAgcmV0dXJuIHBsYXllclxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2pcXCdhZmZpY2hlIDcgY2FydGVzIHJhbmRvbSDDoCBsXFwnaW5pdCcsIGdldFJhbmRvbUNhcmQoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2plIHN1aXMgbGUgam91ZXVyIGZpY3RpZiBldCBtZXMgY2FydGVzIHNvbnQgZW4gaGF1dCcsIG5ldyB6b25lUGxheWVyKCd0b3AnLCBmYWxzZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdqZSBzdWlzIGxlIGpvdWV1ciBmaWN0aWYgZXQgbWVzIGNhcnRlcyBzb250IGVuIGJhcycsIG5ldyB6b25lUGxheWVyKCdib3R0b20nLCB0cnVlKSk7XHJcblxyXG4gICAgfVxyXG59XHJcbkNhcmRHYW1lKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Player(isCardVisible, name) {\r\n    this.isCardVisible = isCardVisible;\r\n    this.name = name;\r\n    this.arrayCard = null;\r\n    this.play = function() {\r\n        //le joueur à le droit de poser une carte \r\n\r\n\r\n\r\n        /*gestion de la gestion des cartes \r\n          - est ce mon tour ? \r\n          - couleur de la carte \r\n          - nombre de carte\r\n          - quelle est la carte cliquée \r\n          - est ce que je peux jouer la carte ? {myCardColor vs cardColorOntheBoard}\r\n          - \r\n        */\r\n\r\n    };\r\n\r\n\r\n\r\n}\r\n\r\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGxheWVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsYXllci5qcz9lZTIwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBsYXllcihpc0NhcmRWaXNpYmxlLCBuYW1lKSB7XHJcbiAgICB0aGlzLmlzQ2FyZFZpc2libGUgPSBpc0NhcmRWaXNpYmxlO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYXJyYXlDYXJkID0gbnVsbDtcclxuICAgIHRoaXMucGxheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vbGUgam91ZXVyIMOgIGxlIGRyb2l0IGRlIHBvc2VyIHVuZSBjYXJ0ZSBcclxuXHJcblxyXG5cclxuICAgICAgICAvKmdlc3Rpb24gZGUgbGEgZ2VzdGlvbiBkZXMgY2FydGVzIFxyXG4gICAgICAgICAgLSBlc3QgY2UgbW9uIHRvdXIgPyBcclxuICAgICAgICAgIC0gY291bGV1ciBkZSBsYSBjYXJ0ZSBcclxuICAgICAgICAgIC0gbm9tYnJlIGRlIGNhcnRlXHJcbiAgICAgICAgICAtIHF1ZWxsZSBlc3QgbGEgY2FydGUgY2xpcXXDqWUgXHJcbiAgICAgICAgICAtIGVzdCBjZSBxdWUgamUgcGV1eCBqb3VlciBsYSBjYXJ0ZSA/IHtteUNhcmRDb2xvciB2cyBjYXJkQ29sb3JPbnRoZUJvYXJkfVxyXG4gICAgICAgICAgLSBcclxuICAgICAgICAqL1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/player.js\n");

/***/ })

/******/ });