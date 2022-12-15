

function onPageLoaded() {
    
    var checkboxes = document.querySelectorAll(".SearchFilter");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", e => {

            input = document.getElementById("searchInput");
            loadProducts(input.value, getAllActiveFilters());
    
    
        })
    })
}

function getAllActiveFilters() {
    var checkboxes = document.querySelectorAll(".SearchFilter");

    var filters = [];
    checkboxes.forEach(checkbox => {
        console.log(checkbox.value);
        if (checkbox.checked) filters.push(checkbox.value);
    })
    console.log(filters);
    return filters;
}





function searchBarUpdate() {

    input = document.getElementById("searchInput");
    loadProducts(input.value, null);

}


function loadProducts(filterValue, filterCategories) {

    productList = document.getElementById("product_list");
    productList.innerHTML = "";


    for (var key of Object.keys(products)) {
        var product = products[key];
        
        if (filterValue != null) {
            if (!product.name.toLowerCase().includes(filterValue.toLowerCase().trim())) continue;
        }
        if (filterCategories != null) {
            var skip = false;
            filterCategories.forEach(filter => {
                if (!product.categories.includes(filter)) skip = true;
            })
            if (skip) continue;
        }

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

    //alertBanner("'" + products[name].name + "' wurde zu deinem Warenkorb hinzugefügt", "#46b951");
}