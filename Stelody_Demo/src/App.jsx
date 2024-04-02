import { Taskbar } from "./Components/Taskbar"
import './App.css'
import { Fullscreen_button } from "./Components/Fullscreen_button"

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Fullscreen_button/>
      </div>
      <Taskbar/>
    </div>
  )
}

export default App
