


// Ein Banner unten im Browser anzeigen mit einem TEXT und einer FARBE
function alertBanner(text, color) {
    // Alle Banner, die grade sichtbar sind löschen
    Array.from(document.getElementsByClassName("alertBanner")).forEach(function(e) {e.remove()});
    // Ein Banner hinzufügen
    document.body.innerHTML += '<div class="alertBanner" id="activeAlertBanner"><h1>' + text + '</h1></div>';
    var banner = document.getElementById("activeAlertBanner");
    // Dem Banner die FARBE geben
    banner.style.backgroundColor = color;

    // Kleine Animation zum auftauchen/verschwinden
    setTimeout(function() {

        Array.from(document.getElementsByClassName("alertBanner")).forEach(function(e) {e.style.animation = "bannerFadeOut 1s ease-out";});
        setTimeout(function() {
            Array.from(document.getElementsByClassName("alertBanner")).forEach(function(e) {e.remove()});
        }, 2000);
    }, 6000);

}




