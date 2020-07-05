function solve() {

    const html = {
        formInputs: () => document.querySelectorAll('#container > input'),
        sectionAdoption: () => document.querySelector('#adoption'),
        sectionAdopted: () => document.querySelector('#adopted'),

    }

    function addHandler(e) {
        e.preventDefault();
        const name = html.formInputs()[0].value;
        const age = Number(html.formInputs()[1].value);
        const kind = html.formInputs()[2].value;
        const owner = html.formInputs()[3].value;

        
        if (name == '' || age == '' || kind == '' || owner == '' || typeof age !== 'number' || isNaN(age)) { return; }
        const btnContact = el('button', 'Contact with owner');
        btnContact.addEventListener('click', contactHandler);
        let ownerSpan = el('span', `Owner: ${owner}`)
        const liEl = el('li',
            [
                el('p',
                    [el('strong', name),
                        " is a ",
                    el('strong', age),
                        " year old ",
                    el('strong', kind)]),
                ownerSpan,
                btnContact
            ]);

        html.sectionAdoption().children[1].appendChild(liEl);
        html.formInputs()[0].value = '';
        html.formInputs()[1].value = '';
        html.formInputs()[2].value = '';
        html.formInputs()[3].value = '';

        function contactHandler() {
            const buttonTakeIt = el('button', 'Yes! I take it!');
            const inputEl = el('input', '', { placeholder: 'Enter your names' })
            buttonTakeIt.addEventListener('click', adoptedHandler);
            const divEl = el('div', [
                inputEl,
                buttonTakeIt
            ]);
            btnContact.remove();
            liEl.appendChild(divEl);
            function adoptedHandler() {
                const newOwner = inputEl.value;
                if (newOwner === ''){return;}
                ownerSpan.textContent = `New Owner: ${newOwner}`;
                divEl.remove();
                const checkedBtn = el('button', 'Checked');
                liEl.appendChild(checkedBtn);
                checkedBtn.addEventListener('click', deleteHandler);
                html.sectionAdopted().children[1].appendChild(liEl);
            }
            function deleteHandler(){
                liEl.remove();
            }
        }
    }
    document.querySelector('#container > button').addEventListener('click', addHandler);

    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        };

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        };

        function append(node) {
            if (typeof node === 'string' || typeof node === 'number') {
                node = document.createTextNode(node);
            };
            result.appendChild(node);
        };

        return result;
    };
}

'New owner: Lara Smith'
'New Owner: Lara Smith'