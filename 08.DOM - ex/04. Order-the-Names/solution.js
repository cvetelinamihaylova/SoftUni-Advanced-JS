function solve() {
    const html = {
        btn: () => document.getElementsByTagName("button")[0],
        lists: () => document.getElementsByTagName('li'),
        inputText: () => document.getElementsByTagName("input")[0],
    }
    html.btn().addEventListener('click', orderNames);
    
    function orderNames(){
        const name = html.inputText().value;
        if(name==""){return; }
        let currentName = "";
        currentName += name[0].toUpperCase();
    
        for (let i = 1; i < name.length; i++) {
            currentName += name[i].toLowerCase();
        }
    
            const index = (name[0]).toUpperCase().charCodeAt(0) - 65;
                html.lists()[index].textContent = html.lists()[index].textContent === '' 
                ? currentName 
                : `${html.lists()[index].textContent}, ${currentName}`;
            
            html.inputText().value = '';

    }

}