function solve(arr){
const res = [];
arr.shift();

arr.forEach(element => {
    let [town, latitude, longtitude] = element.split('|').map(l=>l.trim()).filter(l=>l!=='');
    latitude = Number(latitude).toFixed(2);
    longtitude = Number(longtitude).toFixed(2);
   const obj = {
       Town: town,
       Latitude: +latitude,
       Longitude: +longtitude
   }
 res.push(obj);
});
console.log(JSON.stringify(res))
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)