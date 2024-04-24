import './CSS/PlayList.css'; // Import CSS file
import PropTypes from 'prop-types';
import PlayListItem from './PlayListItem';

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
                <PlayListItem key={video.id} videoName={videoName} 
                thisVideoName={video.name} thisVideoId={video.id} setVideoId={setVideoId}>
                    
                </PlayListItem>
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
