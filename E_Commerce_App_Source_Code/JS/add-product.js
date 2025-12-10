let form = document.getElementById('productForm')

form.addEventListener('submit', addNewProduct)

function addNewProduct(event){
    document.preventDefault();

    let name = document.getElementById('pname').value ;
    let inStock = document.getElementById('instock').checked? 'Yes' : 'No';

    let newProduct = {
        pname : name,
        inStock: inStock
    }
    form.reset ();

    let queryString = new URLSearchParams(newProduct).toString();
    console.log(queryString);
    window.locationbar.href = './html/list_products.html?'+queryString;
}

