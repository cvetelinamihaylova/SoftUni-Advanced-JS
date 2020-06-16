function addItem() {
    const html = {
        // btnAdd: ()=> document.querySelector('input[type="button"]'),
        textInput: ()=> document.querySelector('#newItemText'),
        ulContainer: ()=>document.querySelector('#items')
    }

    const li = document.createElement('li');
    li.textContent = html.textInput().value;
    html.ulContainer().appendChild(li);
    html.textInput().value = '';
}