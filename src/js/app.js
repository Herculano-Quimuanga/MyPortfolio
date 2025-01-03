const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})


const portfolio = document.querySelector('.portfolio-image');

const portfolioContent = Array.from(portfolio.children);

portfolioContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("arial-hidden", true);
    portfolio.appendChild(duplicateNode);
})

// carrossel de testemunhas
const slides = document.querySelectorAll('.tests');
const indicadores = document.querySelectorAll('.indicador');
const container = document.querySelector('.test-container');

let currentIndex = 0;
let slideInterval;

function atualizarCarrossel() {
    
    const offset = -currentIndex * 100; 
    container.style.transform = `translateX(${offset}%)`;
    
    indicadores.forEach((indicador, i) => {
        if (i === currentIndex) {
            indicador.classList.add('active');
        } else {
            indicador.classList.remove('active');
        }
    });
}

function proximoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    atualizarCarrossel();
}

function anteriorSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    atualizarCarrossel();
}

indicadores.forEach((indicador, index) => {
    indicador.addEventListener('click', () => {
        currentIndex = index;
        atualizarCarrossel();
        resetSlideInterval();
    });
});

function iniciarSlideInterval() {
    slideInterval = setInterval(proximoSlide, 15000); 
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    iniciarSlideInterval();
}

atualizarCarrossel();
iniciarSlideInterval();

function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop, 
            behavior: 'smooth' // Animação suave
        });
    }
}