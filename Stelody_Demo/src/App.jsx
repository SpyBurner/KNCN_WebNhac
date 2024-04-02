import { Taskbar } from "./Components/Taskbar"
import './App.css'
import { Fullscreen_button } from "./Components/Fullscreen_button"
import { Favourite_playlist } from "./Components/Favourite_playlist"

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Favourite_playlist/>
        <Fullscreen_button/>
      </div>
      <Taskbar/>
    </div>
  )
}

export default App
