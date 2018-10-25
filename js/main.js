//import { board } from 'elements-game.js';

var boardGame = {
    canvas: document.createElement("canvas"),
    start: function() {
        var gameBoard = document.getElementById('color-game--board');
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.canvas.id = 'color-game--canvas';
        this.context = this.canvas.getContext("2d");
        gameBoard.appendChild(this.canvas);
    },
    drawBoard: function() {
        var ctx = this.canvas.getContext('2d');

        //board
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fillRect(25, 25, 800, 600);
        //ctx.arcTo(0, 100, 0, 0, 90);
        //ctx.arcTo(0, 0, 100, 0, 30);
        //ctx.arcTo(100, 0, 100, 100, 30);
        //ctx.arcTo(100, 100, 0, 100, 30);
        ctx.fill();
        //cardZone
        //cardCenter
    }
}


window.onload = function() {
    boardGame.start();
    boardGame.drawBoard()
}