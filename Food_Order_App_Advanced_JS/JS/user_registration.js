const regForm = document.getElementById('registerForm');
const fullName = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

regForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    if(password.value !== confirmPassword.value){
        return alert('Passwords do not match.')
    }

    const user = {
        fullname: fullName.value,
        username: username.value,
        email: email.value,
        contact: contact.value,
        password: password.value
    }   
    const jsonUser = JSON.stringify(user); 
    localStorage.setItem('user', jsonUser);

    window.location.href = './sign-in.html'
})
