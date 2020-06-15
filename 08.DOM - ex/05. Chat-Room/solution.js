function solve() {
   const html = {
      btnSend: () => document.querySelector('#send'),
      messageTextArea: () => document.querySelector('#chat_input'),
      divContainer: ()=> document.querySelector('#chat_messages')
   }
   html.btnSend().addEventListener('click', (e) => {
      const newDivMessage = document.createElement('div');
      newDivMessage.className = 'message my-message';
      newDivMessage.textContent = html.messageTextArea().value;
      html.divContainer().appendChild(newDivMessage);

      html.messageTextArea().value = '';
   })
}


