

function onPageLoaded() {
    
    var checkboxes = document.querySelectorAll(".SearchFilter");

    // Wenn der Status einer Checkbox geändert wird sollen die Produkte mit einem Filter-Keyword neu geladen werden --> loadProducts(input.value, getAllActiveFilters());
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", e => {

            input = document.getElementById("searchInput");
            loadProducts(input.value, getAllActiveFilters());
    
    
        })
    })
}

// Hier wird bei jeder Checkbox geschaut, ob diese an ist oder nicht und wenn sie an ist, wird der value-Parameter aus dem HTML Quelltext als Filter in die Liste hinzugefügt
function getAllActiveFilters() {
    var checkboxes = document.querySelectorAll(".SearchFilter");

    var filters = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) filters.push(checkbox.value);
    })
    console.log(filters);
    return filters;
}




// Wenn man etwas tittp in der Suchleiste, sollen natürlich auch die Produkte geupdated werden
function searchBarUpdate() {

    input = document.getElementById("searchInput");
    loadProducts(input.value, null);

}


// Die Hauptmethode um die Produkte zu laden
function loadProducts(filterValue, filterCategories) {

    productList = document.getElementById("product_list");

    // hier werden ersteinmal alle sichtbaren Produkte entfernt
    productList.innerHTML = "";


    // Jetzt wird aus der Liste products (von assets/products/products.js) für jedes Element geschau ob...
    for (var key of Object.keys(products)) {
        var product = products[key];
        
        // ... es in Namen das getippte Suchwort aus der Suchleiste enthält
        if (filterValue != null) {
            if (!product.name.toLowerCase().includes(filterValue.toLowerCase().trim())) continue;
        }
        // ... und ob es der Filter entspricht
        if (filterCategories != null) {
            var skip = false;
            filterCategories.forEach(filter => {
                if (!product.categories.includes(filter)) skip = true;
            })
            if (skip) continue;
        }

        // wenn beides oben passt, wird das Produkt zur Webseite hinzugefügt mit den ganzen Informationen, wie Pris, Bild und Name
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
}