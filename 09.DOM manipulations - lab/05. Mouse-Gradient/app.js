function attachGradientEvents() {
    const result = document.querySelector('#result');
    const gradient =  document.querySelector('#gradient')
  gradient.addEventListener('mousemove', mouseIn);
  gradient.addEventListener('mouseout', mouseOut);


   function mouseIn(e){

    let move = e.offsetX / (e.target.clientWidth - 1);
    move = Math.trunc(move * 100);
    result.textContent = move + "%";
   }
   function mouseOut(e){
    let move = e.offsetX / (e.target.clientWidth - 1);
    result.textContent = "";
   }
}