
const menuMobile = document.getElementById('nav-mobile');
const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', (e) => {
    menuMobile.classList.toggle('open');
    e.stopPropagation();
});


document.addEventListener('click', (e) => {
    if (menuMobile.classList.contains('open')) {
        if (!menuMobile.contains(e.target) && !btnMobile.contains(e.target)) {
            menuMobile.classList.remove('open');
        }
    }
});


menuMobile.addEventListener('click', (e) => {
    e.stopPropagation();
});


const openBtns = document.querySelectorAll('.open-modal');
const closeBtns = document.querySelectorAll('.close-modal');

openBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal();
        document.body.classList.add("modal-aberto");
    });
});

closeBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest("dialog");
        if (modal) {
            modal.close();
            document.body.classList.remove("modal-aberto");
        }
    });
});


const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlide() {
    hideSlider();
    currentSlide = (currentSlide + 1) % slider.length;
    showSlider();
}

function prevSlide() {
    hideSlider();
    currentSlide = (currentSlide - 1 + slider.length) % slider.length;
    showSlider();
}

// Eventos do carrossel
btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

// Inicializa o primeiro slide
showSlider();


function contentMobile() {
    const newContent = document.getElementById('content');
    newContent.classList.toggle('active');
}
