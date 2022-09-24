

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


var landingProductIndex = 1;
function landingProductSlider(dir) {
    var old = document.getElementsByClassName("landingProduct-" + landingProductIndex).item(0);
    old.style.rotation = "15deg";
    old.style.animation = "productsAnimationHide 1s";

    landingProductIndex += dir;
    if (landingProductIndex > 4) landingProductIndex = 1;
    if (landingProductIndex < 1) landingProductIndex = 4;
    document.getElementById("landingproduct-show").removeAttribute("id");
    var newElement = document.getElementsByClassName("landingProduct-" + landingProductIndex).item(0);
    newElement.style.rotation = "15deg";
    newElement.style.animation = "productsAnimationShow 1s";
    newElement.setAttribute("id", "landingproduct-show");
}


function addToCart(name) {
    var items = [name];
    items = items.concat(getCartItems());
    localStorage.setItem("cartItems", JSON.stringify(items))
}
function getCartItems() {
    var items = JSON.parse(localStorage.getItem("cartItems"));
    if (items == null) return [];
    return items;
}

function addLandingProductToCart(){
    addToCart("bottle-" + landingProductIndex);
    location.href='buy.html'
}





window.setInterval(function() {
    landingProductSlider(1);
  }, 7000);
window.addEventListener("scroll", onScrollEvent);