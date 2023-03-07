const form = document.queryselector('.login-form')
form.addEventListener ('submit', (event)=> (
event.preventDefault()
const{
elements: {email, password } } = event.currentTarget;
const inputvalue = {Email: `${email.value}`,
Password: `${password.value}`}
console.log(inputvalue)
if (email.value = '' password.value='') 
window.alert ("всі поля повинні бути заповнені!");
})
