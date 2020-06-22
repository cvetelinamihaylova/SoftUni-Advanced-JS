function solve() {
   const tbody = document.querySelector('.minimalistBlack tbody')
   tbody.addEventListener('click', handler);
   function handler(e) {
      const trTarget = e.target.parentNode;
      const color = trTarget.style.backgroundColor;

      if (color === 'rgb(65, 63, 94)') {
         trTarget.style.backgroundColor = '';
      } else {
         const trs = document.querySelectorAll('tbody tr');
         Array.from(trs).map(tr=> tr.style.backgroundColor = '');
         trTarget.style.backgroundColor = '#413f5e'
      }
   };

}
