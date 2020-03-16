// ScrollReveal
window.sr = ScrollReveal();

sr.reveal('.banner-image', {
  duration: 2000,
  origin: 'right',
  distance: '50px'
});

sr.reveal('.site-banner .title-name', {
  duration: 2000,
  origin: 'left',
  distance: '75px'
});

sr.reveal('.site-banner .title-description', {
  duration: 2000,
  delay: 1500
});

sr.reveal('.site-buttons', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
  delay: 2000
});

sr.reveal('.about-area .about-image', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.about-area .title-content', {
  interval: 500
});

sr.reveal('.about-area .text-1', {
  duration: 2000,
  delay: 1500
});

sr.reveal('.about-area .text-2', {
  duration: 2000,
  delay: 2000
});

sr.reveal('.about-area .buttons-cv', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px',
  delay: 1500
});

sr.reveal('.brand-area .single-brand', {
  interval: 200
});

sr.reveal('.skills-area .skills', {
  origin: 'bottom',
  distance: '300px',
  interval: 200
});

sr.reveal('.project-area .my-project', {
  origin: 'bottom',
  distance: '300px',
  interval: 500
});

sr.reveal('.footer-area .social-media', {
  origin: 'bottom',
  distance: '100px',
  interval: 200
});

// About HTML

sr.reveal('.about-me h1', {
  duration: 2000,
  origin: 'right',
  distance: '75px'
});

sr.reveal('.about-me .para', {
  duration: 2000,
  delay: 1000
});

sr.reveal('.about-me .skills-bar', {
  origin: 'bottom',
  distance: '100px',
  interval: 200,
  delay: 2000
});

sr.reveal('.resume .experience', {
  duration: 2000,
  origin: 'left',
  distance: '75px'
});

sr.reveal('.resume .education', {
  duration: 2000,
  origin: 'right',
  distance: '75px'
});

sr.reveal('.services-area .services-box', {
  duration: 2000,
  origin: 'bottom',
  distance: '75px',
  interval: 200
});

// Contact HTML
sr.reveal('.contact-me .title-1', {
  duration: 2000,
  origin: 'top',
  distance: '50px'
});

sr.reveal('.contact-me .form-group', {
  origin: 'bottom',
  distance: '50px',
  interval: 200,
  delay: 500
});

sr.reveal('.contact-me h3', {
  duration: 3000
});

sr.reveal('.contact-me li', {
  duration: 1000,
  origin: 'right',
  distance: '70px',
  interval: 500,
  delay: 300
});

// Preloader overflow Hidden
// $(window).on('load', function() {
//   $('body').css({
//     overflow: 'hidden'
//   });
//   setTimeout(function() {
//     $('.preloader-area').fadeOut('slow', function() {
//       $('body').css({
//         overflow: 'auto'
//       });
//     });
//   }, 1000);
// });

// Preloader
$(window).on('load', function() {
  $('.preloader-area')
    .delay(500)
    .fadeOut(500);
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 150
          },
          1000
        );
        return false;
      }
    }
  });
});

// Navbar active
$(document).on('click', 'ul li', function() {
  $(this)
    .addClass('active')
    .siblings()
    .removeClass('active');
});
