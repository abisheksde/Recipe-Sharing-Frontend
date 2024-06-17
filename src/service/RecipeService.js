import axios from 'axios';

const API_URL = 'http://localhost:8080/api/recipes/list';

export const fetchRecipes = () => {
    return axios.get(API_URL);
};
