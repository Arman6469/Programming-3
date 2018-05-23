var socket = io();
var side = 16;
var weather;

function setup() {
    noStroke();
    createCanvas(40 * side, 40 * side);
    background('#acacac');
}

socket.on('matrix', function (matrix) {
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && weather == "Dzmer") {
                fill(214, 249, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.5) {
                fill((250, 246, 240));
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(209, 6, 6);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3.5) {
                fill("#ff66a3");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(231, 151, 91);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4.5) {
                fill(255, 117, 26);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && weather == "Amar" || "Ashun" || "Garun") {
                fill("green")
                rect(x * side, y * side, side, side);
            }
        }
    }

    fill("black");
    text("Now is " + weather, 0, matrix[0].length * side + 10);

});


socket.on('weather', function(data) {
    weather = data;
});