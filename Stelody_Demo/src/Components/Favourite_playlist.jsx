import favourite_playlist from '../assets/favourite-playlist.svg'
import opened_favourite_playlist from '../assets/opened-favourite-playlist.svg'
import './CSS/Favourite_playlist.css'
import { useState } from 'react'

export const Favourite_playlist = () => {
  const [isOpened, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpened);
  }
  return (
    <div className='favourite-playlist' onClick={handleOpen}>
        {isOpened? <img src={opened_favourite_playlist}/>:<img src={favourite_playlist}/>}
    </div>
  )
}
