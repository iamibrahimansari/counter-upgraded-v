const btns = document.querySelectorAll('.btn');
const number = document.getElementById('int');

const helperFunction = (num, color) =>{
    number.textContent = num;
    number.style.color = color;
}

btns.forEach(btn => {
    btn.addEventListener('click', event =>{
        let num = parseInt(number.textContent);
        const indicator = btn.textContent;
        num = indicator === 'INCREASE' ? num + 1 : indicator === 'DECREASE' ? num - 1 : 0; 
        helperFunction(num, !num ? 'black' : num > 0 ? 'green' : 'red');
    })
})