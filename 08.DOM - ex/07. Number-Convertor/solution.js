function solve() {
const html ={
    selectEl: ()=>document.querySelector('#selectMenuTo'),
    btnConvert: ()=>document.querySelector('button'),
    numToConvert: ()=>document.querySelector('#input'),
    resContainer: ()=>document.querySelector('#result'),
    options: ()=>document.querySelectorAll('#selectMenuTo > option')
}
const converter = {
    hexadecimal: (n) =>n.toString(16),
    binary: (n) =>n.toString(2),
}
const optionElBinary = createEl("binary", "Binary", "option" );
const optionElHex =  createEl("hexadecimal", "Hexadecimal", "option" );

html.selectEl().appendChild(optionElBinary);
html.selectEl().appendChild(optionElHex);


html.btnConvert().addEventListener('click', convert);

function convert(e){
    const value = Array.from(html.options()).find(el=>el.selected === true).value;
    const number = Number(html.numToConvert().value);
    const result = converter[value](number);
    html.resContainer().value = result.toUpperCase();
}
function createEl(value, text, tag){
const element = document.createElement(tag);
element.value = value;
element.textContent = text;
return element
}
}