import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css'
import { TodoItems } from './TodoItems';
import cross from '../assets/cross.png'

export const Todo = ({onToggleTodo}) => {
  
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [newTask, setNewTask] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalCheck, setTotalCheck] = useState(0);

  const handleNewTask= (event) => {
    setNewTask(event.target.value);
  }

  
  const add = () => {
    if (newTask.trim() !== "")
    {
      setTodoCount(prev => prev + 1);
      setTotalCount(prev => prev + 1);
      setTodos(t => [...t,{no:todoCount, text:newTask,display:""}]);
      setNewTask("");
      localStorage.setItem("todo_count",todoCount+1);
      localStorage.setItem("totalCount",totalCount+1);
    }
  }

  useEffect(()=>{
    console.log("hello");
    let testTodo = JSON.parse(localStorage.getItem("todos"));
    if (testTodo != null){
      setTodos(testTodo);
      setTotalCount(testTodo.length);

      let checkCount = 0
      testTodo.filter((todo) => {
        if (todo.display === "line-through")
          ++checkCount;
        setTotalCheck(checkCount);
      })
    }
    if (localStorage.getItem("todo_count") != null){
      setTodoCount(parseInt(localStorage.getItem("todo_count")));
    }
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      console.log(todos);
      localStorage.setItem("todos",JSON.stringify(todos));
    },500); 
  },[todos])
  

  return (
    <div className='todo'>
        <div className="todo-header">
          <span>TO DO LIST</span>
          <button id='close-todo' onClick={()=>onToggleTodo()}>
          <img src={cross} alt=""/>
          </button>
        </div>
        <div className="todo-add">
          <input value={newTask}  type="text" placeholder='Add Your Task' className='todo-input' onChange={handleNewTask}/>
          <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
          { todos && todos.map((item,index)=>{
            return <TodoItems key={index} no={item.no} setTodos={setTodos} display={item.display} text={item.text} setTotalCheck={setTotalCheck} setTotalCount={setTotalCount}/>
          })}
        </div>
        <div className='done-task-number'>
          {`${totalCheck}/${totalCount}`}
        </div>
    </div>
  )
}

