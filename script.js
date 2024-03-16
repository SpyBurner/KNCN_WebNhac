// 4: Lofi hiphop - 167: Kpop music - 278: Classical music - 325: Asian Traditional music - 350: 8-bit
var indexOfPlaylist = {
  "Lofi hiphop": 4,
  "Kpop": 167,
  "Classical": 278,
  "Asian Traditional": 325,
  "8-bit": 350,
  "My Playlist": 500
}
// Lofi hiphop - Kpop music - Classical music - Asian Traditional music - 8-bit
const videosArray = Object.entries(window.videoData);
let currentVideoIndex = Math.floor(Math.random() * videosArray.length); // Set random video on start

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
  event.target.playVideo();
  updateVideoTitle(videosArray[currentVideoIndex][1]['title']);
  var playButton = document.getElementById("play");
  playButton.innerHTML = '<i class="fas fa-pause"></i>';
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
                           'endSeconds': videosArray[index][1]['startTime'] + videosArray[index][1]['length']               
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
    var playButton = document.getElementById("play");
    playButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}

// Event listener for the button click
document.getElementById('play').addEventListener('click', toggleAudio);

// Function to play a video from the playlist dropdown
function playVideoFromSelection(selectedValue) {
  let videoIndex;
  if (selectedValue === "Random") {
    videoIndex = Math.floor(Math.random() * videosArray.length); // Random index
  } else {
    selectedValue = String(selectedValue);
    var playlistIndex = indexOfPlaylist[selectedValue];
    console.log(playlistIndex);
    if (playlistIndex !== -1) {
      videoIndex = playlistIndex;
    } else {
      console.error(`Invalid playlist value: ${selectedValue}`);
      return; // Exit function if invalid value selected
    }
  }
  playVideo(videoIndex);
}
const playlistDropdown = document.getElementById('playlist');

playlistDropdown.addEventListener('change', (event) => {
  let selectedValue = event.target.value;
  // console.log(typeof(selectedValue))
  playVideoFromSelection(selectedValue);
});