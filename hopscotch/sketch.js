class Board{
    constructor(n){
        var numbers = generateRandomArray(n);
        this.board = [];
        //  populate board with numbers
        for(var i = 0; i < n; i++){
            var row = [];
            for(var j = 0; j < n; j++){
                if (numbers[i * n + j] == 0){
                    // keep track of the position of the blank tile
                    this.zeroX = j;
                    this.zeroY = i;
                }
                row.push(numbers[i * n + j]);
            }
            this.board.push(row);
        }
    }

    // check to see if you clicked on a valid tile
    checkTiles(x, y){
        if(this.zeroX == x){
            this.moveVertical(x, y);
            return;
        }
        if(this.zeroY == y){
            this.moveHorizontal(x, y);
            return;
        }
        return;
    }

    moveVertical(x, y){
        // create array of vertical nums
        var tmp = []
        for(var i = 0; i < this.board.length; i++){
            tmp.push(this.board[i][x]);
        }
        tmp.splice(this.zeroY, 1);
        tmp.splice(y, 0, 0);
        this.zeroY = y;
        for(var i = 0; i < this.board.length; i++){
            this.board[i].splice(x, 1, tmp[i]);
        }
    }

    moveHorizontal(x, y){
        // remove the blank from the array
        this.board[y].splice(this.zeroX, 1);
        // add it back, moving the tile and all the others around in the array
        this.board[y].splice(x, 0, 0);
        this.zeroX = x;
        return;
    }

}
var n = 4;
var b = new Board(n);
var tileColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    tileColor = color('#ef5f5d');
    textAlign(CENTER, CENTER);
    textSize(30);
}

function draw() {
    background(220);
    // box containing the whole puzzle
    fill("white")
    rect(width / 2, height / 2, 400, 400);
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            if(b.board[i][j] == 0){
                noFill();
                rect(calc_x(j), calc_y(i), 100, 100);
            }
            else{
                fill(tileColor);
                rect(calc_x(j), calc_y(i), 100, 100);
                fill("white");

                text(b.board[i][j], calc_x(j), calc_y(i), 100, 100);
            }
        }
    }
}

// populates with 0 - 16 in a random order
function generateRandomArray(n){
    for (var a=[],i=0;i<(n*n);++i) a[i]=i;
    var tmp, current, top = a.length;
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = a[current];
        a[current] = a[top];
        a[top] = tmp;
    }
    return a;
}

// returns canvas position based on grid coordinates
function calc_x(j){
    return (j * 100 + 50) + (width / 2 - 200);
}

function calc_y(i){
    return (i * 100 + 50) + (height / 2 - 200);
}

// returns grid coordinates based on mouse position
function reverse_calc_x(x){
    return floor((x - width / 2 + 200) / 100);
}

function reverse_calc_y(y){
    return floor((y - height / 2 + 200) / 100);
}

// when the mouse is clicked, check which tile it's on
function mousePressed(){
    b.checkTiles(reverse_calc_x(mouseX), reverse_calc_y(mouseY));
    return;
}
