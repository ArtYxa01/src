const correctInputEl = document.querySelector('#validation-input');
correctInputEl.addEventListener('blur', () => {
    const inputLength = correctInputEl.dataset.length; //6
    correctInputEl.classList.remove('valid','invalid')
    if (inputLength === correctInputEl.value.length) {
       correctInputEl.classList.add('valid') //valid = green
    } else {
       correctInputEl.classList.add('invalid')//invalid = red
    };
});
