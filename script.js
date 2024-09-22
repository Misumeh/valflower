// Pensamientos para cada imagen
const photoThoughts = [
    "Cuando haces esa boquita de besito, me envuelve una ternura que no puedo resistir.",
    "Parece que sacar la lengua es tu especialidad, mientras yo aún estoy aprendiendo.",
    "Nunca imaginé que te vería casi devorando tu propio cabello.",
    "Acurrucarme en tu mejilla es una sensación indescriptible, un abrazo de ternura.",
    "Cada vez que sonríes, mi mundo se ilumina.",
    "Te miro así más seguido de lo que imaginas, disfrutando cada instante.",
    "Capturaste la esencia de la risa en esta imagen, un momento de felicidad compartida.",
    "Dos cachetones en una sola foto, me encanta.",
    "Eres mi adorable cachetona, siempre haciendo que mi corazón sonría.",
    "Es increíble lo que tu presencia hace a mi persona.",
    "En esta foto nos vemos tan bien que podríamos ser modelos, ¿no crees?",
    "Tu risa es tan contagiosa que no puedo dejar de reír.",
    "¿Por qué cerramos los ojos? Quizás queríamos disfrutar del momento sin distracciones.",
    "Aún más guapos aquí; en lugar de besar a la cámara, deberíamos darnos ese beso real.",
    "¿Acaso mi cara rara le da un toque especial a esta imagen?",
    "De las fotos más bellas, gracias por ser parte de este recuerdo. Te quiero mucho."
];


// Función para cambiar entre páginas
function goToPage(pageId) {
    const pages = document.querySelectorAll('.container > div');
    pages.forEach(page => page.classList.add('hidden'));

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.remove('hidden');
    }
}

// Reproducir música al iniciar la página
window.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('backgroundMusic');
    music.play().catch(error => {
        console.log('Autoplay bloqueado: el usuario debe interactuar primero.');
    });
});

// Función para abrir el lightbox con la imagen y el pensamiento correspondiente
function openLightbox(imageIndex) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxText = document.getElementById('lightboxText');

    lightboxImg.src = `${imageIndex + 1}.jpeg`; // Ajusta el nombre según el índice
    lightboxText.innerText = photoThoughts[imageIndex]; // Pensamiento correspondiente
    lightbox.classList.remove('hidden');
}

// Función para cerrar el lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
}

// Función para mostrar la sección de WhatsApp después de la galería
function showWhatsApp() {
    const whatsappSection = document.getElementById('whatsappSection');
    whatsappSection.classList.remove('hidden');
}

// Botón para redirigir a WhatsApp
document.querySelector('.whatsapp-btn').onclick = function () {
    window.open('https://wa.me/584243589?text=Hola+mi+amor', '_blank');
};

// Activar la sección de WhatsApp después de ver la galería
document.querySelector('.gallery').addEventListener('click', () => {
    showWhatsApp();
});
