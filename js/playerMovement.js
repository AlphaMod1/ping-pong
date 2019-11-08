var p1Pos = 225;
var p2Pos = 225;
var speed = 35;

$(document).ready(function () {
    $('body').keydown(function (e) {
        check(e.originalEvent.key);
    });

    $('#p1').css("bottom", p1Pos + "px");
    $('#p2').css("bottom", p2Pos + "px");

});

function check(input) {
    switch (input) {
        case "w":
            moveP1(true);
            break;
        case "s":
            moveP1(false);
            break;
        case "i":
            moveP2(true);
            break;
        case "k":
            moveP2(false);
            break;
    }
}

function moveP1(up) {
    if (up) {

        p1Pos = p1Pos + speed;
        if(p1Pos >= 420){
            p1Pos = 420;
        }
        $("#p1").css("bottom", p1Pos + "px");

    }
    else if (!up) {

        p1Pos = p1Pos - speed;
        if(p1Pos <= 0){
            p1Pos = 0;
        }
        $("#p1").css("bottom", p1Pos + "px");

    }
}


function moveP2(up) {
    if (up) {

        p2Pos = p2Pos + speed;
        if(p2Pos >= 420){
            p2Pos = 420;
        }
        $("#p2").css("bottom", p2Pos + "px");

    }
    else if (!up) {

        p2Pos = p2Pos - speed;
        if(p2Pos <= 0){
            p2Pos = 0;
        }
        $("#p2").css("bottom", p2Pos + "px");

    }
}