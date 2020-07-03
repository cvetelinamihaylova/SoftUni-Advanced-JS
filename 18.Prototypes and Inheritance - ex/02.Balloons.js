function solve(){
    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            const _test = 'XOXO';
            Object.defineProperty(this, 'TEST', {
                get: ()=> _test
            })
        }
        get ribbon(){
            return {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }
    }
    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
const bal = solve();
const b = new bal.PartyBalloon('red', 10, 'orange', 5);
console.log(b.TEST)