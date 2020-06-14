function growingWord() {
  let px = 2;
  let colorChanges = {
    "blue": "green",
    "green": "red",
    "red": "blue"
  };
const changingP = document.querySelector('#exercise > p');
  if(!changingP.hasAttribute('style')){
    changingP.setAttribute('style', `color:blue; font-size: ${px}px`);
  }else{
    const currentColor = changingP.style.color;
    const currentPx = changingP.style["font-size"];
    px = currentPx.slice(0, currentPx.length - 2) * 2;
    changingP.setAttribute('style', `color:${colorChanges[currentColor]}; font-size: ${px}px`);
  }

}