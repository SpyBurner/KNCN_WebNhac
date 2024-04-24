import favourite_playlist from '../assets/favourite-playlist.svg'
import opened_favourite_playlist from '../assets/opened-favourite-playlist.svg'
import './CSS/Favourite_playlist.css'
import { useState } from 'react'

import PropTypes from 'prop-types'

export const Favourite_playlist = ({toggleFavPlayList, openFavPlayList, setOpenThemeList}) => {
  Favourite_playlist.propTypes={
    toggleFavPlayList: PropTypes.func.isRequired,
    openFavPlayList: PropTypes.bool,
    setOpenThemeList: PropTypes.func
  }

  const handleClick = () => {
    toggleFavPlayList();
    setOpenThemeList(false);
  }

  return (
    <div className='favourite-playlist' onClick={handleClick}>
        {openFavPlayList? <img src={opened_favourite_playlist}/>:<img src={favourite_playlist}/>}
    </div>
  )
}

export default Favourite_playlist;