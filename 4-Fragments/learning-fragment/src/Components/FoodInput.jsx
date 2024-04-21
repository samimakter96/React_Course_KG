import styles from './FoodInput.module.css'


const FoodInput = ({handlerKeyDown}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handlerKeyDown}
    />
  );
}

export default FoodInput;