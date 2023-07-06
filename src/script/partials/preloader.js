// Minimasonry
import MiniMasonry from "minimasonry";

// Listen for the 'load' event on the window
// This event is fired when the entire page has fully loaded
window.addEventListener('load', () => {

    // init masonry
    var masonry = new MiniMasonry({
        container: '.masonry-container',
        baseWidth: 300,
        gutter: 35,
        ultimateGutter: 35,
        wedge : true,
        minify: false
    });

    // trigger initial layout
    setTimeout(() => {
        masonry.layout();
        // Find the element with the 'preloader' class and hide it by setting its display property to 'none'
        document.querySelector('.preloader').style.display = 'none';

        // Find the element with the 'masonry-ccontainer' class and show it by setting its display property to 'flex'
        document.querySelector('.masonry-container').style.opacity = '1';

        // Find the element with the 'back-anim' class and show it by setting its display property to 'flex'
        document.querySelector('.back-anim').style.display = 'flex';
    }, 1000);
})
