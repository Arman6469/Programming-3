class Xotaker extends Dnk {
    constructor(x, y, ser, ex) {
        super(x, y);
        this.energy = 8;
        if (ser == 0) {
            this.ser = "arakan"
        }
        else this.ser = "igakan"

      
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
                    this.movement++;
                    var norVandak = random(this.yntrelVandak(0));
                    if (norVandak) {

                        var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                        xotakerArr.push(norXotaker);
                        matrix[norVandak[1]][norVandak[0]] = 2 + (Math.round(Math.random())) / 2;


                    }

                }
            }
        }
    }

    Mahanal() {
        if (this.energy == 0) {
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