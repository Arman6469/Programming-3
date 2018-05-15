class Grass {
    constructor(x, y, ex) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],


        ];
        this.exanak = [1, 2, 3, 4]
        this.exanak1 = Math.random(this.exanak)
        if (ex == 1) {
            this.exanak1 = "Garun"
        }
        else if (ex == 2) {
            this.exanak1 = "Amar"
        }
        else if (ex == 3) {
            this.exanak1 = "Ashun"
        }
        else if (ex == 4) {
            this.exanak1 = "Dzmer"
        }


    }



    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }




    bazmanal() {
        // console.log("AFDS")
        if (this.exanak == "Dzmer") {
            this.multiply++;
            var norVandak = random(this.yntrelVandak(0));
            if (this.multiply == 10 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 1;
            }
        }
        else {
            this.multiply++;
            var norVandak = random(this.yntrelVandak(0));
            if (this.multiply >= 7 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 1;
            }
        }
    }
}
