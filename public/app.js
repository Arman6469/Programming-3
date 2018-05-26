var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function () {
  console.log("Server is running on port 3000");
});

global.random = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Array declaration
global.mardakerArr = [];
global.hoxmArr = [];
global.mardArr = [];
global.gishatichArr = [];
global.xotakerArr = [];
global.grassArr = [];

// Class declaration
global.Grass = require('./class.grass.js');
global.Xotaker = require('./class.xotaker.js');
global.Gishatich = require('./class.gishatich.js');
global.Mard = require('./class.mard.js');
global.Mardaker = require('./class.mardaker.js')
global.Hoxm = require('./class.hoxm.js');

// Matrix initialization
global.matrix = [];
for (var i = 0; i < 40; i++) {
  matrix.push([]);
  for (var h = 0; h < 40; h++) {
    matrix[i][h] = Math.floor(Math.random() * 2);
  }
}
for (var u = 0; u <= 40; u++) {
  matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
}
for (var o = 0; o <= 18; o++) {
  matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
}
for (var r = 0; r <= 7; r++) {
  matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var q = 0; q <= 1; q++) {
  matrix[Math.round(Math.random() * 40)][Math.round(Math.random() * 40)] = 5;
}
for (var a = 0; a <= 4; a++) {
  matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 6;
}

// Weather creation
global.weather = "Amar";

function exanak() {
  if (weather == "Garun") {
    weather = "Amar";
  }
  else if (weather == "Amar") {
    weather = "Ashun";
  }
  else if (weather == "Ashun") {
    weather = "Dzmer";
  }
  else if (weather == "Dzmer") {
    weather = "Garun";
  }
  io.sockets.emit('weather', weather);
}

function setup() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        grassArr.push(new Grass(x, y));
      }
      else if (matrix[y][x] == 2) {
        var r = 2 + (Math.round(Math.random())) / 2;
        xotakerArr.push(new Xotaker(x, y, r));
        matrix[y][x] += r;
      }
      else if (matrix[y][x] == 3) {
        var r = 3 + (Math.round(Math.random())) / 2;
        gishatichArr.push(new Gishatich(x, y, r));
        matrix[y][x] += r;
      }
      else if (matrix[y][x] == 4) {
        var r = 4 + (Math.round(Math.random())) / 2;
        mardArr.push(new Mard(x, y, r));
        matrix[y][x] += r;
      }
      else if (matrix[y][x] == 5) {
        hoxmArr.push(new Hoxm(x, y));
      }
      else if (matrix[y][x] == 6) {
        var r = 4 + (Math.round(Math.random())) / 2;
        mardakerArr.push(new Mardaker(x, y, r));
        matrix[y][x] += r;
      }
    }
  }
}


function draw() {
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

  for (var f in mardakerArr) {
    mardakerArr[f].utel();

    mardakerArr[f].Bazmanal();
  }
  io.sockets.emit('matrix', matrix);



  
}


setup();
setInterval(draw, 500);
setInterval(exanak, 3000);

