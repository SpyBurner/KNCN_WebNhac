import fullscreen from '../assets/full-screen.svg'
import exit_fullscreen from '../assets/exit-full-screen.svg'
import './CSS/Fullscreen_button.css'
import { useState } from 'react'

export const Fullscreen_button = () => {

  const [isFullScreen, setFullScreen] = useState(false);
  const handleScreen = () => {
    if (isFullScreen) {
      setFullScreen(false);
      document.exitFullscreen();
    }
    else {
      setFullScreen(true);
      document.body.requestFullscreen();
    }
  }

  return (
    <div className='fullscreen-button' onClick={handleScreen}>
      {isFullScreen? <img src={exit_fullscreen}/> :<img src={fullscreen}/>}
    </div>
  )
}
