// Listen for the 'DOMContentLoaded' event
// This event is fired when the initial HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    // Get all SVG path elements with the class 'back-anim'
    let pathEls = document.querySelectorAll('.back-anim path');

    // Loop through each path element
    pathEls.forEach(pathEl => {
        // Set an offset for the 'stroke-dashoffset' animation using Anime.js's 'setDashoffset' method
        let offset = anime.setDashoffset(pathEl);

        // Apply the offset to the 'stroke-dashoffset' attribute of the path element
        pathEl.setAttribute('stroke-dashoffset', offset);

        // Create a new Anime.js animation with the path element as the target
        anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0], // Animate 'stroke-dashoffset' from the offset to 0
            duration: anime.random(5000, 8000), // Random duration between 5 and 8 seconds
            delay: anime.random(0, 3000), // Random delay between 0 and 3 seconds
            loop: true, // Enable looping of the animation
            direction: 'alternate', // Make the animation alternate between forwards and backwards
            easing: 'easeInOutSine', // Use 'easeInOutSine' easing function
            autoplay: true // Autoplay the animation
        });
    });
});
