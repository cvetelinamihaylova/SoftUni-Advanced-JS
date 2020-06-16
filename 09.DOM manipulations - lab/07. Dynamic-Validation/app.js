function validate() {
    const inputEmail = document.querySelector('#email');
    inputEmail.addEventListener('change', handler);
    function handler(e) {
        const email = inputEmail.value;
        if (email) {
            const regex = /[a-z]+@[a-z]+\.[a-z]+/;
            const isValid = regex.test(email);
            if (!isValid) {
                inputEmail.className = 'error';
            } else {
                inputEmail.className = '';
                inputEmail.value = '';
            }
        }
    }
}