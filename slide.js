document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000, //Seconds
            disableOnInteraction: false,
        },
        speed: 800
    });
});

// Blur On Scroll

window.addEventListener('scroll', function() {
    let num = (window.scrollY/window.innerHeight)*4;

    document.getElementById('slide').style.filter = 'blur(' + num + 'px)'
  })