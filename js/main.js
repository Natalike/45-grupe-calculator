const equationDOM = document.querySelector('.equation');
const buttonDOM = document.querySelector('.key');

for (const buttonDOM of buttonDOM) {
    buttonDOM.addEventListener('click', () => {
        if (buttonDOM.innerText) {

        }
        equationDOM.innerText += buttonDOM.innerText;
    });
}