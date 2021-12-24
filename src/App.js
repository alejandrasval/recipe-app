import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

function App() {
  const APP_ID = "0a4d3923";
  const APP_KEY = "2c8df971ce3de619d9e6c009da1ecd15";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>
        <span>R</span>
        <span>E</span>
        <span>C</span>
        <span>I</span>
        <span>P</span>
        <span>E</span>
        <br/>
        <span>B</span>
        <span>O</span>
        <span>O</span>
        <span>K</span>
      </h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="What do you want to cook today?"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        <div className="card">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories.toFixed(2)}
              image={recipe.recipe.image}
              type={recipe.recipe.cuisineType}
              dishType={recipe.recipe.dishType}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
