import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage'; 
import ManageProjectsPage from '../pages/ManageProjectsPage'; 
import RegistrationPage from '../pages/RegistrationPage';


export const AuthRouter = [
    {id: 1, path: '/', component: HomePage, exact: true},
    {id: 1, path: '/manage-projects', component: ManageProjectsPage, exact: true},
]

export const NotAuthRouter = [
    {id:1, path: '/login', component: LoginPage, exact: true},
    {id:2, path: '/registration', component: RegistrationPage, exact: true},
]