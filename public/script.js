var hoxmArr = []
var mardArr = []
var gishatichArr = []
var xotakerArr = []
var grassArr = []

var side = 16

var matrix = [];
for (var i = 0; i < 40; i++) {
    matrix.push([]);
    for (var h = 0; h < 40; h++) {
        matrix[i][h] = Math.floor(Math.random() * 2);
    }
}
for (var u = 0; u <= 30; u++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
}
for (var o = 0; o <= 40; o++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
}
for (var r = 0; r <= 10; r++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var q = 0; q <= 1; q++) {
    matrix[Math.round(Math.random() * 40)][Math.round(Math.random() * 40)] = 5;
}


function setup() {
    frameRate(10);
    noStroke();
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                var r = (Math.round(Math.random())) / 2;
                xotakerArr.push(new Xotaker(x, y, r));
                matrix[y][x] += r;
            }
            else if (matrix[y][x] == 3) {
                var r = (Math.round(Math.random())) / 2;
                gishatichArr.push(new Gishatich(x, y, r));
                matrix[y][x] += r;
            }
            else if (matrix[y][x] == 4) {
                var r = (Math.round(Math.random())) / 2;
                mardArr.push(new Mard(x, y, r));
                matrix[y][x] += r;
            }
            else if (matrix[y][x] == 5) {
                hoxmArr.push(new Hoxm(x, y));
            }
        }
    }
}








function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
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
                fill(209, 6, 100);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(231, 151, 91);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4.5) {
                fill(231, 151, 130);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }


    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }


    for (var l in xotakerArr) {
        xotakerArr[l].utel();

        xotakerArr[l].Bazmanal();

        xotakerArr[l].Mahanal()
    
}

    for (var k in gishatichArr) {
        gishatichArr[k].utel();

        gishatichArr[k].Bazmanal();

        gishatichArr[k].Mahanal();
    }

    for (var f in mardArr) {
        mardArr[f].utel();

        mardArr[f].Bazmanal();

        mardArr[f].Mahanal();
    }



    for (var g in hoxmArr) {
        hoxmArr[g].haytnvel();
    }



}












// var matrix = [
//    [0, 0, 1, 0, 0],
//    [1, 0, 0, 2, 0],
//    [0, 1, 0, 0, 0],
//    [0, 0, 1, 0, 0],
//    [1, 1, 0, 0, 0],
//    [1, 1, 0, 0, 0],
//    [1, 1, 0, 0, 0]
// ];









