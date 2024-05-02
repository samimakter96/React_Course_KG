import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems';
// import { useState, useReducer } from 'react';
import WelcomeMessage from './Components/WelcomeMessage';
// import { TodoItemsContext } from './store/todo-items-store';
import './App.css';
import TodoItemsContextProvider from './store/todo-items-store';


function App() {

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
