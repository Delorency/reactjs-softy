import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage'; 
import ManageProjectsPage from '../pages/ManageProjectsPage'; 
import RegistrationPage from '../pages/RegistrationPage';
import ProjectCreatePage from '../pages/ProjectCreatePage';
import ProjectPage from '../pages/ProjectPage';
import BacklogCreatePage from '../pages/BacklogCreatePage';
import BacklogUpdatePage from '../pages/BacklogUpdatePage';
import SprintCreatePage from '../pages/SprintCreatePage';
import SprintUpdatePage from '../pages/SprintUpdatePage';


export const AuthRouter = [
    {id: 1, path: '/', component: HomePage, exact: true},
    {id: 2, path: '/manage-projects', component: ManageProjectsPage, exact: true},
    {id: 3, path: '/create-project', component: ProjectCreatePage, exact: true},
    {id: 4, path: '/project/:id', component: ProjectPage, exact: true},

    {id: 5, path: '/create-backlog/:id', component: BacklogCreatePage, exact: true},
    {id: 6, path: '/update-backlog/:id', component: BacklogUpdatePage, exact: true},

    {id: 7, path: '/create-sprint/:id', component: SprintCreatePage, exact: true},
    {id: 8, path: '/update-sprint/:id', component: SprintUpdatePage, exact: true},
]

export const NotAuthRouter = [
    {id:1, path: '/login', component: LoginPage, exact: true},
    {id:2, path: '/registration', component: RegistrationPage, exact: true},
]