const id1 = document.querySelector("#nav-hello");
const id2 = document.querySelector("#nav-layout");
const id3 = document.querySelector("#nav-web");
const id4 = document.querySelector("#nav-corporate");
const id5 = document.querySelector("#nav-typo");
const id6 = document.querySelector("#nav-photo");
const id7 = document.querySelector("#nav-contact");

window.addEventListener("scroll", ueberwachung);

// Die Funktion, die nur ausgeführt wird, wenn die Bildschirmbreite >= 1024px ist
function ueberwachung() {
    // Abfrage der Fensterbreite
    const windowWidth = window.innerWidth;

    // Wenn die Bildschirmbreite kleiner als 1024px ist, nichts tun
    if (windowWidth < 1024) {
        return;
    }

    // Die Scroll-Logik wird nur ab einer Breite von 1024px ausgeführt
    let y = window.scrollY;

    if (y <= 600) {
        id1.style.padding = "1rem";
        id1.style.color = "#a1aafa";
    } else {
        id1.style.padding = "0rem";
        id1.style.color = "#333";
    }

    if (y >= 600 && y <= 4500) {
        id2.style.padding = "1rem";
        id2.style.color = "#a1aafa";
    } else {
        id2.style.padding = "0rem";
        id2.style.color = "#333";
    }

    if (y >= 4500 && y <= 6000) {
        id3.style.padding = "1rem";
        id3.style.color = "#a1aafa";
    } else {
        id3.style.padding = "0rem";
        id3.style.color = "#333";
    }

    if (y >= 6000 && y <= 10000) {
        id4.style.padding = "1rem";
        id4.style.color = "#a1aafa";
    } else {
        id4.style.padding = "0rem";
        id4.style.color = "#333";
    }

    if (y >= 10000 && y <= 11000) {
        id5.style.padding = "1rem";
        id5.style.color = "#a1aafa";
    } else {
        id5.style.padding = "0rem";
        id5.style.color = "#333";
    }

    if (y >= 11000 && y <= 12500) {
        id6.style.padding = "1rem";
        id6.style.color = "#a1aafa";
    } else {
        id6.style.padding = "0rem";
        id6.style.color = "#333";
    }

    if (y >= 12500) {
        id7.style.padding = "1rem";
        id7.style.color = "#a1aafa";
    } else {
        id7.style.padding = "0rem";
        id7.style.color = "#333";
    }

    console.log(window.scrollY); // test console
}



