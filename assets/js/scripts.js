// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM cargado - JavaScript funcionando');
    // Seleccionar elementos para la funcionalidad de habilidades
    const toggleHabilidades = document.getElementById('toggle-habilidades');
    const habilidades = document.getElementById('habilidades');

    // Seleccionar elementos para la funcionalidad de educación
    const toggleEducacion = document.getElementById('toggle-educacion');
    const educacion = document.getElementById('educacion');

    // Verificar que los elementos existen
    if (!toggleHabilidades || !habilidades) {
        console.error('No se encontraron los elementos de habilidades');
    }

    if (!toggleEducacion || !educacion) {
        console.error('No se encontraron los elementos de educación');
    }

    // Función reutilizable para alternar visibilidad
    function toggleElement(element) {
        if (element.classList.contains('oculto')) {
            element.classList.remove('oculto');
            element.classList.add('visible');
            return 'mostrado';
        } else {
            element.classList.remove('visible');
            element.classList.add('oculto');
            return 'ocultado';
        }
    }
    // Función reutilizable para alternar visibilidad
function toggleElement(element) {
    if (element.classList.contains('oculto')) {
        element.classList.remove('oculto');
        element.classList.add('visible');
        return 'mostrado';
    } else {
        element.classList.remove('visible');
        element.classList.add('oculto');
        return 'ocultado';
    }
}
// Event listener para toggle de habilidades
if (toggleHabilidades && habilidades) {
    toggleHabilidades.addEventListener('click', function() {
        const estado = toggleElement(habilidades);
        console.log('Habilidades ' + estado);
    });
}
// Event listener para toggle de educación
if (toggleEducacion && educacion) {
    toggleEducacion.addEventListener('click', function() {
        const estado = toggleElement(educacion);
        console.log('Educación ' + estado);
    });
}
// Agregar efectos visuales al header
const header = document.querySelector('header');
if (header) {
    header.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    header.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Agregar animación suave al scroll hacia secciones
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('click', function() {
        this.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mostrar mensaje de bienvenida
function mostrarBienvenida() {
    const nombre = document.querySelector('h1').textContent;
    console.log(`¡Bienvenido al portafolio de ${nombre}!`);
    
    // Opcional: mostrar una alerta de bienvenida
    // alert(`¡Bienvenido al portafolio de ${nombre}!`);
}

// Llamar la función de bienvenida
mostrarBienvenida();
// Función para debug - mostrar todos los elementos interactivos
function debugElementos() {
    console.log('=== DEBUG: Elementos encontrados ===');
    console.log('Toggle Habilidades:', toggleHabilidades);
    console.log('Lista Habilidades:', habilidades);
    console.log('Toggle Educación:', toggleEducacion);
    console.log('Div Educación:', educacion);
    console.log('===================================');
}

// Llamar debug solo en desarrollo (puedes comentar esta línea en producción)
debugElementos();

// Manejo global de errores
window.addEventListener('error', function(e) {
    console.error('Error en JavaScript:', e.error);
});
});

