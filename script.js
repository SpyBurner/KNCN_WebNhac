document.addEventListener('keydown', function (event) {
    if (event.key === 'F11') {
        toggleFullScreen();
    }
});

document.addEventListener('fullscreenchange', function () {
    updateUI();
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(function () {
            playAudio();
            updateUI();
        });
    } else {
        document.exitFullscreen().then(function () {
            pauseAudio();
            updateUI();
        });
    }
}

function playAudio() {
    if (document.fullscreenElement) {
        var audio = document.getElementById('audio-player');
        audio.play();
    }
}

function pauseAudio() {
    if (!document.fullscreenElement) {
        var audio = document.getElementById('audio-player');
        audio.pause();
    }
}


function updateUI() {
    setTimeout(function() {
        var fullscreenText = document.getElementById('fullscreen-text');
        var audioContainer = document.querySelector('.audio-container');

        if (document.fullscreenElement) {
            fullscreenText.style.display = 'none';
            audioContainer.style.display = 'block';
            playAudio();
        } else {
            fullscreenText.style.display = 'block';
            audioContainer.style.display = 'none';
            pauseAudio();
        }
    }, 100); // delay of 100 milliseconds
}
