async function getOrders() {
  const tbody = document.querySelector("tbody");
  try {
    const response = await fetch("http://localhost:3000/orders");
    if (!response.ok) {
      throw new Error("HTTP error", response.status);
    }
    const data = await response.json();
    for (let [index, order] of data.entries()) {
      tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${order.orderId}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
            <td>${order.amount}</td>
            <td><button class="btn" href="##">Edit</button></td>
            <td><button class="btn" href="##">View</button></td>
            <td>${order.userId}</td>
        </tr>
        `;
    }
  } catch (error) {
    alert(error.message);
  }
}
getOrders();
