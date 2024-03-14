// Load the JSON data (replace with your actual file path)
fetch('listVideo.json')
  .then(response => response.json())
  .then(data => {
    // Assuming your JSON data has video IDs and titles as properties
    const videosArray = Object.entries(data);
    let currentVideoIndex = 0; // Track current video index
    // Initialize the player
    let player;
    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: 100,
        width: 100,
        videoId: videosArray[currentVideoIndex][0],
        playerVars: {
          playsinline: 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    }
    // Function to update the displayed video title
    function updateVideoTitle(title) {
      document.getElementById('videoTitle').textContent = title;
    }
    // Function to play the video at a specific index
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

    // Event listener for the "Next" button
    document.getElementById('next').addEventListener('click', () => {
      playVideo(currentVideoIndex + 1);
    });

    

    // The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      console.log('Player is ready');
      event.target.playVideo();
    }

    // Handle video state changes (e.g., video ended)
    function onPlayerStateChange(event) {
      console.log('Player state changed:', event.data);
      if (event.data === YT.PlayerState.ENDED) {
        // Play the next video when the current video ends
        playVideo((currentVideoIndex + 1) % videosArray.length);
      }
    }
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });
