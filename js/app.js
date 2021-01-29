
// alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 

// let ancho = screen.width;

let division = document.querySelectorAll('.division');

function reportWindowSize() {
    ancho = screen.width;
    ancho.textContent = window.innerWidth;
    // division.style.height = ancho * .38 + 'px';
    division.forEach(element => {
        element.style.height = ancho * .38 + 'px';
    });
    
}

window.onresize = reportWindowSize;

