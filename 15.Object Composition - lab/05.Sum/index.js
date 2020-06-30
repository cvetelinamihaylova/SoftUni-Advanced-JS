function result() {
    let num1, num2, result

    function init(num1Sel, num2Sel, resultSel) {
        num1 = $(num1Sel);
        num2 = $(num2Sel);
        result = $(resultSel);
    }
    function add() {
        operation((a, b) => a + b);
    };

    function subtract() {
        operation((a, b) => a - b);
    };
    
    function operation(fn) {
        let val1 = Number(num1.val());  
        let val2 = Number(num2.val());
        result.val(fn(val1, val2));
    }

    const obj = { init, add, subtract };
    return obj;
}

let obj = solve();

obj.init("#num1", "#num2", '#result');
let num1 = $('#num1');
let num2 = $('#num2');
let res = $('#result');
num1.val(5);
num2.val(3);
obj.add();
expect(res.val()).to.equal('8', "Incorrect result");