import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css'
import { TodoItems } from './TodoItems';

export const Todo = () => {
  
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
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M32.7877 10.2305C32.6219 10.0644 32.425 9.93258 32.2083 9.84268C31.9915 9.75277 31.7592 9.70649 31.5245 9.70649C31.2899 9.70649 31.0575 9.75277 30.8408 9.84268C30.624 9.93258 30.4272 10.0644 30.2614 10.2305L21.5002 18.9738L12.7389 10.2125C12.573 10.0467 12.3761 9.91508 12.1594 9.82531C11.9427 9.73554 11.7104 9.68933 11.4758 9.68933C11.2412 9.68933 11.0089 9.73554 10.7922 9.82531C10.5755 9.91508 10.3785 10.0467 10.2127 10.2125C10.0468 10.3784 9.9152 10.5753 9.82543 10.7921C9.73566 11.0088 9.68945 11.2411 9.68945 11.4757C9.68945 11.7102 9.73566 11.9425 9.82543 12.1593C9.9152 12.376 10.0468 12.5729 10.2127 12.7388L18.9739 21.5L10.2127 30.2613C10.0468 30.4272 9.9152 30.6241 9.82543 30.8408C9.73566 31.0575 9.68945 31.2898 9.68945 31.5244C9.68945 31.759 9.73566 31.9913 9.82543 32.208C9.9152 32.4247 10.0468 32.6217 10.2127 32.7875C10.3785 32.9534 10.5755 33.085 10.7922 33.1748C11.0089 33.2645 11.2412 33.3107 11.4758 33.3107C11.7104 33.3107 11.9427 33.2645 12.1594 33.1748C12.3761 33.085 12.573 32.9534 12.7389 32.7875L21.5002 24.0263L30.2614 32.7875C30.4273 32.9534 30.6242 33.085 30.8409 33.1748C31.0577 33.2645 31.2899 33.3107 31.5245 33.3107C31.7591 33.3107 31.9914 33.2645 32.2081 33.1748C32.4249 33.085 32.6218 32.9534 32.7877 32.7875C32.9535 32.6217 33.0851 32.4247 33.1749 32.208C33.2647 31.9913 33.3109 31.759 33.3109 31.5244C33.3109 31.2898 33.2647 31.0575 33.1749 30.8408C33.0851 30.6241 32.9535 30.4272 32.7877 30.2613L24.0264 21.5L32.7877 12.7388C33.4685 12.058 33.4685 10.9113 32.7877 10.2305Z" fill="#C1C1C1"/>
          </svg>
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

