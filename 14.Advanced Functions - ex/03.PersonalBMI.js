function solve(name, age, weight, height) {
    const heightInM = +height / 100;
    const BMI = Math.round(+weight / heightInM ** 2);
    const status = calcStatus(BMI);
    const personBMI = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI,
        status,
    };
    if(status === 'obese'){
        personBMI.recommendation = 'admission required';
    }

    return personBMI;
    

    function calcStatus(num){
        let status;
        if(num>=30){
            status = 'obese';
        }else if(num < 18.5){
            status = 'underweight';
        }else if(num < 25){
            status = 'normal';
        }else if(num < 30){
            status = 'overweight';
        }

        return status
    }
}

console.log(solve('Honey Boo Boo', 9, 51, 167))