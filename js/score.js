var p1Score = 0;
var p2Score = 0;

var numMap = [
    [true, true, true, true, true, false, true],
    [false, false, true, true, false, false, false],
    [false, true, true, false, true, true, true],
    [false, false, true, true, true, true, true],
    [true, false, true, true, false, true, false],
    [true, false, false, true, true, true, true],
    [true, true, false, true, true, true, true],
    [false, false, true, true, true, false, false],
    [true, true, true, true, true, true, true],
    [true, false, true, true, true, true, true]
];

function addScore(player) {

    switch (player) {
        case 1:
            p1Score++;
            break;
        case 2:
            p2Score++;
            break;
    }

    if (p1Score > 9 || p2Score > 9) {
        if(p1Score > 9){
            alert("Player 1 Wins!");
        }
        else if(p2Score > 9){
            alert("Player 2 Wins!");
        }
        resetGame();
    }
    else {
        drawCurrentScore(player);
    }

}

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    drawCurrentScore(1);
    drawCurrentScore(2);
    stopMovement();
    $('#ball').css("display", "none");
}


function drawCurrentScore(player) {

    switch (player) {
        case 1:
            if (numMap[p1Score][0]) {
                $("#s-top_left-p1").css("display", "inherit");
            }
            else {
                $("#s-top_left-p1").css("display", "none");
            }
            if (numMap[p1Score][1]) {
                $("#s-bottom_left-p1").css("display", "inherit");
            }
            else {
                $("#s-bottom_left-p1").css("display", "none");
            }
            if (numMap[p1Score][2]) {
                $("#s-top_right-p1").css("display", "inherit");
            }
            else {
                $("#s-top_right-p1").css("display", "none");
            }
            if (numMap[p1Score][3]) {
                $("#s-bottom_right-p1").css("display", "inherit");
            }
            else {
                $("#s-bottom_right-p1").css("display", "none");
            }
            if (numMap[p1Score][4]) {
                $("#s-top_center-p1").css("display", "inherit");
            }
            else {
                $("#s-top_center-p1").css("display", "none");
            }
            if (numMap[p1Score][5]) {
                $("#s-mid_center-p1").css("display", "inherit");
            }
            else {
                $("#s-mid_center-p1").css("display", "none");
            }
            if (numMap[p1Score][6]) {
                $("#s-bottom_center-p1").css("display", "inherit");
            }
            else {
                $("#s-bottom_center-p1").css("display", "none");
            }
            break;
        case 2:
            if (numMap[p2Score][0]) {
                $("#s-top_left-p2").css("display", "inherit");
            }
            else {
                $("#s-top_left-p2").css("display", "none");
            }
            if (numMap[p2Score][1]) {
                $("#s-bottom_left-p2").css("display", "inherit");
            }
            else {
                $("#s-bottom_left-p2").css("display", "none");
            }
            if (numMap[p2Score][2]) {
                $("#s-top_right-p2").css("display", "inherit");
            }
            else {
                $("#s-top_right-p2").css("display", "none");
            }
            if (numMap[p2Score][3]) {
                $("#s-bottom_right-p2").css("display", "inherit");
            }
            else {
                $("#s-bottom_right-p2").css("display", "none");
            }
            if (numMap[p2Score][4]) {
                $("#s-top_center-p2").css("display", "inherit");
            }
            else {
                $("#s-top_center-p2").css("display", "none");
            }
            if (numMap[p2Score][5]) {
                $("#s-mid_center-p2").css("display", "inherit");
            }
            else {
                $("#s-mid_center-p2").css("display", "none");
            }
            if (numMap[p2Score][6]) {
                $("#s-bottom_center-p2").css("display", "inherit");
            }
            else {
                $("#s-bottom_center-p2").css("display", "none");
            }
            break;
    }

}