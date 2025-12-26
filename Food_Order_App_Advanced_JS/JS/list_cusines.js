async function getCusines(){
    const tbody = document.querySelector('tbody');
    try{
         const response = await fetch('http://localhost:3000/cuisines');
        if(!response.ok){
        throw new Error('HTTP error', response.status)
    }
    const data = await response.json();
    
    for(let [index,cuisine] of data.entries()){
        tbody.innerHTML +=  `
    <tr>
      <td>${index+1}</td>
      <td>${cuisine.name}</td>
      <td>${cuisine.description}</td>
      <td>${cuisine.active}</td>
      <td><img src="${cuisine.image}" width="80px" height="80px"></td>
      <td><button class="btn">Edit</button></td>
    </tr> 
    `
    }
    }catch(error){
        alert(error.message);
    }
   
}
getCusines();