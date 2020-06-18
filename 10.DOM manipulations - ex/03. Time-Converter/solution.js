function attachEventsListeners() {
    const inputs = document.querySelectorAll('input[type="button"]');
    const html = {
        inputDays: () => document.querySelector('#days'),
        inputHours: () => document.querySelector('#hours'),
        inputMinutes: () => document.querySelector('#minutes'),
        inputSeconds: () => document.querySelector('#seconds'),

    }
    Array.from(inputs).map(el => {
        el.addEventListener('click', convertTime)
    });
    const converterDay = {
        hours: (num) => { return num /= 24; },
        minutes: (num) => { return num /= 1440; },
        seconds: (num) => { return num /= 86400; },

    }

    function convertTime(e) {
        const isDay = e.target.previousElementSibling.id;
        let num = +document.getElementById(isDay).value;
        if (isDay !== 'days') {
            num = converterDay[isDay](num);
        }
        html.inputDays().value = num;
        html.inputHours().value = num * 24;
        html.inputMinutes().value = num * 1440;
        html.inputSeconds().value = num * 86400;
    }
}