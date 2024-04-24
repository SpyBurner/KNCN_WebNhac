import React, { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import { Taskbar } from "./Components/Taskbar";
import './App.css';
import { Fullscreen_button } from "./Components/Fullscreen_button";
import { Favourite_playlist } from "./Components/Favourite_playlist";
import { Todo } from "./Components/Todo";
import YouTube from 'react-youtube';
import { fetchThemeData, fetchVideoData, getRandomInt} from './assets/data';
import ThemeList from './Components/ThemeList';

const App = () => {
  const [openTodolist, setOpenTodoList] = useState(false);
  const [totalTask, setTotalTask] = useState(0);
  const playerRef = useRef(null);
  // const [isPlayerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    setTotalTask(parseInt(localStorage.getItem("totalCount")));
  }, []);

  const toggleTodoVisibility = () => {
    setOpenTodoList(prevState => !prevState);
  };

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
      setPlay(true);
    }
  };
  // Play the video by ID
  const playVideoById = (id, startTime, endTime) => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
      // var startSeconds = 0; // Default start time to 0 if not provided
      // var endSeconds = undefined; // Default end time to undefined if not provided
      playerRef.current.internalPlayer.loadVideoById({
        'videoId': id,
        // 'startSeconds': startTime,
        // 'endSeconds': endTime
      });

      if (playerRef.current.internalPlayer.getPlayerState() == 1)
        setPlay(true);
    }
  };
  
  
  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
      setPlay(false);
    }
  };


  const handlePlayerMute = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.mute();
    }
  }

  const handlePlayerUnMute = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.unMute();
    }
  }

  const opts = {
    height: '110%',
    width: '110%',
    videoId: 'cBsUr4UMcD0',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      // mute: 1,
      disablekb: 1,
      fs: 0,
      loop: 1,
      rel: 1,
      modestbranding: 1, // Hide YouTube logo in the control bar
      showinfo: 0, // Hide video title and uploader before the video starts playing
    }
  };

  //#region Async database variables
  const [isPlaying, setPlay] = useState(false);

  const [themeId, setThemeId] = useState(0);
  const [videoId, setVideoId] = useState(0);

  const [themeData, setThemeData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setThemeData(await fetchThemeData())
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (themeData.length > 0) {
      console.log(themeData);
      // let r = getRandomInt(themeData.length);
      const firstTheme = themeData[0];
      if (firstTheme && firstTheme.id){
        setThemeId(() => {
          console.log("First theme id " + firstTheme.id); 
          return firstTheme.id;
        });
        
      }
    }
  }, [themeData]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Themeid changed: " + themeId);
    
      try{
        const theme = themeData.find(x => x.id === themeId);
        var thname = theme.name;
        setThemeName(thname);

      }
      catch (err){
        console.log("thi thoi");
      }

      setVideoData(await fetchVideoData(themeId));
    }

    fetchData();
  }, [themeId]);
  
  //INIT VIDEO CODE
  const [videoCode, setVideoCode] = useState('TxTprtLZurY');

  const [themeName, setThemeName] = useState('N/A');
  const [videoName, setVideoName] = useState('N/A');
  // var videoCode = 'TxTprtLZurY';

  useEffect(() => {
    if (videoData.length > 0) {
      let r = getRandomInt(videoData.length);
      const firstVideo = videoData[r];
      if (firstVideo && firstVideo.song_code) {
        console.log("Song code of the first video:", firstVideo.song_code);
        // setVideoCode(firstVideo.song_code);
        setVideoCode(firstVideo.song_code);
        setVideoId(0);
      }
    }
  }, [videoData]);

  useEffect(() => {
    if (videoData.length > 0){
      try{
        const theme = themeData.find(x => x.id === themeId);
        var thname = theme.name;
        setThemeName(thname);

        const video = videoData[videoId];
        const code = video.song_code;
        const vname = video.name;
        setVideoName(vname);

        console.log("Video id changed: " + videoId);
        playVideoById(code);

      }
      catch (err){
        console.log("thi thoi");
      }
    }
  }, [videoId, videoCode])

  // useEffect(() => {
  //   console.log("Video code changed: " + videoCode);
  //   playVideoById(videoCode);
  // }, [videoCode]);

  //#endregion

  //#region ThemeList
  const [openThemeList, setOpenThemeList] = useState(false);

  const toggleThemeList = () => {
    console.log("ThemeList clicked!");
    setOpenThemeList(prevState => !prevState);
  };
  //#endregion
  
  return (
      <div className="app">
        <YouTube key={videoCode} className='youtube' videoId={videoCode} opts={opts} ref={playerRef}/>
          <div className="header">
            <Favourite_playlist />
            <Fullscreen_button />
          </div>
          <div className="todo-container" style={{ display: openTodolist ? 'block' : 'none' }}>
            <Todo />
          </div>
          <div className="themelist-container" style={{ display: openThemeList ? 'block' : 'none' }}>
            <ThemeList/>
          </div>
          <Taskbar onToggleTodo={toggleTodoVisibility} onPlay={playVideo} onPause={pauseVideo} setPlayerMute={handlePlayerMute} setPlayerUnMute={handlePlayerUnMute} playVideoById={playVideoById} setPlay={setPlay} 
            isPlaying={isPlaying} videoData={videoData} setVideoId={setVideoId} videoId={videoId}
            toggleThemeList={toggleThemeList} themeName={themeName} videoName={videoName} 
          />
      </div>
  );
}

export default App;
