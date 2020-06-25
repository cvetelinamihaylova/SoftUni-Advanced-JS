function solve(data, criteria){
    let key, value;
    data = JSON.parse(data);
    const isNotAll = criteria !== 'all';
    if(isNotAll){
     [key, value] = criteria.split('-');
    };
    let filtered = data
        .filter(obj=>{
          return  isNotAll ? obj[key] === value : true})
    print(filtered);

    function print(arr){
        let result = [];
         arr.map((obj, index)=>{
            result.push(`${index}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        });
        console.log(result.join('\n'));
    }
};

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)