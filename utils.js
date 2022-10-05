



function alertBanner(text, color) {
    Array.from(document.getElementsByClassName("alertBanner")).forEach(function(e) {e.remove()});
    document.body.innerHTML += '<div class="alertBanner" id="activeAlertBanner"><h1>' + text + '</h1></div>';
    var banner = document.getElementById("activeAlertBanner");
    banner.style.backgroundColor = color;

    setTimeout(function() {

        Array.from(document.getElementsByClassName("alertBanner")).forEach(function(e) {e.style.animation = "bannerFadeOut 2s ease-out";});
        setTimeout(function() {
            Array.from(document.getElementsByClassName("alertBanner")).forEach(function(e) {e.remove()});
        }, 2000);
    }, 6000);

}




