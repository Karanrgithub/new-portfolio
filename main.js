// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





// scroll section active link


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offeset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offeset && top < offeset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
// scroll navbar


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .skills, .portfolio-box, .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.html, .css, .javascript, .java', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'top' });

// typed js



// var typed = new Typed('#elements', {
//     strings: ['Web Developer.', 'Web Designer.'],
//     typeSpeed: 50,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });


var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Java Developer.'],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
   loop:true
  });
