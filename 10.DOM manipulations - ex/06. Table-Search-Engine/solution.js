function solve() {
   const searchBtn = document.querySelector('#searchBtn');
   
   searchBtn.addEventListener('click', searchForMatch)
   function searchForMatch(e){
      const searchedMatch = document.querySelector('#searchField').value;
      document.querySelector('#searchField').value = '';
   const tableData = document.querySelectorAll('tbody td');
   [...tableData].map(el=>{
      if(el.parentElement.classList[0] === 'select'){
         el.parentElement.classList.remove('select');
      }
   });
   const arrData = [...tableData].map(el=>el.textContent);
   arrData.forEach((el, index)=>{
      if(searchedMatch && el.includes(searchedMatch)){
        tableData[index].parentElement.classList.add('select')
      }
   });
}
}