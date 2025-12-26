async function getUsers() {
  const tbody = document.querySelector("tbody");
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("HTTP error", response.status);
    }
    const data = await response.json();
    for (let user of data) {
      tbody.innerHTML += `
        <tr>
            <td>${user.userId}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
        </tr> 
        `;
    }
  } catch (error) {
    alert(error.message);
  }
}
getUsers();
