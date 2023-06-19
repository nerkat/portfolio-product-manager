// style
import '/src/style/index.scss';

// anime
import anime from 'animejs/lib/anime.es.js';
window.anime = anime;

// splide
import Splide from '@splidejs/splide';
new Splide('.splide').mount();
import '@splidejs/splide/css/core';


// partials
import './partials/preloader.js';
import './partials/back-anim.js';
import './partials/video-play.js';
import './partials/slider.js';
import './partials/scroll-interceptor-anim.js';

// web comps
import '../comps/rocket/rocket.js';
import '../comps/astro/astro.js';
import '../comps/rainbow/rainbow.js';
import '../comps/monalisa/monalisa.js';
import '../comps/hand/hand.js';
import '../comps/hamster/hamster.js';
import '../comps/bicycle/bicycle.js';
import '../comps/typewriter/typewriter.js';
import '../comps/orbit/orbit.js';