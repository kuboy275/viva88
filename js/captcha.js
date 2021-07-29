// const changeTextBtn = document.querySelector('.changeText');
// const readTextBtn = document.querySelector('.readText');
const code = document.querySelector('#code');
const input = document.querySelector('.userInput');
const submitBtn = document.querySelector('.form-register .btn');

// changeTextBtn.addEventListener('click', () => {
//     code.textContent = createCaptcha();
// });
window.addEventListener('load', () => {
    code.textContent = createCaptcha();
});

function createCaptcha() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    let a = letters[Math.floor(Math.random() * letters.length)];
    let b = letters[Math.floor(Math.random() * letters.length)];
    let c = letters[Math.floor(Math.random() * letters.length)];
    let d = letters[Math.floor(Math.random() * letters.length)];
    let e = letters[Math.floor(Math.random() * letters.length)];
    let f = letters[Math.floor(Math.random() * letters.length)];
    let code = a + b + c + d + e + f;
    return code;
}

submitBtn.disabled = true;
input.addEventListener("keyup", function() {
    let val = input.value;
    if (val === code.textContent) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
})


// readTextBtn.addEventListener('click', () => {
//     let text = code.textContent;
//     responsiveVoice.speak(text, { rate: 0.8 });
// })