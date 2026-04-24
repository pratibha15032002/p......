
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});
