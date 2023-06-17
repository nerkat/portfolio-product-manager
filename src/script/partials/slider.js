import Splide from '@splidejs/splide';

document.querySelectorAll('.splide').forEach(carousel => new Splide(carousel, {
    "type": "loop",
    "autoplay": true,
    "speed": "1000",
    "arrows": false,
    "pagination": false,
    "interval": "5500",
    "speed": "2500",
    "pauseOnHover": false,
    "pauseOnFocus": false,
    "easing": "ease-in-out",
    "perPage": 2,
    breakpoints: {
        900: {
            perPage: 1,
        },
    }
}).mount());