import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RecipeListForAdmin = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/api/recipes/usersRecipes")
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the items!", error);
            });
    }, []);

    const navigate = useNavigate();
    // Send a DELETE request to the API endpoint
    const handleDelete =  (id) => {
      try {
        const response =  axios.post(`http://localhost:8080/api/recipes/delete/${id}`); //{id}
          console.log('Product deleted successfully:', response.data);
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
              console.log('Product Updated successfully:', recipe);
              navigate('/recipeupdate', { state: { recipe } })
            }
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
    };
  

    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {recipes.map(recipes => (
                    <li key={recipes.id}>
                        <div>
                            <div>
                                <h2>{recipes.title}</h2>
                                <p>{"Ingredients : " + recipes.ingredients}</p>
                            <img src=''></img>
                            </div>
                            <div>
                                {/* <LikeButton/> */}
                            </div>
                            <div>
                                <button onClick={()=> handleDelete(recipes.id)}>Delete</button>
                            </div>
                            <div>
                                <button onClick={()=> handleEdit(recipes.id)}>Edit</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeListForAdmin;
