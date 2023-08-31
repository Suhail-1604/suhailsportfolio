//Activate Menu Button //
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// lets remove menu-bar on scroll //

window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// Scroll Reveal //

ScrollReveal({
    reset : true,
    distance : '100px',
    duration : 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-bio h1 ,.about-resume', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { orgin: 'right' });
ScrollReveal().reveal('.home-bio, heading', { orgin: 'top' });
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form', { orgin: 'bottom' });

// typing animation //
const animText = new Typed ('.animated-text',{
    strings:['Web Designer','Coder','Poster maker','Freelancer'],
    backSpeed: 100,
    typedSpeed: 100,
    backDelay: 600,
    loop: true
});