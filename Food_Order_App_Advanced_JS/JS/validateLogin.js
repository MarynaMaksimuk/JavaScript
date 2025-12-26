// Observer the body tag of all html files. use validateLogIn function to verfy the login activity

function validateLogIn() {
  const userName = document.getElementById("userName");
  const signOut = document.getElementById("signout");
  const sessionStoreage = sessionStorage.getItem("login");
  if (!sessionStoreage) {
    alert("You must sign-in");
    window.location.href = "../sign-in.html";
    return;
  }
  const localUser = localStorage.getItem("user");
  const user = JSON.parse(localUser);

  userName.innerHTML = `Welcome, ${user.username}`;

  signOut.addEventListener("click", (event) => {
    sessionStorage.clear("login");
    window.location.href = "../sign-in.html";
  });
}

// Add event listener to every sign out button in the header as asked in the problem statement.
