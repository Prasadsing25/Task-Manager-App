import { useState } from 'react';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([])

  let saveTodoList = (event) => {
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finalTodolist = [...todolist, todoname];
      setTodolist(finalTodolist);
    } else {
      console.log("Alerady Existed");
    }
    event.preventDefault();
  }

  let list = todolist.map((value, index) => {
    return (
      <TodoListItems value={value} key={index} indexNumber={index}
        todolist ={todolist}
        setTodolist={setTodolist}
      />
    )
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name='todoname' />
        <button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
        <p>*complete your task on prior basis*</p>
      </div>
    </div>
  );
}

function TodoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    // alert(indexNumber);
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    setTodolist(finalData);
  }

  let checkStatus = () => {
    setStatus(!status);
  }

  return (
    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}>{indexNumber+1}. &nbsp;{value} <span onClick={deleteRow}>&times;</span></li>
  );
}

export default App;