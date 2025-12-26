const form = document.getElementById('restrauntForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('restaurant');
    const address = document.getElementById('addr');
    const contact = document.getElementById('contact');
    const image = document.getElementById('pic');

    const data = {
        name: name.value,
        address: address.value,
        contact: contact.value,
        image: image.value
    }
    const body = JSON.stringify(data);
    const init = {
        method: 'POST',
        body
    }
    try{
        await fetch('http://localhost:3000/restaurants', init);
    }catch(error){
        alert(error.message);
    }
    form.reset();
    window.location.href = "./list_restaurants.html"
})