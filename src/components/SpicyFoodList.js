import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState("All")

  //on button click add new food to list
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoods = [...foods, newFood]
    setFoods(newFoods)
  }

  //increment heat level by 1
  function handleLiClick(id){
    let foodIndex = foods.findIndex(el => {return el.id === id});
    //MUST MAKE THIS A NEW ARRAY - CANNOT UPDATE PREVIOUS STATE BY 
    //DIRECTLY MANIPULATING IT 
    let newFoods = [...foods];
    newFoods[foodIndex].heatLevel += 1;
    setFoods(newFoods); //setFoods([...newFoods])
  }

  /*
  function handleRemoveClick(id){
    const newFoods = foods.filter(food => food.id !== id)
    setFoods(newFoods);
  }
  */

  const updateCuisine = (e) => {
    setCuisine(e.target.value);
  }

  const foodsToBeDisplayed = foods.filter((food) => {
    if(cuisine === "All") {
      return true 
    } else {
      return food.cuisine === cuisine
    }
  })

  //create list of foods for DOM
  const foodList = foodsToBeDisplayed.map((food) => (
    <li onClick={() => handleLiClick(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  

  return (
    <div>
      <select name="filter" onChange={e => updateCuisine(e)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
