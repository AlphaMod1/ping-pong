var ballSpeed = 10;
var xpos = 390;
var ypos = 240;
var ymomentum = getYMomentum();
var wasInTheMiddle = true;
var side = Math.floor(Math.random() * 2);
var timer;
$(document).ready(function () {
    $('#btn').click(function(e) {  
        runGame();
      });
});

function runGame() {
    $('#btn').css("display", "none");
    timer = setInterval(function () { moveBall(side); }, 40);
    startMovement();
    $('#ball').css("display", "inline-block");
}


function startMovement() {
    xpos = 390;
    ypos = 240;
    ymomentum = getYMomentum();
    ballSpeed = 10;
    $('#ball').css('bottom', '240px');
    $('#ball').css('left', '390px');
}

function stopMovement() {
    clearInterval(timer);
    $('#btn').css("display", "inline-block");
}

function moveBall(side) {

    checkCollision();

    if (side == 0) {
        xpos = xpos + ballSpeed;
        $('#ball').css("left", xpos + "px");
    }
    else if (side == 1) {
        xpos = xpos - ballSpeed;
        $('#ball').css("left", xpos + "px");
    }

    ypos = ypos - ymomentum;
    $('#ball').css('bottom', ypos + "px");

}

function goal(player) {
    addScore(player);
    startMovement();
    if (player == 1) {
        side = 1;
    }
    else if (player == 2) {
        side = 0;
    }
}

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

function getYMomentum() {
    return Math.floor(Math.random() * 26) + -15;
}

function changeYMomentum() {
    return Math.floor(Math.random() * 7) + -3;
}