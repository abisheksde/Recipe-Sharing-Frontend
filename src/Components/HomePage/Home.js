import RecipeList from "../Recipe/RecipeList";
import NavigationBar from "../NavigationBar/NavigationBar";
import './Home.css';


function Home() {
    return (
      <div className="App">
        <NavigationBar/>
          <h1>Welcome to Recipe Book</h1>
          <RecipeList/>
      </div>
    );
  }
  
  export default Home;
  