color bGround, c1, c2, c3, cStroke;
int cols, rows, triangleSide;
int triGrid[][];
float triangleHeight;

void setup(){
    size(screen.width, screen.height);

    triangleSide = 50;
    triangleHeight = (sqrt(3.0) / 2.0)  * float(triangleSide);

    // set colors
    bGround = color(#dfe1e6);
    cStroke = color(50)
    c1 = color(#ef5f5d);
    c2 = color(#7c9755);
    c3 = color(#264073);

    // 2d array of colors corresponding to each triangle
    cols = 2 * int(width / int(triangleHeight) + 1);
    rows = 2 * int(height / triangleSide + 1);
    triGrid = new int[cols][rows];
    for (int i = 0; i < cols; i++){
        for(int j = 0; j < rows; j++){
            triGrid[i][j] = 0;
        }
    }
    stroke(cStroke);
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
            drawTriangle(currX, j * (triangleSide / 2), isRight);


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
    triangle(x1, py, x2, py + (triangleSide / 2), x2, py - (triangleSide / 2));
}

// given the X and Y of the mouse, finds the y coordinate of the triangle
int getYCoord(float mx, float my){
    int triX = int(mx / triangleHeight);
    // so now we know which column the mouse is in. how do we locate the specific triangle?
    // we can narrow it down to one of two based on dividing the y position by the length of a triangleSide
    int triY  = int(my / (triangleSide / 2));
    // check which direction the column is facing
    bool backward = triX % 2;
    // now check if the top or bottom triangle is facing right
    bool upward;
    upward = triY % 2;
    if(backward){
        upward = !upward;
    }
    // now we know which direction the line is going. now just check whether or not the mouse is on the left or right side of the line.
    float slope = (triangleSide / 2) / triangleHeight;
    // use normal y = mx + b to check if point is above or below the line
    if (upward){
        if ((mx % triangleHeight * slope) >= (25 - (my % (triangleSide / 2)))){
            return triY + 1;
        }
        return triY;
    }
    if (((mx % triangleHeight) * -1 * slope + 25) >= (25 - (my % (triangleSide / 2)))){
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
