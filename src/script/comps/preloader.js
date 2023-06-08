// on page finish load - hide preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
})