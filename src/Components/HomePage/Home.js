import RecipeList from "../Recipe/RecipeList";
import NavigationBar from "../NavigationBar/NavigationBar";
import './Home.css';

import SearchRecipe from "../Search/SearchRecipe";

function Home() {
  
    return (
      <div className="App">
        <NavigationBar/>
   
          <h1>Welcome to Recipe Book</h1>
          <RecipeList/>
          <h1>Search</h1>
          <SearchRecipe/>
      </div>
    );
  }
  
  export default Home;
  