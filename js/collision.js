function hit() {

    if (wasInTheMiddle) {
        if (side == 0) {
            side = 1;
            xpos = xpos - 20;
        }
        else if (side == 1) {
            side = 0;
            xpos = xpos + 20;
        }
        ymomentum = ymomentum + changeYMomentum();
        ballSpeed = ballSpeed + 0.1;
    }
    wasInTheMiddle = false;
}

function checkCollision() {


    if (xpos <= 10 && (ypos + 20 > p1Pos && ypos < p1Pos + 80)) {
        hit();
    }

    if (xpos >= 770 && (ypos + 20 > p2Pos && ypos < p2Pos + 80)) {
        hit();
    }

    if (xpos <= 0) {
        goal(2);
    }

    if (xpos >= 780) {
        goal(1);
    }

    if (ypos >= 480) {
        ymomentum = ymomentum * -1;
    }

    if (ypos <= 0) {
        ymomentum = ymomentum * -1;
    }

    if (xpos > 380 && xpos < 420) {
        wasInTheMiddle = true;
    }

}