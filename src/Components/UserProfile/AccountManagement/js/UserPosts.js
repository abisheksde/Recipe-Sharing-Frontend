import '../css/UserPosts.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRecipes } from '../../../../service/RecipeService';



const UserPosts = ({ recipes }) => {

  const [recipe, setRecipes] = useState([]);



  const navigate = useNavigate();
  // Send a DELETE request to the API endpoint
  const handleDelete =  (id) => {
    try {
      const response =  axios.post(`http://localhost:8080/api/recipes/delete/${id}`); //{id}
        console.log('Product deleted successfully:', response.data);
        console.log("isArray "+ recipes)
        navigate("/home");
    } catch (error) {
        console.error('Error deleting the product:', error);
    }
  };

  // Send a UPDATEs request to the API endpoint
  const handleEdit =  (id) => {

        const response =  axios.get(`http://localhost:8080/api/recipes/update/${id}`).then(response => {
          setRecipes(response.data);

          if(recipe.length != 0){
            console.log('Product Updated successfully:', response.data);
            
            navigate('/recipeupdate', { state: { recipe } })
          }
          
      })
      .catch(error => {
          console.error('Error fetching product data:', error);
      });
  };



  return (
    <div className="user-posts">
      
      <div>
      {/* <h2>Posts ({recipes.length})</h2> */}
      <ul>
        <div>
        {recipes.map(recipes => (
          <li key={recipes.id}>
            <h2>{recipes.title}</h2>
            <p>{"Ingredients : " + recipes.ingredients}</p>
            <div>
        <div>
         <button onClick={()=> handleDelete(recipes.id)}>Delete</button>
        </div>
        <div>
         <button onClick={()=> handleEdit(recipes.id)}>Edit</button>
        </div>
      </div>
          </li>
        ))}
        </div>
      </ul>
      </div>
      
      
    </div>
  );
};

export default UserPosts;
