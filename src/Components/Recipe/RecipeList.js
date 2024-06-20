import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../service/RecipeService';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);


    useEffect(() => {
        fetchRecipes()
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the items!", error);
            });
    }, []);

    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {recipes.map(recipes => (
                    <li key={recipes.id}>
                        <h2>{recipes.title}</h2>
                        <p>{"Ingredients : " + recipes.ingredients}</p>
                        <img src=''></img>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
