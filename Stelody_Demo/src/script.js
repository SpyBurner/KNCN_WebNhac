// CONTROL BUTTONS
console.log('Client-side code running');

var currentVideoId = 'tYiRX7dNMPw';

var theme, songIdInTheme, song;

// function updateUI() {
//     const chosenTheme = theme;
//     const chosenSong = song;
//     if (chosenTheme) {
//         var queueDiv = document.getElementById('songQueue');
//         queueDiv.innerHTML = '';

//         fetch('/api/songs?' + new URLSearchParams({ theme: chosenTheme }))
//             .then(response => response.json())
//             .then(res => {
//                 console.log(res);
                
//                 let counter = 0;

//                 res.forEach(element => {
//                     let queueRow = document.createElement('button');
//                     queueDiv.appendChild(queueRow);

//                     queueRow.innerHTML = element.name;
//                     queueRow.style.fontSize = '12pt';

//                     queueRow.addEventListener('click', function (e) {
//                         currentVideoId = element.song_code;
//                         songIdInTheme = counter;
//                         loadVideo();
//                         updateUI();
//                     });
//                     counter += 1;
//                 });
//             });
//     }
// };

// //Play button functions
var player;
// const playButton = document.getElementById('play-button');
// playButton.addEventListener('click', function (_) {
//     console.log('Toggle play/pause!');
//     if (player.getPlayerState() == 2 || player.getPlayerState() <= 0) {
//         playButton.innerHTML = "▧";
//         player.playVideo();
//     }
//     else
//         if (player.getPlayerState() == 1) {
//             playButton.innerHTML = "▶";
//             player.pauseVideo();
//         }
// });
// playButton["forceUpdateState"] = function (_) {
//     if (player.getPlayerState() == 1) {
//         playButton.innerHTML = "▶";
//     }
//     else
//         playButton.innerHTML = "▧";
// }


// const nextButton = document.getElementById('right-button');
// nextButton.addEventListener('click', function (e) {
//     console.log('NEXT! from ' + songIdInTheme);

//     loadVideoByIdInTheme(songIdInTheme + 1);
//     playButton.forceUpdateState();
// });


// const previousButton = document.getElementById('left-button');
// previousButton.addEventListener('click', function (e) {
//     console.log('PREVIOUS! from ' + songIdInTheme);
//     loadVideoByIdInTheme(songIdInTheme - 1);
//     playButton.forceUpdateState();
// });

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'tYiRX7dNMPw',
        playerVars: {
            'autoplay': 0,
            'mute': 0,
            'controls': 0, //HIDE CONTROLS
            'rel': 0,
            'playsinline': 1, //HUH?
            'disablekb': 1, //DISABLE KEYBOARD CONTROLS
            'fs': 0,  //FULLSCREEN BUTTON
        },
        events: {
            'onReady': loadVideo,
            // 'onStateChange': onPlayerStateChange
        }
    });
}

//autoplay=1&mute=0&controls=0&start=17&origin=https%3A%2F%2Flifeat.io&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1

// 4. The API will call this function when the video player is ready.
function loadVideo() {
    player.loadVideoById({ 'videoId': currentVideoId });
    player.playVideo();
    // playButton.forceUpdateState();
}

function loadVideoByIdInTheme(idInTheme){
    fetch('/api/songs?' + new URLSearchParams({ theme: theme }))
    .then(response => response.json())
    .then(res => {

        console.log("Before: "+idInTheme);

        let resultLength = Object.keys(res).length;
        if (idInTheme < 0) idInTheme += resultLength;
        idInTheme %= resultLength;

        console.log("After: "+idInTheme);

        let counter = 0;

        res.forEach(element => {
            if (counter == idInTheme){
                currentVideoId = element.song_code;
                songIdInTheme = counter;
                loadVideo();
                return;
            }
            counter += 1;
        });
    });
}


// const themeButton = document.getElementById('theme-change-button');
// // const themeListDiv = document.getElementById('theme-change-div');
// themeButton.addEventListener('click', function (e) {
//     console.log("Theme change!");

//     var themeDiv = document.getElementById('theme-change-div');
//     if (themeDiv) document.removeChild(themeDiv);

//     themeDiv = document.createElement('div');
//     document.getElementById('controls').appendChild(themeDiv);

//     themeDiv.className = 'theme-change-div'
//     themeDiv.style.left = themeButton.style.left;
//     themeDiv.style.width = themeButton.style.width;

//     //LOAD THEME DATA
//     let themes = [];

//     fetch('/api/themes')
//         .then(response => response.json())
//         .then(res => {
//             console.log(res);

//             res.forEach(element => {
//                 let themeRow = document.createElement('button');
//                 themeDiv.appendChild(themeRow);

//                 themeRow.innerHTML = element.name;
//                 themeRow.style.fontSize = '12pt';
//                 themeRow.addEventListener('click', function (e) {
//                     theme = element.id;
//                     updateUI();
//                 });
//             });
//         });
// });