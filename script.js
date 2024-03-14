var data = {
  "scQu6EPsuxw": "Driftveil City: 8-Bit Remix",
  "6-wEAeNcA_A": "Lindsey Stirling - Senbonzakura",
  "TxTprtLZurY": "Bad Apple- (Orchestral Arrangement) Instrumental",
  "cBsUr4UMcD0": "Point the star | Lofi",
}
const videosArray = Object.entries(data);
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
    videoId: videosArray[currentVideoIndex][0],
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
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    // done = true;
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
    console.log('Playing video at index:', videosArray[index][0]);
    player.loadVideoById({ 'videoId': videosArray[index][0] });
  }
  currentVideoIndex = index;
  updateVideoTitle(videosArray[currentVideoIndex][1]);
}

document.getElementById('next').addEventListener('click', () => {
  playVideo((currentVideoIndex + 1) % videosArray.length);
});

// Initialize a variable to track whether the audio is currently playing
var isPlaying = false;

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
