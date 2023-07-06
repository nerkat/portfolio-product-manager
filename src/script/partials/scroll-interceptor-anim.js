// Set up options for Intersection Observer
let options = {
    root: null, // Setting root to null implies viewport
    rootMargin: '0px', // Offset margins for the root. Can be % or px.
    threshold: 0.65 // Percentage of the target element which needs to be visible for the callback to be invoked
};

// Instantiate the Intersection Observer
let observer = new IntersectionObserver((entries) => {
    // Check if window width is 768px or less (typically mobile devices)
    if (window.innerWidth <= 768) {
        entries.forEach(entry => {
            // If the element is visible (i.e., intersecting), add the 'hover' class after a delay of 200ms
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('hover');
                }, 200);
            } else {
                // If the element is not visible, remove the 'hover' class
                entry.target.classList.remove('hover');
            }
        });
    }
}, options);

// Select all elements with the 'card' class
let targets = document.querySelectorAll('.card');

// Start observing each 'card' element
targets.forEach(target => {
    observer.observe(target);
});