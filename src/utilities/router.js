import { createBrowserRouter } from "react-router-dom";
import RegistrationPage from "../Components/RegistrationPage/RegistrationPage";
import App from "../App";
import UserProfileUpdate from "../Components/UserProfile/UserProfileUpdate";
import UserAccountPage from "../Components/UserProfile/AccountManagement/js/UserAccountPage";
import RecipeCreationPage from "../Components/Recipe/RecipeCreationPage";
import LoginPage from "../Components/LoginPage/LoginPage";

const router = createBrowserRouter([
    { path: '', element:<LoginPage/> },
    { path: 'login', element: <LoginPage/> },
    { path: 'registration', element: <RegistrationPage/> },
    { path: 'profileupdate', element: <UserProfileUpdate/> },
    { path: 'account', element: <UserAccountPage/> },
    { path: 'recipecreation', element: <RecipeCreationPage/> },
    { path: 'recipecreation', element: <RecipeCreationPage/> },
    
]);

export default router;