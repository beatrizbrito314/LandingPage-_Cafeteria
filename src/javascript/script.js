/*no elemento que possui "nav-mobile" como id, adiciona/remove
    a classe open atrevés do "classList" ao clicar no botão (btn-mobile)
*/
function exibirMenu(){
    let menuMobile = document.getElementById('nav-mobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
     } else {
        menuMobile.classList.toggle('open');
    }
}
function contentMobile(){
    let newContent = document.getElementById('content');
    if(newContent.classList.contains('active')){
        newContent.classList.remove('active');
     } else {
        newContent.classList.toggle('active');
    }
}

//abrir modal
const openBtn=document.querySelectorAll('.open-modal');
openBtn.forEach(button=>{
    button.addEventListener('click',()=>{
        const modalId=button.getAttribute('data-modal');
        const modal=document.getElementById(modalId);
        modal.showModal();
        document.body.classList.add("modal-aberto");
    })
})
//fechar modal
const closeBtn=document.querySelectorAll('.close-modal');
closeBtn.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
        document.body.classList.remove("modal-aberto");
        
    });
});
//carrosel de imagens:
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

let currentSlide = 0; // Usa 'let' em vez de 'var'

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}
function nextSlide() {
    hideSlider();
    currentSlide = (currentSlide + 1) % slider.length; // Alternativa mais compacta
    showSlider();
}

function prevSlide() {
    hideSlider();
    currentSlide = (currentSlide - 1 + slider.length) % slider.length; // Evita números negativos
    showSlider();
}

// Adiciona eventos corretamente
btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);
