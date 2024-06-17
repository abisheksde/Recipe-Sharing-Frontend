import { createBrowserRouter } from "react-router-dom";
import RegistrationPage from "../Components/RegistrationPage/RegistrationPage";
import App from "../App";
import UserProfileUpdate from "../Components/UserProfile/UserProfileUpdate";
import UserAccountPage from "../Components/UserProfile/AccountManagement/js/UserAccountPage";
import RecipeCreationPage from "../Components/Recipe/RecipeCreationPage";
import LoginPage from "../Components/LoginPage/LoginPage";
import Home from "../Components/HomePage/Home";
import RecipeUpdatePage from "../Components/Recipe/RecipeUpdatePage";

const router = createBrowserRouter([
    { path: '', element:<LoginPage/> },
    { path: 'home', element: <Home/> },
    { path: 'login', element: <LoginPage/> },
    { path: 'registration', element: <RegistrationPage/> },
    { path: 'profileupdate', element: <UserProfileUpdate/> },
    { path: 'account', element: <UserAccountPage/> },
    { path: 'recipecreation', element: <RecipeCreationPage/> },
    { path: 'recipeupdate', element: <RecipeUpdatePage/> },
    
    
]);

export default router;