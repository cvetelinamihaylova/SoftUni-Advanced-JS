function systemRegister(array){
    let systems = {};
array.forEach(element => {
    let [system, component, subcomponent] = element.split(' | ');
    if(!systems.hasOwnProperty(system)){
        systems[system] = {};
    }
    if(!systems[system].hasOwnProperty(component)){
        systems[system][component] = [];
    }
    systems[system][component].push(subcomponent);
});

let sorted = Object.keys(systems).sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length
|| a.localeCompare(b));

sorted.forEach(line =>{
    console.log(line);

    let sortetSubKeys = Object.keys(systems[line]).sort((a, b) => 
    Object.keys(systems[line][b]).length - Object.keys(systems[line][a]).length);

    sortetSubKeys.forEach(subKey => {
        console.log(`|||${subKey}`);
        systems[line][subKey].forEach(subcomponent =>{
            console.log(`||||||${subcomponent}`);
        })
    })
})
}