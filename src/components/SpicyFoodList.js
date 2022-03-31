import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    
    const newFoods = [...foods, newFood]
    setFoods(newFoods)
  }
  function handleLiClick(id){
    //const newFoods = foods.filter(food => food.id !== id)
    let foodIndex = foods.findIndex(el => {return el.id === id});

    //MUST MAKE THIS A NEW ARRAY - CANNOT UPDATE PREVIOUS STATE BY 
    //DIRECTLY MANIPULATING IT 
    let newFoods = [...foods];
    
    newFoods[foodIndex].heatLevel += 1;
    
    setFoods(newFoods); //setFoods([...newFoods])
  }

  function handleRemoveClick(id){
    const newFoods = foods.filter(food => food.id !== id)
    setFoods(newFoods);
  }


  const foodList = foods.map((food) => (
    <li onClick={() => handleLiClick(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  console.log(foods);
  return (
    <div>
      
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
