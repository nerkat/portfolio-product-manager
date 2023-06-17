// Listen for the 'load' event on the window
// This event is fired when the entire page has fully loaded
window.addEventListener('load', () => {
    // Find the element with the 'preloader' class and hide it by setting its display property to 'none'
    document.querySelector('.preloader').style.display = 'none';
    
    // Find the element with the 'container' class and show it by setting its display property to 'flex'
    document.querySelector('.container').style.display = 'flex';
    
    // Find the element with the 'back-anim' class and show it by setting its display property to 'flex'
    document.querySelector('.back-anim').style.display = 'flex';
})
