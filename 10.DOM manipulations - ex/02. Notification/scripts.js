function notify(message) {
  const notificationDiv = document.querySelector('#notification');
 notificationDiv.textContent = message;
 notificationDiv.style.display = 'block';
  setTimeout(handler, 2000);
  function handler(){
      notificationDiv.style.display = 'none'
  }

}