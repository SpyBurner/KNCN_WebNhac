import { Taskbar } from "./Components/Taskbar"
import './App.css'
import { Fullscreen_button } from "./Components/Fullscreen_button"
import { Favourite_playlist } from "./Components/Favourite_playlist"
import { Todo } from "./Components/Todo"
import { useEffect, useState } from "react"

const App = () => {
  const [openTodolist, setOpenTodoList] = useState(false);
  const [totalTask, setTotalTask] = useState(0);

  useEffect(()=>{
    setTotalTask(parseInt(localStorage.getItem("totalCount")));
  });

  const toggleTodoVisibility = () => {
    setOpenTodoList(prevState => !prevState);
  };

  return (
    <div className="app">
      <div className="header">
        <Favourite_playlist/>
        <Fullscreen_button/>
      </div>
      <div className="todo-container" style={{display: openTodolist? 'block' : 'none'}}>
        <Todo/>
      </div>
      <Taskbar onToggleTodo={toggleTodoVisibility}/>
    </div>
  )
}

export default App
