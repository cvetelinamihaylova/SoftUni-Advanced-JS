function solve(arr){
    const data = {};
    const commandParser = {
        create: createFn,
        set: setFn,
        print: printFn
    };
    function createFn(name, rest){
        if(rest.length === 0){
          data[name] = {};
          return data;
        }else{
            const parentName = rest[1];
            return data[name] = Object.create(data[parentName]);
        }
    };
    function setFn(name, rest){
        const [key, value] = rest;

        data[name][key] = value;

    };
    function printFn(name){
        const props = [];
        for (const key in data[name]) {
            props.push(`${key}:${data[name][key]}`)
        };
        console.log(props.join(', '))
    }
    arr.forEach(element => {
        let [command, name, ...rest] = element.split(' ');
        commandParser[command](name, rest)
    });
};
solve(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat']
)