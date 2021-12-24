import React from "react";

const Recipe = ({ title, calories, image, type, dishType, ingredients }) => {
  return (
    <>
      <h2>{title}</h2>
      <img className="recipe-img" src={image} alt={title} />
      <div className="recipe-inf">
        <p>
          <b>Calories:</b> {calories} cal
        </p>
        <p>
          <b>Cuisine type: </b>
          {type}
        </p>
        <p>
          <b>Dish type: </b>
          {dishType}
        </p>
      </div>
      <ul className="ingredients-list">
        <p>
          <b>Ingredients:</b>
        </p>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Recipe;
