function stopwatch() {
    const html = {
        btnStart: () => document.querySelector('#startBtn'),
        btnStop: () => document.querySelector('#stopBtn'),
        resultContainer: () => document.querySelector('#time')
    }
    html.btnStart().addEventListener('click', handlerOne);
    html.btnStop().addEventListener('click', handlerTwo);
    let seconds = 0;
    let minutes = 0;
    let id;
    function handlerOne(e) {
        html.resultContainer().textContent = '00:00';
        seconds = 0;
        minutes = 0;
        html.btnStop().disabled = false;
        html.btnStart().disabled = true;
        id = setInterval(function () {
            seconds++;
            let res = ''
            if (seconds < 10) {
                if (minutes !== 0) {
                    res = `${minutes < 10 ? `0${minutes}` : minutes}:0${seconds}`;
                } else {

                    res = `00:0${seconds}`;
                }

            }
            if (seconds >= 10 && seconds < 60) {
                if (minutes !== 0) {
                    res = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds}`;
                } else {

                    res = `00:${seconds}`;
                }

            }
            if (seconds === 60) {
                seconds = 0;
                minutes += 1
                res = `${minutes < 10 ? `0${minutes}` : minutes}:0${seconds}`;

            }
            html.resultContainer().textContent = res;

        }, 1000)
    }
    function handlerTwo(e) {
        clearInterval(id)
       
        html.btnStop().disabled = true;
        html.btnStart().disabled = false;
    }

}