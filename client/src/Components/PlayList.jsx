import './CSS/PlayList.css'; // Import CSS file
import PropTypes from 'prop-types';
import PlayListItem from './PlayListItem';

export const PlayList = ({ className, togglePlayList, videoData, videoName, setVideoId, themeName}) => {
    PlayList.propTypes = {
        className: PropTypes.string,
        togglePlayList: PropTypes.func,
        videoData: PropTypes.array,
        videoName: PropTypes.string,
        setVideoId: PropTypes.func,
        themeName: PropTypes.string,
    }

    const generateItem = () => {
        if (videoData.length > 0){
            return videoData.map((video, index) => (
                <PlayListItem  key={video.id} videoName={videoName} 
                    thisVideoName={video.name} thisVideoId={index} setVideoId={setVideoId}>
                </PlayListItem>
            ));
        }
        return <div></div>
    }

  return (
    <div key={videoData} className={className}>
        <div className='playlist-header' 
        style={{
            display: (videoName == "") ? 'none' : 'flex'
        }}
        >
            {themeName}
        </div>
        <div className='playlist-body'
        style={{
            maxHeight: (videoName == "") ? '45vh' : '40vh'
        }}
        >
            {generateItem()}
        </div>
    </div>
  );
};

export default PlayList;
