import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipesButton = ({ users }) => {
    const navigateTo = useNavigate();


    return(
        

        <div>
            {/* <button onClick={() => navigateTo('recipelist')}>Recipes</button> */}
            <button onClick={() => navigateTo('recipelist')}>Recipes</button>
        </div>
    )
}

export default RecipesButton;