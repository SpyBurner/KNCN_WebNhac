import './CSS/TodoItems.css'
import check from '../assets/check.svg'
import uncheck from '../assets/uncheck.svg'
import cross from '../assets/cross.png'

export const TodoItems = ({no,display,text,setTodos,setTotalCheck,setTotalCount}) => {

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
    setTotalCount(data.length);
    let checkCount = 0;
    if (data.length == 0)
      localStorage.setItem("checked_Task",checkCount);
    data.filter((todo) => {
      if (todo.display === "line-through")
        ++checkCount;
      setTotalCheck(checkCount);
      localStorage.setItem("checked_Task",checkCount);
    })
  }
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0; i < data.length; i++){
      if (data[i].no === no){
        data[i].display === "" ? data[i].display = "line-through" : data[i].display = "";

        let checkCount = 0;
        
        data.filter((todo) => {
          if (todo.display === "line-through")
            ++checkCount;
          setTotalCheck(checkCount);
          localStorage.setItem("checked_Task",checkCount);
        })
        break;
      } 
    }
    setTodos(data);
  }

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={uncheck} alt="" />:<img src={check} alt="" />}
        <div className="todoitems-text akaya-kanadaka-regular">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt=""/>
    </div>
  )
}
