

// Für den Logo Schriftzug, damit er Dunkel wird, wenn er über der Weißen Section ist und
// Weiß, wenn er über der Dunklen Section ist
var isScrollDown = false;
function onScrollEvent() {

    var navbar = document.getElementById('navbar');
    var y = window.scrollY;
    if (y > window.innerHeight + 125 && !isScrollDown) {
        isScrollDown = true
        navbar.classList.add("nav-background");
    }
    if (y < window.innerHeight + 125){
        isScrollDown = false;
        navbar.classList.remove("nav-background");
    }

}

// Aktuelles Produkt auf der Webseite
var landingProductIndex = 1;
// dir = 1 -> zum nächsten produkt    |    dir = -1 -> vorheriges Produkt anzeigen
function landingProductSlider(dir) {
    // Altes Produkt auf der LandingPage entfernen
    var old = document.getElementsByClassName("landingProduct-" + landingProductIndex).item(0);
    // kleine Animation dafür
    old.style.rotation = "15deg";
    old.style.animation = "productsAnimationHide 1s";

    // Index entweder 1 größer oder 1 kleiner
    landingProductIndex += dir;
    // Wenn das letzte Produkt erreicht ist -> zum ersten Produkt gehen
    if (landingProductIndex > 4) landingProductIndex = 1;
    // Wenn ein produkt vor dem 1 angezeigt werden soll (geht ja nicht) wird zum letztem gegangen
    if (landingProductIndex < 1) landingProductIndex = 4;
    // die ID wird entfernt, damit css das Produkt dann nicht mehr anzeigt, das Bild aber trotzdem geladen bleibt
    document.getElementById("landingproduct-show").removeAttribute("id");
    
    // das Produkt mit dem entsprechendem Index in newElement speichern
    var newElement = document.getElementsByClassName("landingProduct-" + landingProductIndex).item(0);
    // Kleine fade-in Animation
    newElement.style.rotation = "15deg";
    newElement.style.animation = "productsAnimationShow 1s";
    // dem neuem Produkt die Id geben, damit es sichtbar ist
    newElement.setAttribute("id", "landingproduct-show");
}

// Produkt zum Warenkorb (also localstorage) hinzufügen
function addToCart(name) {
    var items = [name];
    items = items.concat(getCartItems());
    localStorage.setItem("cartItems", JSON.stringify(items))
}
// Liste von Produkten aus dem Localstorage holen
function getCartItems() {
    var items = JSON.parse(localStorage.getItem("cartItems"));
    if (items == null) return [];
    return items;
}

// Produkt von der LandingPage zum Warenkorb hinzufügen
function addLandingProductToCart(){
    addToCart("bottle-" + landingProductIndex);
    // Zur Buy Unterwebseite gehenw
    //FIXME:
    location.href='buy.html'
}




// alle 7 Sekunden zum nächsten Produkt wechseln
window.setInterval(function() {
    landingProductSlider(1);
}, 7000);

// ScrollEvent hinzufügen
window.addEventListener("scroll", onScrollEvent);