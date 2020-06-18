function solve() {
   const [spanPl1, _, spanPl2] = document.querySelectorAll('#result span');
   let historyDiv = document.querySelector('#history');
   Array.from(document.querySelectorAll('img')).map(el => {
      el.addEventListener('click', clickCards);
   })

   function clickCards(e) {
      const target = e.target;
      const powerCard = Number(target.name);
      const player = target.parentNode.id;
      if (player === 'player1Div') {
         spanPl1.textContent = powerCard;
      } else {
         spanPl2.textContent = powerCard
      }
      target.src = "images/Whitecard.jpg"

      if (spanPl2.textContent !== '' && spanPl1.textContent !== '') {
         const pl1cardPower = Number(spanPl1.textContent);
         const pl2cardPower = Number(spanPl2.textContent);
         compareCards(pl1cardPower, pl2cardPower);
         historyDiv.textContent += `[${pl1cardPower} vs ${pl2cardPower}] `
         spanPl1.textContent = '';
         spanPl2.textContent = '';
      }

   }

   function compareCards(num1, num2) {
      const cardPl1 = document.querySelector(`#player1Div img[name="${num1}"]`);
      const cardPl2 = document.querySelector(`#player2Div img[name="${num2}"]`);
      if (num1 > num2) {
         cardPl1.style.border = '2px solid green'
         cardPl2.style.border = '2px solid red'

      } else {
         cardPl1.style.border = '2px solid red'
         cardPl2.style.border = '2px solid green'
      }
   }

}