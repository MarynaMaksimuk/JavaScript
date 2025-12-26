const form = document.getElementById("signin-form");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const message = document.getElementById("message");
const signinButton = document.getElementById("signInButton");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const localUser = localStorage.getItem("user");
  const user = JSON.parse(localUser);

  if (user.username !== userName.value || user.password !== password.value) {
    message.innerHTML = "Register before sign in";
    return;
  }
  sessionStorage.setItem("login", true);
  window.location.href = "./html/index.html";
});
