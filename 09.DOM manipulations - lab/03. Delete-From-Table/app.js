function deleteByEmail() {
   const html = {
       inputEmail: ()=>document.querySelector('input[name="email"]'),
       collectionEmails: ()=>document.querySelectorAll('#customers td:last-child'),
        resultContainer: ()=>document.querySelector('#result')
    }
    html.resultContainer().innerText = '';
   const email = html.inputEmail().value;
   if(email){
       const td = Array.from(html.collectionEmails()).find(el=> el.innerText === email);

       if(td){
        html.resultContainer().innerText = 'Deleted.';
        td.parentElement.remove();
       }else{
        html.resultContainer().innerText = 'Not found.';
       }
       html.inputEmail().value = '';
   }
}