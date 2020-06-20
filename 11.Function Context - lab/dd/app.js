function solve() {
   const container = document.querySelector('.container');
   const box = document.querySelector('#box');

   let clicked = false;
   container.addEventListener('click', function(e){
       const target = e.target;
      
       const ul = document.querySelector('#dropdown-ul')
       if(target.tagName === 'BUTTON' && clicked === false){
        clicked = true;
        ul.style.display = 'block'
       }else if(target.tagName === 'BUTTON' && clicked === true){
        ul.style.display = 'none';
        box.style.backgroundColor = 'black';
        box.style.color = 'white';
        clicked = false;
       };

       if(target.tagName === 'LI' && clicked === true){
        box.style.backgroundColor = target.innerText;
        box.style.color = 'black';
       }
   })
}