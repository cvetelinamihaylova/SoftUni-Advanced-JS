function toggle() {
   const html = {
       btn: ()=>document.querySelector('.button'),
       divToShow: ()=>document.querySelector('#extra'),
   } ;

   html.btn().textContent = html.btn().textContent === 'More' 
   ? 'Less' 
   : 'More';
   html.divToShow().style.display = html.divToShow().style.display === 'block' 
   ? 'none' 
   : 'block';

}