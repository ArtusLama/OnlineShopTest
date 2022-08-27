

var isScrollDown = false;
function onScrollEvent() {

    var navbar = document.getElementById('navbar');
    var y = window.scrollY;
    if (y > window.innerHeight - 50 && !isScrollDown) {
        isScrollDown = true
        navbar.classList.add("nav-background");
        console.log("Scroll");
    }
    if (y < window.innerHeight - 50){
        isScrollDown = false;
        navbar.classList.remove("nav-background");
        console.log("Top");
    }

}


var landingProductIndex = 1;
function landingProductSlider(dir) {
    landingProductIndex += dir;
    if (landingProductIndex > 4) landingProductIndex = 1;
    if (landingProductIndex < 1) landingProductIndex = 4;
    document.getElementById("landingproduct-show").removeAttribute("id");
    var newElement = document.getElementsByClassName("landingProduct-" + landingProductIndex).item(0);
    newElement.setAttribute("id", "landingproduct-show");
}



window.setInterval(function() {
    landingProductSlider(1);
  }, 7000);
window.addEventListener("scroll", onScrollEvent);