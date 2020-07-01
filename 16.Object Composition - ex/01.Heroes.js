function solve() {
    const obj = { mage, fighter };
    function fighter(name){
        this.name = name;
        this.health = 100;
        this.stamina = 100;
        this.fight = function(){
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`)
        }
        return this;
    };
    function mage(name){
        this.name = name;
        this.health = 100;
        this.mana = 100;
        this.cast = function(spell){
            this.mana--;
            console.log(`${this.name} cast ${spell}`)
        }
        return this;
    };

    return obj;
};
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
console.log(scorcher.mana);
scorcher.cast("light")
console.log(scorcher.mana);
