const video = document.getElementById("myVideo");
const togglePlay = document.querySelector('#togglePlay')
const muteToggleBtn = document.querySelector('#muteToggle');
const centerPause = document.querySelector('#centerPause');
const container = document.querySelector('.container_media')
let timerDuration = document.querySelectorAll('#timer span')[1];
let timerCount = document.querySelectorAll('#timer span')[0];
let isPaused = false;
let controlMedia = document.querySelector('.controller_media');
function toggleVideo() {
    isPaused = !isPaused;
    if (isPaused) {
        video.play();
        togglePlay.children[0].src = './assets/pause.svg'
        centerPause.style.display = 'none'
    } else {
        video.pause();
        togglePlay.children[0].src = './assets/play.svg'
        centerPause.style.display = 'block'
        container.classList.add('video_paused')
    }
}


function rewindVideo() {
    video.currentTime -= 15;
}


function fastForwardVideo() {
    video.currentTime += 15;
}

function fullScreen() {

    video.requestFullscreen();

}
function muteToggle() {
    video.muted = !video.muted;
    if (video.muted) {
        muteToggleBtn.children[0].src = './assets/mute.svg'
    } else {
        muteToggleBtn.children[0].src = './assets/volume.svg'
    };
}
const progressBar = document.querySelector(".progressBar");
let scrollBar = progressBar.querySelector('div');
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}


video.addEventListener("timeupdate", () => {
    scrollBar.style.width = (progressBar.clientWidth * video.currentTime / video.duration) + 'px';
    let minute = Math.floor(video.duration / 60)
    let second = Math.floor(video.duration - (minute * 60));
    timerDuration.innerText = `/ ${minute}:${second}`
    timerCount.innerText = formatTime(video.currentTime)
});

progressBar.addEventListener('click', function (event) {
    const percentage = (event.clientX - this.offsetLeft) / this.clientWidth;
    video.currentTime = video.duration * percentage;
    timerCount.innerText = formatTime(video.currentTime)

})

video.addEventListener('click', function () {
    toggleVideo()
})

function handleKeyDown(event) {
    switch (event.key) {
        case ' ':
            toggleVideo();
            break;
        case 'ArrowLeft':
            rewindVideo()
            break;
        case 'ArrowRight':
            fastForwardVideo()
            break;
        default:
            break;
    }
}

document.addEventListener('keydown', handleKeyDown);

video.addEventListener('mousemove', function () {
    controlMedia.style.opacity = 1
})

let timeoutId;

function onMouseMove() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        controlMedia.style.opacity = 0
    }, 5000);
}

document.addEventListener('mousemove', onMouseMove);

if (isPaused) {
    onMouseMove()
};
