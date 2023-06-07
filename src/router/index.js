import ScrumProjectsPage from '../pages/ScrumProjectsPage';


export const routers = [
    {id: 1, path: '/', component: ScrumProjectsPage, exact: true},
    {id: 2, path: '/scrum-project', component: ScrumProjectsPage, exact: true},
]