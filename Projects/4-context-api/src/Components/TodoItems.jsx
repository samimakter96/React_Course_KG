import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
import TodoItem from './TodoItem';

import style from './TodoItems.module.css';


const TodoItems = () => {

  const { todoItems, deleteItem} = useContext(TodoItemsContext);
  
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={deleteItem}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
