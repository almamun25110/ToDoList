import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  let [todoList, setTodoList] = useState([]);
  let saveToDo = (event) =>{
    let ToDo = event.target.ToDo.value;
    if(!todoList.includes(ToDo)){
      let finalList = [...todoList, ToDo]
      setTodoList(finalList);
    }
    else{
      alert("This name allready Exists...");
    }
    event.preventDefault();
  }
  let List = todoList.map((value, index)=>{
    return(
      <TodosItems value={value} key={index}
        indexNumber = {index}
        todoList = {todoList}
        setTodoList = {setTodoList}
      />
    )
  })
  return (
    <div className="App">
      <ToastContainer/>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDo}>
      <input type="text" name='ToDo' placeholder="Something Type Here..."></input><button>Save</button>
      </form>
      <div className='outer'>
      <ul>
        {List}
      </ul>
      </div>
      </div>
  );
}

export default App;

function TodosItems ({value, indexNumber, todoList, setTodoList}){
  let deleteRow = ()=>{
    let finalData = todoList.filter((v,i)=>i!=indexNumber)
    setTodoList(finalData);
  }
  return(
    <li>{value}<span onClick={deleteRow}>&times;</span></li>
  )
}