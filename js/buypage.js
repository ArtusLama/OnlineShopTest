

// Funktion, um eine Liste von den Produkten im Warenkorb zu bekommen (ist im localstorage gespeichert)
function getCartItems() {
    var items = JSON.parse(localStorage.getItem("cartItems"));
    if (items == null) return [];
    return items;
}


window.onload = displayProductList;
function displayProductList() {
    // Summe aller Produkte berechnen

    // i ist das Produkt, durch das grade geloopt wird.
    // wird gebraucht, damit die Funktion removeFromCart weiß, welches Produkt gelöscht werden soll
    var i = 0;
    var totalPrice = 0.0;
    // Für jedes Produkt im Warenkorb
    for (var item of getCartItems()){
        var product = products[item];
        // Wenn das Produkt in der products.js nicht exestiert, also dann kein Preis hat
        if (product == null){
            var name = "PRODUCT NOT FOUND";
            var price = "";
        } else {
            // Name und Preis aus der products.js Liste in die Variablen speichern
            var name = product.name;
            var price = product.price;
            // Preis erhöen (Alten Preis + Preis von diesem Produkt = neuer Preis)
            totalPrice += price;
        }    
        // Icon zum löschen des Produktes aus dem Warenkorb hinzufügen
        var remove_icon = '<a onclick="removeFromCart(' + i + ')"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512"><g><path d="M490.667,96c0-17.673-14.327-32-32-32h-80.555C364.632,25.757,328.549,0.13,288,0h-64   c-40.549,0.13-76.632,25.757-90.112,64H53.333c-17.673,0-32,14.327-32,32l0,0c0,17.673,14.327,32,32,32H64v266.667   C64,459.468,116.532,512,181.333,512h149.333C395.468,512,448,459.468,448,394.667V128h10.667   C476.34,128,490.667,113.673,490.667,96z M384,394.667C384,424.122,360.122,448,330.667,448H181.333   C151.878,448,128,424.122,128,394.667V128h256V394.667z"/><path d="M202.667,384c17.673,0,32-14.327,32-32V224c0-17.673-14.327-32-32-32s-32,14.327-32,32v128   C170.667,369.673,184.994,384,202.667,384z"/><path d="M309.333,384c17.673,0,32-14.327,32-32V224c0-17.673-14.327-32-32-32s-32,14.327-32,32v128   C277.333,369.673,291.66,384,309.333,384z"/></g></svg></a>';
        // Produkt auf der Webseite anzeigen/Code hinzufpgen                                  
        document.getElementById("productList").innerHTML += "<li id='product_index_" + i + "'><img src='assets/products/" + item + ".png'><div class='product_name'>" + name + "</div><div class='product_price'>" + price + "€</div><button>" + remove_icon + "</button></li>";
        // 'Produkt Counter' um 1 erhöhen
        i++;
    }
    // Den 'Summe:' Text von der Webseite entfernen
    var total = document.getElementsByClassName("totalPrice")[0];
    if (total != null) total.remove();

    // Neuen Preis anzeigen
    if (i == 0){
        // Falls keine Produkte im Warenkorb sind -> anzeigen, dass er leer ist
        document.getElementById("productList").innerHTML += "<h2>Dein Warenkorb ist leer!</h2>";
        // "ZurKasse" button weg machen, da ja nichts zum Kaufen da ist
        document.getElementsByClassName("zurKasseButton")[0].style.visibility = "hidden";
    } else {
        // "ZurKasse" button anzeigen, da Produkte im Warenkorb sind
        document.getElementsByClassName("zurKasseButton")[0].style.visibility = "visible";
        // Die Summe aller Produkte im Warenkorb errechnen und anzeigen.         .toFixed(2)
        //                                                                       -> Da es nur 2 Nachkommastellen von Preisen gibt
        document.body.innerHTML += "<h3 class='totalPrice'>Summe: " + totalPrice.toFixed(2) + "€</h3>";
    }
}

// Funktion, um ein bestimmtes Produkt zu entfernen
function removeFromCart(index) {

    // Animation, für das Produkt, wenn es weg geht
    var animation_fadeout = [
        { transform: "scale(1)" },
        { transform: "scale(0)" }
    ];
    // Das Timing für die Animation
    var animation_timing = {
        duration: 600,
        iterations: 1,
    }

    // Animation starten
    var remove_element = document.getElementById("product_index_" + index);
    remove_element.animate(animation_fadeout, animation_timing);
    

    setTimeout(function() {
        // Banner hinzufügen
        alertBanner(products[getCartItems()[index]].name + " wurde aus deiner Liste entfernt!", "#FD5D5D")
        // Produkt aus dem localstorage entfernen
        var cartItems = getCartItems();
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        // Produkt aus dem HTML Code entfernen, damit es nicht mehr auf der Webseite angezeigt wird
        document.getElementById("productList").innerHTML = "<h1>Deine Artikel</h1>";
        // Produktliste updaten
        displayProductList();
    }, 400);

    
}




