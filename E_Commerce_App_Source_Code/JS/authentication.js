let userName = document.getElementById('userName');
let password = document.getElementById('password');
let signInButton = document.getElementById('signInButton');

let attempts = 0;

signInButton.addEventListener('click', loginUser)

function loginUser(event){
    event.preventDefault();
    let uName = userName.value
    let pswd = password.value
    attempts = 1;
    if(attempts>3){
        signInButton.disabled = true;
    }

    if(uName === "" || pswd === ""){
        alert('Username / Password can not be black')
    }
    if(uName==='great' && pswd==='learning'){
        window.location.replace('./html/index.html');
    }else{
        alert('Username / password is incorrect. Try again')
    }
}

