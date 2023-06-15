
if (window.innerWidth <= 768) {
    let options = {
        root: null, // use the viewport
        rootMargin: '0px', // % or px - offsets added to each side of the intersection root
        threshold: 0.75 // percentage of the target element which is visible
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add a class
                entry.target.classList.add('hover');
            } else {
                // If not visible
                // Remove the class
                entry.target.classList.remove('hover');
            }
        });
    }, options);

    // target all the elements with class 'someClass'
    let targets = document.querySelectorAll('.card');
    targets.forEach(target => {
        observer.observe(target);
    });
}