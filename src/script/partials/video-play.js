// Convert HTMLCollection to array for easier processing
let videos = Array.from(document.getElementsByTagName("video"));

// Iterate through each video element
videos.forEach(video => {
    // Get parent of the video element
    let parent = video.parentElement;

    // Get play and screen buttons inside the parent of the video
    let playButton = parent.querySelector(".play");
    let screenButton = parent.querySelector(".screen");

    // Function to toggle the visibility of play and screen buttons
    const toggleButtons = (play = true) => {
        playButton.style.display = play ? "none" : "block";
        screenButton.style.display = play ? "block" : "none";
    }

    // Function to request fullscreen for a given HTML element
    // This function handles browser compatibility
    const requestFullscreen = element => {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {  // Firefox
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {  // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {  // IE/Edge
            element.msRequestFullscreen();
        }
    }

    // Add click event listener to screen button
    // On click, request fullscreen for the video
    screenButton.addEventListener("click", () => {
        requestFullscreen(video);
    });

    // Add click event listener to play button
    // On click, play the video and toggle visibility of buttons
    playButton.addEventListener("click", () => {
        video.play();
        toggleButtons(true);
    });

    // Add click event listener to video
    // On click, check if video is paused or playing
    // If it's paused, play it; if it's playing, pause it
    // Also toggle visibility of buttons accordingly
    video.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            toggleButtons(true);
        } else {
            video.pause();
            toggleButtons(false);
        }
    });
});
