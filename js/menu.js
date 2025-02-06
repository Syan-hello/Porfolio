// 1. Variablen deklarieren
let icon = document.querySelector("#icon"); // für das Icon, id = icon
let listaItems = document.querySelectorAll(".menu-item"); // Alle Listenelemente
let menue = document.querySelector("#menue"); // für das Menü, id = menue

// 2. Funktion: Menü toggeln (nur bei max-width: 1008px)
function toggleMenu() {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    menue.classList.toggle("einblenden"); // Klasse .einblenden toggeln
    icon.classList.toggle("kreuz"); // Klasse .kreuz toggeln
  }
}

// 3. Event-Listener für das Icon und Listenelemente hinzufügen
icon.addEventListener("click", toggleMenu);
listaItems.forEach((item) => item.addEventListener("click", toggleMenu));

// 4. MediaQuery: Bildschirmgröße überwachen
let mediaQuery = window.matchMedia("(max-width: 1008px)");

function handleMediaQuery(e) {
  if (!e.matches) {
    // Wenn die Breite größer als 1008px ist, Menü zurücksetzen
    menue.classList.remove("einblenden");
    icon.classList.remove("kreuz");
  }
}

// Initial prüfen und bei Änderungen überwachen
mediaQuery.addEventListener("change", handleMediaQuery);
handleMediaQuery(mediaQuery); // Initial prüfen

// 5. Scroll-Effekt (CSS-Variable aktualisieren)
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
