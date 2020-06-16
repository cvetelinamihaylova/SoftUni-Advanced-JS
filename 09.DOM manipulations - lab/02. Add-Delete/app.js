function solve() {
  const html = {
      textInput: ()=> document.querySelector('#newText'),
      ulContainer: ()=>document.querySelector('#items'),
      a: ()=>document.querySelectorAll('a')
  }

  const li = document.createElement('li');
  const a = document.createElement('a');
  const text = document.createTextNode(html.textInput().value)
  a.innerHTML = '[Delete]';
  a.href = '#';
  li.appendChild(text);
  li.appendChild(a);
  html.ulContainer().appendChild(li);
  html.textInput().value = '';
  Array.from(html.a()).map(a=> a.addEventListener('click', function(e){
    e.target.parentNode.remove()
  }))
}