import {FormEvent, useState} from "react";
import "./App.css";
import * as api from "./api";
import {Recipe} from "./types.ts";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearchSubmit = async(event: FormEvent)=>{
    event.preventDefault();
      try{
        const recipes = await api.searchRecipes(searchTerm, 1);
        setRecipes(recipes.results);
          console.log(12, recipes)
      }catch(err){
          console.log(err);
      }
  }
    console.log(19, recipes)
  return <div>
      <form onSubmit={(event)=>handleSearchSubmit(event)}>
          <input type="text" placeholder="Enter a Search Criteria" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} required></input>
          <button type="submit">Search</button>
      </form>
      {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title}/>
            <p>{recipe.imageType}</p>
        </div>
      ))}

      </div>;
};

export default App;
