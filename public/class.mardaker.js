var Dnk = require('./class.DNK.js');


module.exports = class Mardaker extends Dnk {
    constructor(x, y, ser) {
        super(x, y)
        this.energy = 5;
        if (ser == 6) {
            this.ser = "arakan"
        }
        else this.ser = "igakan"
    }






    yntrelVandak1(ch, ch1) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }




    utel() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak1(4, 4.5);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 6 : 6.5;

            for (var i in mardArr) {
                if (this.y == mardArr[i].y && this.x == mardArr[i].x) {
                    mardArr.splice(i, 1);
                    break;
                }

            }


        }
        else {
            this.Move();

        }

    }
    Move() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak1(1, 0);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 6 : 6.5;
        }
    }






    Bazmanal() {
        if (this.ser == "arakan"){
            console.log ("menq txa enq")
            var vandak = random(this.yntrelVandak(6.5));
            if (vandak) {
                var norVandak = random(this.yntrelVandak(0))
            }
            if (norVandak) {
                var r = 6 + (Math.round(Math.random())) / 2;
                var norMardaker = new Mardaker(norVandak[0], norVandak[1],r);
                mardakerArr.push(norMardaker);
                matrix[norVandak[1]][norVandak[0]] = 6 + (Math.round(Math.random())) / 2;

            }
        }
    }
}










