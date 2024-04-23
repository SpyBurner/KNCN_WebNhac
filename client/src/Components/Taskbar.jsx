import './CSS/Taskbar.css' 
import play from '../assets/icon-park-solid_play.svg'
import pause from '../assets/pause.svg'
import favourite from '../assets/favourite.svg'
import add_to_favourite from '../assets/added-to-favorites.svg'
import previous from '../assets/prev.svg'
import next from '../assets/next.svg'
import unmute from '../assets/volumn.svg'
import mute from '../assets/mute.svg'
import todo_list from '../assets/todo-list.svg'
import active_todo from '../assets/active-todo.svg'
import timer from '../assets/timer.svg'
import active_timer from '../assets/active-timer.svg'
import options from '../assets/options.svg'
import { useState } from 'react'

const listVideoID = ['TxTprtLZurY','6-wEAeNcA_A','YVJC6bSvd-o', 'cBsUr4UMcD0']
export const Taskbar = ({ onToggleTodo, onPlay, onPause, setPlayerMute, setPlayerUnMute, playVideoById, setPlay, 
    isPlaying, videoData, setVideoId, videoId,
    toggleThemeList, videoName
  }) => {
  const [isFavourite, setFavour] = useState(false);
  // const [isPlaying, setPlay] = useState(false);
  const [isMuted, setMute] = useState(false);
  const [isTimerActive, setActiveTimer] = useState(false);
  const [isTaskActive, setTaskActive] = useState(false);
  var video = document.querySelector('iframe[src*="youtube.com"]');

  const handleFavourite = () => {
    setFavour(!isFavourite);
  };

  const handlePlay = () => {
    if (isPlaying) {
      onPause(); // Pause the video
    } else {
      onPlay(); // Play the video
    }
    // setPlay(prevState => !prevState); // Toggle play state
  }

  const handleNext = () => {
    var len = videoData.length;
    setVideoId((videoId + 1) % len);
    setPlay(true);
  }
  const handlePrevious = () => {
    var len = videoData.length;
    setVideoId((videoId - 1 + len) % len)
    setPlay(true);
  }
  const handleMute = () => {
    if (isMuted){
      setMute(false);
      setPlayerUnMute();
    }
    else {
      setMute(true);
      setPlayerMute();
    }
  }

  const handleTimer = () => {
    setActiveTimer(!isTimerActive);
  }

  const handleTask = () => {
    setTaskActive(!isTaskActive);
  }

  return (
    <div className="taskbar">
      <button className="favourite" display="" onClick={handleFavourite}>
        {isFavourite? <img src={add_to_favourite}/> : <img src={favourite}/> } 
      </button>

      <button className="theme" onClick={() => {toggleThemeList()}}> <p>{videoName}</p> </button>

      <button className="previous" onClick={handlePrevious}>
        <img src={previous}></img>
      </button>
      <button className="play-stop" onClick={handlePlay}>
        {isPlaying?<img src={pause} alt = "Pause"/>:<img src={play} alt = "Play"/>}
      </button>
      <button className="next" onClick={handleNext}>
        <img src={next}></img>
      </button>
      <button className="volumn" onClick={handleMute}>
        {isMuted?<img src={mute}/>:<img src={unmute}/>}
        
      </button>
      <button className="timer" onClick={handleTimer}>
        {isTimerActive?<img src={active_timer}/>:<img src={timer}/>}
      </button>
      <button className="todo-list-icon" onClick={() => {onToggleTodo(); handleTask();}}>
        {isTaskActive?<img src={active_todo}/>:<img src={todo_list}/>}
      </button>
      <button className="options">
        <img src={options}></img>
      </button>
    </div>
  )
}

