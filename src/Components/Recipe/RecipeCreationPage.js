import React, { useState } from 'react';
import './RecipeCreationPage.css';

const RecipeCreationPage = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [difficulty, setDifficulty] = useState('easy');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, ingredients, steps, cookingTime, difficulty, image });
    };

    return (
        <div className="recipe-creation-page">
            <h1>Create a New Recipe</h1>
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
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
};

export default RecipeCreationPage;
