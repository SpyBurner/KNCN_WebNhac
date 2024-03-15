const videosArray = Object.entries(window.videoData);
console.log(videosArray);
let currentVideoIndex = 0;
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: videosArray[currentVideoIndex][1]['id'],
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  updateVideoTitle(videosArray[currentVideoIndex][1]['title']);
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    // Play the next video when the current video ends
    playVideo((currentVideoIndex + 1) % videosArray.length);
  }
}
function stopVideo() {
  player.stopVideo();
}

function updateVideoTitle(title) {
  document.getElementById('videoTitle').textContent = title;
}

function playVideo(index) {
  console.log(videosArray[index][0]);
  if (index < 0 || index >= videosArray.length) {
    console.error('Invalid video index');
    return;
  }
  if (player) { // Check if player is defined before using it
    console.log('Playing video at index:', videosArray[index]);
    player.loadVideoById({ 'videoId': videosArray[index][1]['id'],
                           'startSeconds': videosArray[index][1]['startTime'],                      
    });
  }
  currentVideoIndex = index;
  updateVideoTitle(videosArray[currentVideoIndex][1]['title']);
}

document.getElementById('next').addEventListener('click', () => {
  playVideo((currentVideoIndex + 1) % videosArray.length);
});

// Initialize a variable to track whether the audio is currently playing
var isPlaying = true;

// Function to toggle audio play/pause
function toggleAudio() {
    if (isPlaying) {
        player.pauseVideo(); // Pause the video
    } else {
        player.playVideo(); // Play the video
    }
    isPlaying = !isPlaying; // Toggle the state
}

// Event listener for the button click
document.getElementById('play').addEventListener('click', toggleAudio);
