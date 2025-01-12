



// 1. Variablen deklarieren
let icon = document.querySelector('#icon'); // für das Icon, id = icon
let lista = document.querySelector('#id4');

    
let menue = document.querySelector('#menue'); // für das Menü, id = menue
// 2. Funktion namens menu; es toggelt die Klasse .einblenden, wenn man auf das Icon klickt. Tauscht sie gegen die Klasse .kreuz

    function menu(){

        menue.classList.toggle('einblenden'); /* Klasse .einblenden wird getoggelt */
        icon.classList.toggle('kreuz'); /* Klasse .kreuz getoggelt */
 

    }

// 3. Ausgabe: Funktion mit "click"-Event verknüpfen, addEventListener kommt hinzu

icon.addEventListener("click",menu); // Events sind u.a. mouseenter, mouseover
lista.addEventListener("click",menu);

//.addEventListener

/* JavaScript sorgt hier dafür, 
   1. dass die 3 Striche zum Kreuz werden 
   2. und dass die Fläche der Navigation vergrößert wird 
   */
/*
    toggle ist eine feststehende Methode in JavaScript
    Methoden sind gelb;
    Schlüsselwörter dunkelblau;
    Selbstgewählte Zeichenketten (Namen) sind orange;
    Die Namen der Variablen und Konstanten sind hellblau.
    .document ist der gesamte HTML Code (HTML-Dokument)
    window ist der Browser steht über dem HTML-Dokument (document)

*/

// Create a MediaQueryList object
var menu = window.matchMedia("(max-width: 1008px)")



window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

