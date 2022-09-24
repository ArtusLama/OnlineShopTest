

function getCartItems() {
    var items = JSON.parse(localStorage.getItem("cartItems"));
    if (items == null) return [];
    return items;
}


window.onload = displayProductList;
function displayProductList() {
    console.log(getCartItems());
    for (var item of getCartItems()){
        var product = products[item];
        if (product == null){
            var name = "PRODUCT NOT FOUND";
            var price = "";
        } else {
            var name = product.name;
            var price = product.price;
        }    
        document.getElementById("productList").innerHTML += "<li><img src='assets/products/" + item + ".png'>" + name + " price: " + price + "</li>";
    }
}




