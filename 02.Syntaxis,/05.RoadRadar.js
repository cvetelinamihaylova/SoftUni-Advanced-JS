function solve([speed, area]) {
    speed = +speed;

    const areas = {
        motorway: '130',
        interstate: '90',
        city: '50',
        residential: '20'
    }

    const speedLimit = +areas[area];
    if (speed > speedLimit) {
        const diff = speed - speedLimit;
        console.log(severety(diff))
    }
function severety(num){
    if(num <= 20){
        return 'speeding';
    }else if(num <= 40){
        return 'excessive speeding';
    }else{
        return 'reckless driving';
    }
}

}
solve([80, 'city'])