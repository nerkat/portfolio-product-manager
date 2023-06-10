// on dom load
document.addEventListener('DOMContentLoaded', () => {
    var pathEls = document.querySelectorAll('.back-anim path');
    for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute('stroke-dashoffset', offset);
        anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(5000, 8000),
            delay: anime.random(0, 3000),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: true
        });
    }

});