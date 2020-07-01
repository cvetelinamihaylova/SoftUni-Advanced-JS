function solve() {
    const myObj = { extend };
    const proto = Object.getPrototypeOf(myObj);
    function extend(object) {

        for (const key in object) {
            if (typeof object[key] === "function") {
                proto[key] = object[key];
            } else {

                myObj[key] = object[key];
            }
        }
    }

    return myObj;
};

var testObject = solve();
testObject.extend({
    extensionMethod: function () { },
    extensionProperty: 'someString'
});