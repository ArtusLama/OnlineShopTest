
function getCartItems() {
    var items = JSON.parse(localStorage.getItem("cartItems"));
    if (items == null) return [];
    return items;
}

window.onload = displayProductList;
function displayProductList() {
    console.log(getCartItems());
    for (var item of getCartItems()){
        document.getElementById("productList").innerHTML += "<li><img src='assets/products/" + item + ".png'></li>";
    }
}




