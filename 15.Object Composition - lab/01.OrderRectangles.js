function solve(array){
const template = {
    width: 0,
    height: 0,
    area: function(){ return this.width * this.height},
    compareTo: function(otherObj){
        const currObjArea = this.area();
        const otherObjArea = otherObj.area();
       return otherObjArea - currObjArea ||  otherObj.width - this.width;
    }};
return array.map(([width, height]) => {

   return Object.assign(Object.create(template), {width, height});
 
}).sort((a, b)=> a.compareTo(b));

}

const sortedRec = solve([[1,20],[20,1],[5,3],[5,3]]);

console.log(sortedRec[0].compareTo(sortedRec[1]))