function focus() {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));

    inputs.map((el) => {
        el.addEventListener('focus', handlerFocus);
        el.addEventListener('blur', handlerBlur)
    });

    function handlerFocus(e) {
        const target = e.target;
        target.parentElement.className = 'focused';
    }
    function handlerBlur(e) {
        console.log(e)
        const target = e.target;
        target.parentElement.classList.remove("focused");
    }
}