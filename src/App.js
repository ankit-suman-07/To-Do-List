import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    // setTodoList([...todoList, newTask]);
  }

  // const deleteTask = (taskName) => {
  //   // const newTodolist = todoList.filter((task) => task !== taskName);
  //     // if(task === taskName) {
  //     //   return false;
  //     // }
  //     // else {
  //     //   return true;
  //     // }
  //     // return task !== taskName;
    
  //   // setTodoList(newTodolist);
  //   setTodoList(todoList.filter((task) => task !== taskName));
  // }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  return (
    <>
    <div className='banner'>To-Do List</div>
    <div className="App">
      
      <div className="addTask">
        <input className="input" onChange={handleChange}/>
        <button onClick={addTask} className='btn-add' > Add </button>
      </div>
      <div className="list">
        { todoList.map((task) => {
          return (
            <div className='taskDiv'>
                <button onClick={() => deleteTask(task.id)} className='btn-item' > x </button>
                { task.taskName }
            </div>
          );
        })}
      </div>
    </div>
    <div className='footer'>Created by - ankitsuman07@gmail.com</div>
    </>
  );
}

export default App;
