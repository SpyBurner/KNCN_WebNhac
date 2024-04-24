import './CSS/PlayList.css'; // Import CSS file
import PropTypes from 'prop-types';

export const PlayList = ({togglePlayList, videoData, videoName, setVideoId, themeName}) => {
    PlayList.propTypes = {
        togglePlayList: PropTypes.func,
        videoData: PropTypes.array,
        videoName: PropTypes.string,
        setVideoId: PropTypes.func,
        themeName: PropTypes.string
    }


    const generateItem = () => {
        if (videoData.length > 0){
            console.log(videoData);
            return videoData.map(video => (
                <div key={video.id} className='playlist-item'>
                    <span className='playlist-scroll  masked-overflow'>
                        {video.name}
                    </span>
                </div>
            ));
        }
        return <div></div>
    }

  return (
    <div key={videoData} className='playlist'>
        <div className='playlist-header'>
            {themeName}
        </div>
        <div className='playlist-body'>
            {generateItem()}
        </div>
    </div>
  );
};

export default PlayList;
