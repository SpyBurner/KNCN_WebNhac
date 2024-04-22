import React, { useEffect, useState, useRef } from 'react';
import { Taskbar } from "./Components/Taskbar";
import './App.css';
import { Fullscreen_button } from "./Components/Fullscreen_button";
import { Favourite_playlist } from "./Components/Favourite_playlist";
import { Todo } from "./Components/Todo";
import YouTube from 'react-youtube';

const App = () => {
  const [openTodolist, setOpenTodoList] = useState(false);
  const [totalTask, setTotalTask] = useState(0);
  const playerRef = useRef(null);
  // const [isPlayerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    setTotalTask(parseInt(localStorage.getItem("totalCount")));
  }, []);

  const toggleTodoVisibility = () => {
    setOpenTodoList(prevState => !prevState);
  };

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
    }
  };
  // Play the video by ID
  const playVideoById = (id, startTime, endTime) => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
      var startSeconds = startTime || 0; // Default start time to 0 if not provided
      var endSeconds = endTime || undefined; // Default end time to undefined if not provided
      console.log(typeof(startTime), " ",startTime);
      playerRef.current.internalPlayer.loadVideoById({
        'videoId': id,
        'startSeconds': startTime,
        'endSeconds': endTime
      });
    }
  };
  
  
  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
    }
  };


  const handlePlayerMute = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.mute();
    }
  }

  const handlePlayerUnMute = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.unMute();
    }
  }

  const opts = {
    height: '100%',
    width: '100%',
    videoId: 'cBsUr4UMcD0',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      rel: 0,
      modestbranding: 1, // Hide YouTube logo in the control bar
      showinfo: 0, // Hide video title and uploader before the video starts playing
    }
  };
  const index = 0;
  const id = 'TxTprtLZurY';
  return (
      <div className="app">
        <YouTube className='youtube' videoId={id} opts={opts} ref={playerRef}/>
          <div className="header">
            <Favourite_playlist />
            <Fullscreen_button />
          </div>
          <div className="todo-container" style={{ display: openTodolist ? 'block' : 'none' }}>
            <Todo />
          </div>
          <Taskbar onToggleTodo={toggleTodoVisibility} onPlay={playVideo} onPause={pauseVideo} setPlayerMute={handlePlayerMute} setPlayerUnMute={handlePlayerUnMute} playVideoById={playVideoById} index={index}/>
      </div>
  );
}

export default App;
