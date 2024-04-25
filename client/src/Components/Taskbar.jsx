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
import { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import {ThemeList} from './ThemeList'

export const Taskbar = ({ onToggleTodo, onPlay, onPause, setPlayerMute, setPlayerUnMute, playVideoById, setPlay, 
    isPlaying, videoData, setVideoId, videoId, openTodoList,
    toggleThemeList, openThemeList, openTimer,
    themeName, videoName, onToggleTimer,
    handleNext, handlePrevious,
    setOpenFavPlayList, favPlayList, setFavPlayList//favorite, onToggleTimer
  }) => {

  Taskbar.propTypes = {
      favPlayList: PropTypes.array,
      videoData: PropTypes.array,
  }

  const [isFavourite, setFavour] = useState(false);

  const [isMuted, setMute] = useState(false);
  const [isTimerActive, setActiveTimer] = useState(false);
  const [isTaskActive, setTaskActive] = useState(false);

  useEffect(()=>{
    console.log("Is favorite? "+isFavourite)
    console.log("Searching in favourite...");
    if (favPlayList.length > 0 && videoData.length > 0){
      const item = videoData[videoId]; 

      var index;
      for (index = 0; index < favPlayList.length; ++index){
        const video = favPlayList[index];
        if (video.id == item.id) break;
      }
      
      if (index < favPlayList.length){
        console.log("Favorite found!");
        setFavour(true);
        return;
      }
    }
    setFavour(false);
  }, [videoId, favPlayList])

  const handleFavourite = () => {
    //CHANGING FAVPLAYLIST BEFORE SETTING FAVORITE VARIABLE
    try{     
      //ARRAY ASSIGNING IN JS CREATES SHALLOW COPIES
      var temp = JSON.parse(JSON.stringify(favPlayList));
      var item = videoData[videoId]; 
      
      if (!isFavourite) {
        temp.push(item);
      }
      else{
        // console.log(item);
        var index;
        for (index = 0; index < temp.length; ++index){
          const video = temp[index];
          if (video.id == item.id) break;
        }

        if (index < temp.length) {
          temp.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
      
      setFavPlayList(temp);
    }
    catch (err){
      throw new Error(err);
    }

    setFavour(prevState => !prevState);
  };

  const handlePlay = () => {
    if (isPlaying) {
      onPause(); // Pause the video
    } else {
      onPlay(); // Play the video
    }
    // setPlay(prevState => !prevState); // Toggle play state
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

  return (
    <div className="taskbar">
      <button className="favourite" display="" onClick={handleFavourite}>
        {isFavourite? <img src={add_to_favourite}/> : <img src={favourite}/> } 
      </button>

      <button key={videoName} className="theme" onClick={() => {toggleThemeList(); setOpenFavPlayList(false)}}>
        <p className='textScroll'>{ ' | ' + videoName + ' | ' + videoName + ' | ' + videoName + ' | ' + videoName +  ' | '}</p> 
      </button>

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
      <button className="timer" onClick={() => {onToggleTimer()}}>
        {openTimer?<img src={active_timer}/>:<img src={timer}/>}
      </button>
      <button className="todo-list-icon" onClick={() => {onToggleTodo(); }}>
        {openTodoList?<img src={active_todo}/>:<img src={todo_list}/>}
      </button>
      <button className="options">
        <img src={options}></img>
      </button>
    </div>
  )
}

