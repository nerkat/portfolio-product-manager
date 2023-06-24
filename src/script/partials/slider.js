import Splide from '@splidejs/splide';

Splide.defaults = {
    "type": "loop",
    "autoplay": true,
    "arrows": false,
    "pagination": false,
    "interval": "5500",
    "drag": "free",
    "speed": "2500",
    "pauseOnHover": false,
    "pauseOnFocus": false,
    "easing": "ease-in-out",
    "perPage": 2,
    "perMove": 1,
    "breakpoints": {
        900: {
            "perPage": 1,
            "perMove": 1
        },
    }
}

document.querySelectorAll('.splide').forEach(carousel => new Splide(carousel).mount());