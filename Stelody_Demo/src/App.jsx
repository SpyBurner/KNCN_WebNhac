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

  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
    }
  };


  // const handlePlayerReady = () => {
  //   setPlayerReady(true);
  // };

  const opts = {
    height: '100%',
    width: '100%',
    videoId: 'tYiRX7dNMPw',
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

  return (
      <div className="app">
        <YouTube className='youtube' videoId='tYiRX7dNMPw' opts={opts} ref={playerRef}/>
          <div className="header">
            <Favourite_playlist />
            <Fullscreen_button />
          </div>
          <div className="todo-container" style={{ display: openTodolist ? 'block' : 'none' }}>
            <Todo />
          </div>
          <Taskbar onToggleTodo={toggleTodoVisibility} onPlay={playVideo} onPause={pauseVideo} />
      </div>
  );
}

export default App;
