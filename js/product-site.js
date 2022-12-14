



function loadProducts() {

    productList = document.getElementById("product_list");
    productList.innerHTML = "";


    for (var key of Object.keys(products)) {
        var product = products[key];

        productList.innerHTML += '<li><img src="assets/products/' + key + '.png"><div class="product_stuff"><h1>' + product.price + '€</h1><h2>' + product.name + '</h2><button onclick=\'addToUsersCart("' + key + '")\'>kaufen</button></div></li>';


    }

}


function getCartItems() {
    var items = JSON.parse(localStorage.getItem("cartItems"));
    if (items == null) return [];
    return items;
}

function addToUsersCart(name) {
    var items = [name];
    items = items.concat(getCartItems());
    localStorage.setItem("cartItems", JSON.stringify(items));

    alertBanner("'" + products[name].name + "' wurde zu deinem Warenkorb hinzugefügt", "#46b951");
}