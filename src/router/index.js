import HomePage from '../pages/HomePage';
import ScrumProjectsPage from '../pages/ScrumProjectsPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';


export const AuthRouter = [
    {id: 1, path: '/', component: HomePage, exact: true},
    {id: 2, path: '/scrum-project', component: ScrumProjectsPage, exact: true},
]

export const NotAuthRouter = [
    {id:1, path: '/login', component: LoginPage, exact: true},
    {id:2, path: '/registration', component: RegistrationPage, exact: true},
]