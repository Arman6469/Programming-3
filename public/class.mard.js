var Dnk = require('./class.DNK.js')

module.exports = class Mard extends Dnk {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 8;
        if (ser == 4) {
            this.ser = "arakan"
        }
        else this.ser = "igakan"




    }
    yntrelVandak2(ch, ch1, ch2, ch3, ch4) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == ch3) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == ch4) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;
    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak2(3.5, 3, 2.5, 2, 1);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 4 : 4.5;

            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }


            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
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
        var norVandak = this.yntrelVandak(0);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 4 : 4.5;


        }


    }

    Bazmanal() {
        if (this.ser == "arakan") {
            var vandak = random(this.yntrelVandak(4.5));
            if (vandak) {
                var norVandak = random(this.yntrelVandak(0))
            }
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                if (this.energy >= 17)
                    var r = 4 + (Math.round(Math.random())) / 2;
                var norMard = new Mard(norVandak[0], norVandak[1], r);
                mardArr.push(norMard);
                matrix[norVandak[1]][norVandak[0]] = 4 + (Math.round(Math.random())) / 2;;
                this.energy == 0;
            }

        }

    }



    Mahanal() {
        if (this.energy == 7) {
            matrix[this.y][this.x] = 0;
            for (var i in mardArr) {
                if (this.y == mardArr[i].y && this.x == mardArr[i].x) {
                    mardArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}

