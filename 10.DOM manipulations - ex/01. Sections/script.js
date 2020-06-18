function create(words) {
   const container = document.querySelector('#content'); 
   words.forEach(element => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = element;
      p.style.display= 'none'
      div.appendChild(p);
      container.appendChild(div);
   });
   container.addEventListener('click', handler);
   function handler(e){
      const target = e.target;
      if(target.nodeName === 'DIV'){
         target.children[0].style.display = 'block';
      }
   }
}