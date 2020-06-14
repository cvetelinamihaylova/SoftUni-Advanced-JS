function solve() {
  const html = {
    textParagraph: () => document.querySelector('#input'),
    outputDiv: () => document.querySelector('#output'),
  }
  const arrText = html.textParagraph().textContent.split('. ');
 let res = '';
  for (let i = 0; i < arrText.length; i++) {
    res += arrText[i] + '. ';
    if ((i+1) % 3 === 0) {
      fillText(res, html.outputDiv());
      res = '';
    }
  }
  if(res !== ''){
    fillText(res, html.outputDiv());
    res = '';
  }
  function fillText(text, container){
    let outputParagraph = document.createElement('p');
    outputParagraph.textContent = text;
    container.appendChild(outputParagraph);
  }
}