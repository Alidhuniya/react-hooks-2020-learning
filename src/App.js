import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
 
function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Hooks", isCompleted: false },
    { text: "Take a Drive", isCompleted: false },
    { text: "Play some games", isCompleted: false }
  ]);

  const handleAddTodo = text => {
    const newToDos = [...todos, { text }];
    setTodos(newToDos);
  };

  const handleComplete = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodos(newToDos);
  };

  const handleUnfinished = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = false;
    setTodos(newToDos);
  };

  const handleDeleteTodo = index => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  };
 
  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} onComplete={handleComplete}
          index={index} onUnfinished={handleUnfinished} onDeleteTodo={handleDeleteTodo} />
      ))}
      <TodoForm onAddTodo={handleAddTodo} />
    </React.Fragment>
  );
}
 
export default App;