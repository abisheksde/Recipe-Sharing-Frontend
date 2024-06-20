import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const RecipeUpdatePage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [difficulty, setDifficulty] = useState('easy');
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     // Fetch the existing recipe data
    //     const fetchRecipe = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/api/recipes`); // {id}
    //             const recipe = response.data;
    //             setTitle(recipe.title);
    //             setIngredients(recipe.ingredients);
    //             setSteps(recipe.steps);
    //             setCookingTime(recipe.cookingTime);
    //             setDifficulty(recipe.difficulty);
    //         } catch (error) {
    //             console.error('Error fetching recipe:', error);
    //         }
    //     };

    //     fetchRecipe();
    // }, [id]);

    const location = useLocation();
    const { recipe } = location.state || {};

    const recipeId = recipe.id;

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('ingredients', ingredients);
        formData.append('steps', steps);
        formData.append('cookingTime', cookingTime);
        formData.append('difficulty', difficulty);
        if (image) {
            formData.append('image', image);
        }

        try {
            console.log(recipe);
            await axios.post(`http://localhost:8080/api/recipes/update/${recipeId}`, formData, { // {id}
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Recipe updated successfully');
        } catch (error) {
            console.error('Error updating recipe:', error);
            alert('Failed to update recipe');
        }
    };

    return (
        <div className="recipe-update-page">
            <h1>Update Recipe</h1>
            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea 
                        id="ingredients" 
                        value={ingredients} 
                        onChange={(e) => setIngredients(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="steps">Steps</label>
                    <textarea 
                        id="steps" 
                        value={steps} 
                        onChange={(e) => setSteps(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cookingTime">Cooking Time</label>
                    <input 
                        type="text" 
                        id="cookingTime" 
                        value={cookingTime} 
                        onChange={(e) => setCookingTime(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="difficulty">Difficulty Level</label>
                    <select 
                        id="difficulty" 
                        value={difficulty} 
                        onChange={(e) => setDifficulty(e.target.value)}
                        required
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Recipe Image</label>
                    <input 
                        type="file" 
                        id="image" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                    />
                </div>
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
};

export default RecipeUpdatePage;
