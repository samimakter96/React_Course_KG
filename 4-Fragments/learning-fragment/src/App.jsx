import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Container from './Components/Container';
import FoodInput from './Components/FoodInput';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {


  const [foodItems, setFoodItems] = useState([]);


  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      // console.log(newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handlerKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
