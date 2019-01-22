color bGround, c1, c2, c3, cStroke;
int cols, rows, triangleSide, rowHeight;
int triGrid[][];
float triangleHeight;

void setup(){
    size(screen.width, screen.height);

    triangleSide = 50;
    rowHeight = triangleSide / 2;
    triangleHeight = (sqrt(3.0) / 2.0)  * float(triangleSide);

    // set colors
    bGround = color(#264073);
    cStroke = color(#dfe1e6)
    c1 = color(#ef5f5d);
    c2 = color(#21897E);
    c3 = color(#8EAEBD);

    // 2d array of colors corresponding to each triangle
    cols = 2 * int(width / int(triangleHeight) + 1);
    rows = 2 * int(height / triangleSide + 1);
    triGrid = new int[cols][rows];
    for (int i = 0; i < cols; i++){
        for(int j = 0; j < rows; j++){
            triGrid[i][j] = 0;
        }
    }

    // add drawing I did
    addDrawing();
}

void draw(){
    background(bGround);
    bool backward = false;
    for (int i = 0; i < cols; i++){
        bool isRight = true;
        float currX = i * triangleHeight;
        if (backward){
            isRight = !isRight;
        }
        for (int j = 0; j < rows; j++){
            colorAndStroke(i, j);
            drawTriangle(currX, j * (rowHeight), isRight);
            isRight = !isRight;
        }
        backward = !backward;
    }
}

// checks grid to see what color triangle should be and fills it correspondingly
void colorAndStroke(int i, int j){
    if (triGrid[i][j] == 0){
        strokeWeight(0.1);
        stroke(cStroke);
        noFill();
    }
    else if (triGrid[i][j] == 1){
        strokeWeight(1);
        stroke(c1);
        fill(c1);
    }
    else if (triGrid[i][j] == 2){
        strokeWeight(1);
        stroke(c2);
        fill(c2);
    }
    else{
        strokeWeight(1);
        stroke(c3);
        fill(c3);
    }
    return;
}

// draws the triangles
void drawTriangle(float px, float py, bool isRight){
    float x1, x2;
    if(isRight){
        x1 = px;
        x2 = px + triangleHeight;
    }
    else{
        x1 = px + triangleHeight;
        x2 = px;
    }
    triangle(x1, py, x2, py + (rowHeight), x2, py - (rowHeight));
}

// given the X and Y of the mouse, finds the y coordinate of the triangle
int getYCoord(float mx, float my){
    int triX = int(mx / triangleHeight);
    // so now we know which column the mouse is in. how do we locate the specific triangle?
    // we can narrow it down to one of two based on dividing the y position by the length of a triangleSide
    int triY  = int(my / (rowHeight));
    // check which direction the column is facing
    bool backward = triX % 2;
    // now check if the top or bottom triangle is facing right
    bool upward;
    upward = triY % 2;
    if(backward){
        upward = !upward;
    }
    // now we know which direction the line is going. now just check whether or not the mouse is on the left or right side of the line.
    float slope = (rowHeight) / triangleHeight;
    // use normal y = mx + b to check if point is above or below the line
    if (upward){
        if ((mx % triangleHeight * slope) >= (rowHeight - (my % (rowHeight)))){
            return triY + 1;
        }
        return triY;
    }
    if (((mx % triangleHeight) * -1 * slope + rowHeight) >= (rowHeight - (my % (rowHeight)))){
        return triY + 1;
    }
    return triY;
}

// when a triangle is clicked, update the color
void mousePressed(){
    int i = int(mouseX / triangleHeight);
    int j = getYCoord(mouseX, mouseY);
    triGrid[i][j] = (triGrid[i][j] + 1) % 4;
}

// print out the array with a drawing in it
void keyPressed(){
    if (key == 'p'){
        for(int i = 0; i < cols; i++){
            println(triGrid[i])
        }
    }
}

// add drawing
void addDrawing(){
    triGrid[6][20] = 2;
    triGrid[6][21] = 3;
    triGrid[6][22] = 3;
    triGrid[7][20] = 2;
    triGrid[7][21] = 1;
    triGrid[7][22] = 1;
    triGrid[7][23] = 2;
    triGrid[7][24] = 3;
    triGrid[7][25] = 3;
    triGrid[8][20] = 2;
    triGrid[8][21] = 3;
    triGrid[8][22] = 3;
    triGrid[8][23] = 2;
    triGrid[8][24] = 1;
    triGrid[8][25] = 1;
    triGrid[8][26] = 2;
    triGrid[8][27] = 3;
    triGrid[8][28] = 3;
    triGrid[9][20] = 2;
    triGrid[9][21] = 1;
    triGrid[9][22] = 1;
    triGrid[9][23] = 2;
    triGrid[9][24] = 3;
    triGrid[9][25] = 3;
    triGrid[9][26] = 2;
    triGrid[9][27] = 1;
    triGrid[9][28] = 1;
    triGrid[9][29] = 2;
    triGrid[9][30] = 3;
    triGrid[9][31] = 3;
    triGrid[10][5] = 3;
    triGrid[10][6] = 3;
    triGrid[10][7] = 3;
    triGrid[10][8] = 3;
    triGrid[10][9] = 3;
    triGrid[10][10] = 3;
    triGrid[10][11] = 3;
    triGrid[10][12] = 3;
    triGrid[10][13] = 3;
    triGrid[10][14] = 3;
    triGrid[10][20] = 2;
    triGrid[10][21] = 3;
    triGrid[10][22] = 3;
    triGrid[10][23] = 2;
    triGrid[10][24] = 1;
    triGrid[10][25] = 1;
    triGrid[10][26] = 2;
    triGrid[10][27] = 3;
    triGrid[10][28] = 3;
    triGrid[10][29] = 2;
    triGrid[10][30] = 1;
    triGrid[10][31] = 1;
    triGrid[11][9] = 3;
    triGrid[11][10] = 3;
    triGrid[11][20] = 2;
    triGrid[11][21] = 1;
    triGrid[11][22] = 1;
    triGrid[11][23] = 2;
    triGrid[11][24] = 3;
    triGrid[11][25] = 3;
    triGrid[11][26] = 2;
    triGrid[11][27] = 1;
    triGrid[11][28] = 1;
    triGrid[11][29] = 2;
    triGrid[11][30] = 3;
    triGrid[11][31] = 3;
    triGrid[12][8] = 3;
    triGrid[12][9] = 3;
    triGrid[12][20] = 2;
    triGrid[12][21] = 3;
    triGrid[12][22] = 3;
    triGrid[12][23] = 2;
    triGrid[12][24] = 1;
    triGrid[12][25] = 1;
    triGrid[12][26] = 2;
    triGrid[12][27] = 3;
    triGrid[12][28] = 3;
    triGrid[12][29] = 2;
    triGrid[12][30] = 1;
    triGrid[12][31] = 1;
    triGrid[13][5] = 3;
    triGrid[13][6] = 3;
    triGrid[13][7] = 3;
    triGrid[13][8] = 3;
    triGrid[13][9] = 3;
    triGrid[13][10] = 3;
    triGrid[13][11] = 3;
    triGrid[13][12] = 3;
    triGrid[13][13] = 3;
    triGrid[13][14] = 3;
    triGrid[13][20] = 2;
    triGrid[13][21] = 1;
    triGrid[13][22] = 1;
    triGrid[13][23] = 2;
    triGrid[13][24] = 3;
    triGrid[13][25] = 3;
    triGrid[13][26] = 2;
    triGrid[13][27] = 1;
    triGrid[13][28] = 1;
    triGrid[13][29] = 2;
    triGrid[13][30] = 3;
    triGrid[13][31] = 3;
    triGrid[14][20] = 2;
    triGrid[14][21] = 3;
    triGrid[14][22] = 3;
    triGrid[14][23] = 2;
    triGrid[14][24] = 1;
    triGrid[14][25] = 1;
    triGrid[14][26] = 2;
    triGrid[14][27] = 3;
    triGrid[14][28] = 3;
    triGrid[14][29] = 2;
    triGrid[14][30] = 1;
    triGrid[14][31] = 1;
    triGrid[15][20] = 2;
    triGrid[15][21] = 1;
    triGrid[15][22] = 1;
    triGrid[15][23] = 2;
    triGrid[15][24] = 3;
    triGrid[15][25] = 3;
    triGrid[15][26] = 2;
    triGrid[15][27] = 1;
    triGrid[15][28] = 1;
    triGrid[15][29] = 2;
    triGrid[15][30] = 3;
    triGrid[15][31] = 3;
    triGrid[16][5] = 1;
    triGrid[16][6] = 1;
    triGrid[16][9] = 3;
    triGrid[16][10] = 3;
    triGrid[16][11] = 3;
    triGrid[16][12] = 3;
    triGrid[16][13] = 3;
    triGrid[16][14] = 3;
    triGrid[16][20] = 2;
    triGrid[16][21] = 3;
    triGrid[16][22] = 3;
    triGrid[16][23] = 2;
    triGrid[16][24] = 1;
    triGrid[16][25] = 1;
    triGrid[16][26] = 2;
    triGrid[16][27] = 3;
    triGrid[16][28] = 3;
    triGrid[16][29] = 2;
    triGrid[16][30] = 1;
    triGrid[16][31] = 1;
    triGrid[17][20] = 2;
    triGrid[17][21] = 1;
    triGrid[17][22] = 1;
    triGrid[17][23] = 2;
    triGrid[17][24] = 3;
    triGrid[17][25] = 3;
    triGrid[17][26] = 2;
    triGrid[17][27] = 1;
    triGrid[17][28] = 1;
    triGrid[17][29] = 2;
    triGrid[17][30] = 3;
    triGrid[17][31] = 3;
    triGrid[18][20] = 2;
    triGrid[18][21] = 3;
    triGrid[18][22] = 3;
    triGrid[18][23] = 2;
    triGrid[18][24] = 1;
    triGrid[18][25] = 1;
    triGrid[18][26] = 2;
    triGrid[18][27] = 3;
    triGrid[18][28] = 3;
    triGrid[18][29] = 2;
    triGrid[18][30] = 1;
    triGrid[18][31] = 1;
    triGrid[19][20] = 2;
    triGrid[19][21] = 1;
    triGrid[19][22] = 1;
    triGrid[19][23] = 2;
    triGrid[19][24] = 3;
    triGrid[19][25] = 3;
    triGrid[19][26] = 2;
    triGrid[19][27] = 1;
    triGrid[19][28] = 1;
    triGrid[19][29] = 2;
    triGrid[19][30] = 3;
    triGrid[19][31] = 3;
    triGrid[20][3] = 3;
    triGrid[20][4] = 3;
    triGrid[20][5] = 3;
    triGrid[20][6] = 3;
    triGrid[20][7] = 3;
    triGrid[20][8] = 3;
    triGrid[20][9] = 3;
    triGrid[20][10] = 3;
    triGrid[20][11] = 3;
    triGrid[20][12] = 3;
    triGrid[20][15] = 2;
    triGrid[20][16] = 2;
    triGrid[20][20] = 2;
    triGrid[20][21] = 3;
    triGrid[20][22] = 3;
    triGrid[20][23] = 2;
    triGrid[20][24] = 1;
    triGrid[20][25] = 1;
    triGrid[20][26] = 2;
    triGrid[20][27] = 3;
    triGrid[20][28] = 3;
    triGrid[20][29] = 2;
    triGrid[20][30] = 1;
    triGrid[20][31] = 1;
    triGrid[21][20] = 2;
    triGrid[21][21] = 1;
    triGrid[21][22] = 1;
    triGrid[21][23] = 2;
    triGrid[21][24] = 3;
    triGrid[21][25] = 3;
    triGrid[21][26] = 2;
    triGrid[21][27] = 1;
    triGrid[21][28] = 1;
    triGrid[21][29] = 2;
    triGrid[21][30] = 3;
    triGrid[21][31] = 3;
    triGrid[22][20] = 2;
    triGrid[22][21] = 3;
    triGrid[22][22] = 3;
    triGrid[22][23] = 2;
    triGrid[22][24] = 1;
    triGrid[22][25] = 1;
    triGrid[22][26] = 2;
    triGrid[22][27] = 3;
    triGrid[22][28] = 3;
    triGrid[22][29] = 2;
    triGrid[22][30] = 1;
    triGrid[22][31] = 1;
    triGrid[23][20] = 2;
    triGrid[23][21] = 1;
    triGrid[23][22] = 1;
    triGrid[23][23] = 2;
    triGrid[23][24] = 3;
    triGrid[23][25] = 3;
    triGrid[23][26] = 2;
    triGrid[23][27] = 1;
    triGrid[23][28] = 1;
    triGrid[24][20] = 2;
    triGrid[24][21] = 3;
    triGrid[24][22] = 3;
    triGrid[24][23] = 2;
    triGrid[24][24] = 1;
    triGrid[24][25] = 1;
    triGrid[25][20] = 2;
    triGrid[25][21] = 1;
    triGrid[25][22] = 1;
}
