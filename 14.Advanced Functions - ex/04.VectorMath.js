(function () {
    let object = {
        add: function (a, b) {

            let xa = +a[0];
            let ya = +a[1];
            let xb = +b[0];
            let yb = +b[1];
            let res = [];
            res[0] = xa + xb;
            res[1] = ya + yb;
            return res;
        },
        multiply: function (a, multiplier) {
            let x = a[0];
            let y = a[1];
            let res = [];
            res[0] = x*multiplier;
            res[1] = y*multiplier;
            return res
        },
        length: function(a){
            let x = a[0];
            let y = a[1];
            res = Math.sqrt((x*x) + (y*y));
            return res;
        },
        dot: function(a, b){
            let xa = +a[0];
            let ya = +a[1];
            let xb = +b[0];
            let yb = +b[1];
            let res = (xa*xa) + (ya*yb);
            return res;
        },
        cross: function(a, b){
            let xa = +a[0];
            let ya = +a[1];
            let xb = +b[0];
            let yb = +b[1];
            let res = (xa*yb) - (ya*xb);
            return res;

        }
    };
    return object
})();