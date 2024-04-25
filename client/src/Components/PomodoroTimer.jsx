import React, { useState, useEffect } from 'react';
import './CSS/PomodoroTimer.css'
import cross from '../assets/cross.png'

export const PomodoroTimer = ({onToggleTimer}) => {
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isFocusTime, setIsFocusTime] = useState(true); // Track whether it's focus time or break time
  const [minutes, setMinutes] = useState(focusMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [showSettings, setShowSettings] = useState(false); // State 
  const [completedCycles, setCompletedCycles] = useState(0); // Track completed cycles

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            // Time's up, you can add a notification or a sound here
            if (isFocusTime) {
              setIsFocusTime(false);
              setMinutes(breakMinutes);
            } else {
              setIsFocusTime(true);
              setMinutes(focusMinutes);
              setCompletedCycles(prevCycles => prevCycles + 1); // Increment completed cycles
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }


    return () => clearInterval(intervalId);
  }, [isPaused, minutes, seconds, isFocusTime, focusMinutes, breakMinutes]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsFocusTime(true); // Reset to focus time
    setMinutes(focusMinutes);
    setSeconds(0);
    setIsPaused(true);
  };

  const handleFocusChange = (event) => {
    setFocusMinutes(parseInt(event.target.value));
    if (isFocusTime) setMinutes(parseInt(event.target.value));
  };

  const handleBreakChange = (event) => {
    setBreakMinutes(parseInt(event.target.value));
    if (!isFocusTime) setMinutes(parseInt(event.target.value));
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const timerStyle = {
    color: isFocusTime ? '#F6F494' : '#7BD3EA' // Change color based on focus/break mode
  };

  const progressBarStyle = {
    height: '175px', // Fixed height
    // border: '1px solid black', // Border around the progress bar
    boxSizing: 'border-box', // Include border in height calculation
    position: 'relative'
  };

  const segmentStyle = {
    height: 'calc(100% / 4)', // Divide the progress bar into 4 segments
    border: '2px solid white', // Border between segments
    background: completedCycles >= 1 ? '#BFEA7C' : 'transparent' // Change background color of completed segments
  };

  return (
    <div className="timer-container">
      <div className='header-timer'> 
      <div className="timer-title alice-regular">TIMER</div>
      <button id='close-timer' onClick={()=>onToggleTimer()}>
          <img src={cross} alt=""/>
          </button>
      </div>
      <div className='timer-container1'>
      <div className="progress-bar" style={progressBarStyle}>
        <div style={{ ...segmentStyle, background: completedCycles >= 4 ? 'green' : 'transparent' }}></div>
        <div style={{ ...segmentStyle, background: completedCycles >= 3 ? 'green' : 'transparent' }}></div>
        <div style={{ ...segmentStyle, background: completedCycles >= 2 ? 'green' : 'transparent' }}></div>
        <div style={{ ...segmentStyle, background: completedCycles >= 1 ? 'green' : 'transparent' }}></div>
      </div>
      <div className='timer-container2'>
        <div className="timer-clock coiny-regular" style={timerStyle}>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
        <button className='start-stop coiny-regular' onClick={togglePause}>{isPaused ? 'START' : 'STOP'}</button>
      </div>
      <div className='timer-container3'>
        <button onClick={toggleSettings}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M40.6292 25.8475C40.3019 25.4749 40.1214 24.9959 40.1214 24.5C40.1214 24.0041 40.3019 23.5251 40.6292 23.1525L43.2426 20.2125C43.5305 19.8913 43.7094 19.4871 43.7534 19.058C43.7974 18.6288 43.7043 18.1967 43.4876 17.8238L39.4042 10.7596C39.1897 10.387 38.863 10.0917 38.4707 9.91574C38.0784 9.73977 37.6406 9.69212 37.2197 9.77959L33.3813 10.5554C32.8929 10.6563 32.3845 10.575 31.9519 10.3268C31.5194 10.0785 31.1927 9.68054 31.0334 9.20793L29.788 5.47168C29.651 5.06616 29.3901 4.71394 29.042 4.46481C28.694 4.21568 28.2764 4.08224 27.8484 4.08334H19.6817C19.2365 4.0601 18.7959 4.18323 18.4273 4.43393C18.0586 4.68462 17.7821 5.04909 17.6401 5.47168L16.4967 9.20793C16.3375 9.68054 16.0108 10.0785 15.5782 10.3268C15.1457 10.575 14.6372 10.6563 14.1488 10.5554L10.2084 9.77959C9.80936 9.7232 9.40256 9.78617 9.03924 9.96057C8.67592 10.135 8.37234 10.413 8.16674 10.7596L4.08341 17.8238C3.86119 18.1926 3.76128 18.6222 3.79795 19.0513C3.83462 19.4803 4.00599 19.8867 4.28757 20.2125L6.88049 23.1525C7.20781 23.5251 7.38832 24.0041 7.38832 24.5C7.38832 24.9959 7.20781 25.4749 6.88049 25.8475L4.28757 28.7875C4.00599 29.1133 3.83462 29.5197 3.79795 29.9488C3.76128 30.3778 3.86119 30.8074 4.08341 31.1763L8.16674 38.2404C8.38131 38.613 8.70802 38.9083 9.1003 39.0843C9.49257 39.2603 9.93038 39.3079 10.3513 39.2204L14.1897 38.4446C14.6781 38.3437 15.1865 38.425 15.6191 38.6733C16.0516 38.9215 16.3783 39.3195 16.5376 39.7921L17.783 43.5283C17.925 43.9509 18.2015 44.3154 18.5702 44.5661C18.9389 44.8168 19.3794 44.9399 19.8247 44.9167H27.9913C28.4193 44.9178 28.8369 44.7843 29.1849 44.5352C29.533 44.2861 29.7939 43.9339 29.9309 43.5283L31.1763 39.7921C31.3356 39.3195 31.6623 38.9215 32.0948 38.6733C32.5274 38.425 33.0358 38.3437 33.5242 38.4446L37.3626 39.2204C37.7835 39.3079 38.2213 39.2603 38.6136 39.0843C39.0059 38.9083 39.3326 38.613 39.5472 38.2404L43.6305 31.1763C43.8473 30.8033 43.9403 30.3712 43.8963 29.9421C43.8523 29.5129 43.6735 29.1087 43.3855 28.7875L40.6292 25.8475ZM37.5872 28.5833L39.2205 30.4208L36.6072 34.9533L34.198 34.4633C32.7275 34.1628 31.1979 34.4125 29.8995 35.1653C28.601 35.918 27.6241 37.1213 27.1542 38.5467L26.3784 40.8333H21.1517L20.4167 38.5058C19.9469 37.0804 18.97 35.8772 17.6715 35.1244C16.3731 34.3717 14.8434 34.1219 13.373 34.4225L10.9638 34.9125L8.30966 30.4004L9.94299 28.5629C10.9474 27.44 11.5027 25.9862 11.5027 24.4796C11.5027 22.973 10.9474 21.5192 9.94299 20.3963L8.30966 18.5588L10.923 14.0671L13.3322 14.5571C14.8026 14.8577 16.3322 14.6079 17.6307 13.8552C18.9291 13.1024 19.906 11.8992 20.3759 10.4738L21.1517 8.16668H26.3784L27.1542 10.4942C27.6241 11.9196 28.601 13.1229 29.8995 13.8756C31.1979 14.6283 32.7275 14.8781 34.198 14.5775L36.6072 14.0875L39.2205 18.62L37.5872 20.4575C36.594 21.5779 36.0456 23.0232 36.0456 24.5204C36.0456 26.0176 36.594 27.463 37.5872 28.5833ZM23.7651 16.3333C22.1499 16.3333 20.5709 16.8123 19.2279 17.7097C17.8849 18.607 16.8382 19.8825 16.2201 21.3748C15.6019 22.867 15.4402 24.5091 15.7553 26.0932C16.0704 27.6774 16.8482 29.1326 17.9904 30.2747C19.1325 31.4168 20.5877 32.1946 22.1718 32.5098C23.756 32.8249 25.3981 32.6631 26.8903 32.045C28.3826 31.4269 29.658 30.3802 30.5554 29.0372C31.4528 27.6942 31.9317 26.1152 31.9317 24.5C31.9317 22.3341 31.0713 20.2569 29.5398 18.7253C28.0082 17.1938 25.931 16.3333 23.7651 16.3333ZM23.7651 28.5833C22.9575 28.5833 22.168 28.3439 21.4965 27.8952C20.825 27.4465 20.3016 26.8088 19.9926 26.0626C19.6835 25.3165 19.6026 24.4955 19.7602 23.7034C19.9178 22.9113 20.3067 22.1837 20.8777 21.6127C21.4488 21.0416 22.1764 20.6527 22.9685 20.4951C23.7605 20.3376 24.5816 20.4184 25.3277 20.7275C26.0738 21.0366 26.7116 21.5599 27.1602 22.2314C27.6089 22.9029 27.8484 23.6924 27.8484 24.5C27.8484 25.583 27.4182 26.6216 26.6524 27.3874C25.8867 28.1531 24.848 28.5833 23.7651 28.5833Z" fill="#C1C1C1"/>
          </svg>
        </button> {/* Button to toggle settings display */}
        <button onClick={resetTimer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M21.25 4.25H29.75M25.5 29.75V21.25M8.5 27.625C9.02033 23.4939 11.0386 19.6975 14.1722 16.9557C17.3057 14.2139 21.3364 12.7174 25.5 12.75C28.2499 12.7529 30.958 13.4229 33.392 14.7024C35.826 15.9819 37.9134 17.8327 39.4749 20.0962C41.0365 22.3596 42.0257 24.9681 42.3576 27.6978C42.6896 30.4276 42.3544 33.1971 41.3808 35.7688C40.4072 38.3406 38.8243 40.6378 36.7678 42.4633C34.7114 44.2889 32.2428 45.5883 29.5738 46.2502C26.9048 46.9121 24.115 46.9166 21.4439 46.2634C18.7727 45.6103 16.2999 44.3189 14.2375 42.5L8.5 37.4" stroke="#C1C1C1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.125 36.125H8.5V46.75" stroke="#C1C1C1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      </div>
      <div>
        {showSettings && (
          <div className="settings">
            <div className='setting'>
              <label>
                Focus Time (minutes): 
                <input type="number" value={focusMinutes} onChange={handleFocusChange} />
              </label>
            </div>
            <div className='setting'>
              <label>
                Break Time (minutes): 
                <input type="number" value={breakMinutes} onChange={handleBreakChange} />
              </label>
            </div>
          </div>
        )}
        </div>
    </div>
  );
};

// export default PomodoroTimer;
