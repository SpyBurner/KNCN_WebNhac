import './CSS/PlayList.css'; // Import CSS file
import PropTypes from 'prop-types';

export const PlayListItem = ({videoName, thisVideoName, thisVideoId, setVideoId}) => {
    PlayListItem.propTypes = {
        videoName: PropTypes.string,
        thisVideoName: PropTypes.string,
        thisVideoId: PropTypes.number,
        setVideoId: PropTypes.func,
    }


    const handleClick = () => {
        setVideoId(thisVideoId)
    }

  return (
    <div key={thisVideoId} className='playlist-item' onClick={handleClick}>
        <span className='playlist-scroll  masked-overflow'
        style={{color: (thisVideoName === videoName)? '#F6F494' : 'white'}}
        >
            {thisVideoName}
        </span>
    </div>
  );
};

export default PlayListItem;
