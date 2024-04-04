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

export const Taskbar = ({ onToggleTodo}) => {
  const [isFavourite, setFavour] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  const [isMuted, setMute] = useState(false);
  const [isTimerActive, setActiveTimer] = useState(false);
  const [isTaskActive, setTaskActive] = useState(false);

  const handleFavourite = () => {
    setFavour(!isFavourite);
  };

  const handlePlay = () => {
    setPlay(!isPlaying);
  }

  const handleMute = () => {
    setMute(!isMuted);
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
      <button className="theme">Rain in the forest</button>
      <button className="previous">
        <img src={previous}></img>
      </button>
      <button className="play-stop" onClick={handlePlay}>
        {isPlaying?<img src={pause} alt = "Pause"/>:<img src={play} alt = "Play"/>}
      </button>
      <button className="next">
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


