import style from './TodoItems.module.css';
import TodoItem from './TodoItem';
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
