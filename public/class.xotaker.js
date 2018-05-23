var Dnk = require('./class.DNK.js')

module.exports = class Xotaker extends Dnk {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 8;
        if (ser == 2) {
            this.ser = "arakan";
        }
        else this.ser = "igakan";


    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak(1);
        var yntrelVandak = random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 2 : 2.5;

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
            matrix[this.y][this.x] = this.ser == "arakan" ? 2 : 2.5;
        }


    }


    Bazmanal() {
        if (this.ser == "arakan") {
            var vandak = random(this.yntrelVandak(2.5));
            if (vandak) {
                var norVandak = random(this.yntrelVandak(0))
                if (norVandak) {
                    if (this.energy >= 9) {
                        var r = 2 + (Math.round(Math.random())) / 2;
                        var norXotaker = new Xotaker(norVandak[0], norVandak[1], r);
                        xotakerArr.push(norXotaker);
                        matrix[norVandak[1]][norVandak[0]] = r;
                        this.energy == 8
                    }

                }
            }
        }
    }

    Mahanal() {
        if (this.energy == -10) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}