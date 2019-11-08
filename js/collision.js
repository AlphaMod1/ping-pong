function hit() {

    if (wasInTheMiddle) {
        if (side == 0) {
            side = 1;
            xpos -= 20;
        }
        else if (side == 1) {
            side = 0;
            xpos += 20;
        }
        ymomentum += changeYMomentum();
        ballSpeed += 0.4;
    }
    wasInTheMiddle = false;
}

function checkCollision() {


    if (xpos <= 20 && (ypos + 20 > p1Pos && ypos < p1Pos + 80)) {
        smoothCollisionn();
        hit();
    }

    if (xpos >= 760 && (ypos + 20 > p2Pos && ypos < p2Pos + 80)) {
        smoothCollisionn();
        hit();
    }

    if (xpos <= 0) {
        goal(2);
    }

    if (xpos >= 780) {
        goal(1);
    }

    if (ypos >= 480) {
        ymomentum *= -1;
    }

    if (ypos <= 0) {
        ymomentum *= -1;
    }

    if (xpos > 380 && xpos < 420) {
        wasInTheMiddle = true;
    }

}

function smoothCollisionn(){

    if(xpos > 760){
        xpos = 761;
    }

    if(xpos < 20){
        xpos = 19;
    }

}