function addItem() {
    const html = {
        textInput: ()=>document.querySelector('#newItemText'),
        valueInput: ()=>document.querySelector('#newItemValue'),
        selectContainer: ()=>document.querySelector('#menu')
    }

    const optionElement = document.createElement('option');

    optionElement.setAttribute('value', html.valueInput().value);
    optionElement.textContent = html.textInput().value;

    html.selectContainer().appendChild(optionElement);

    html.textInput().value = '';
    html.valueInput().value = '';
}