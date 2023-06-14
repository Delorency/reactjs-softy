import HomePage from '../pages/HomePage';

import LoginPage from '../pages/Auth/LoginPage'; 
import RegistrationPage from '../pages/Auth/RegistrationPage';

import ManageProjectsPage from '../pages/ProjectManage/ManageProjectsPage'; 

import ProjectPage from '../pages/Projects/ProjectPage';
import ProjectCreatePage from '../pages/Projects/ProjectCreatePage';

import BacklogCreatePage from '../pages/ScrumProjectDashboard/Backlogs/BacklogCreatePage';
import BacklogUpdatePage from '../pages/ScrumProjectDashboard/Backlogs/BacklogUpdatePage';

import SprintCreatePage from '../pages/ScrumProjectDashboard/Sprints/SprintCreatePage';
import SprintUpdatePage from '../pages/ScrumProjectDashboard/Sprints/SprintUpdatePage';

import ProjectTeamPage from '../pages/ProjectTeam/ProjectTeamPage';
import MemberUpdatePage from '../pages/ProjectTeam/MemberUpdatePage';

import ProposalPage from '../pages/Proposals/ProposalPage';
import InvitePage from '../pages/Proposals/InvitePage';
import UpdateProposalPage from '../pages/Proposals/ProposalUpdatePage';

import ProjectSettingsPage from '../pages/ProjectSettings/ProjectSettingsPage';

import ProfilePage from '../pages/Profile/ProfilePage';

import SprintPage from '../pages/Sprints/SprintPage';

import TaskCreatePage from '../pages/Tasks/TaskCreatePage';




export const AuthRouter = [
    {id: 1, path: '/', component: HomePage, exact: true},
    {id: 2, path: '/manage-projects', component: ManageProjectsPage, exact: true},
    {id: 3, path: '/create-project', component: ProjectCreatePage, exact: true},
    {id: 4, path: '/project/:id', component: ProjectPage, exact: true},

    {id: 5, path: '/create-backlog/:id', component: BacklogCreatePage, exact: true},
    {id: 6, path: '/update-backlog/:id', component: BacklogUpdatePage, exact: true},

    {id: 7, path: '/create-sprint/:id', component: SprintCreatePage, exact: true},
    {id: 8, path: '/update-sprint/:id', component: SprintUpdatePage, exact: true},

    {id: 9, path: '/project/:id/team', component: ProjectTeamPage, exact: true},
    {id: 10, path: '/update-member/:id', component: MemberUpdatePage, exact: true},
    
    {id: 11, path: '/proposals', component: ProposalPage, exact: true},
    {id: 12, path: '/invite/:id', component: InvitePage, exact: true},
    {id: 13, path: '/proposal/:id', component: UpdateProposalPage, exact: true},

    {id:14, path:'/project-settings/:id', component: ProjectSettingsPage, exaxt:true},

    {id:15, path: '/profile', component: ProfilePage, exact: true},

    {id:16, path: '/sprint/:id', component: SprintPage, exact: true},
    
    {id:17, path: '/create-task/:id', component: TaskCreatePage, exact: true},

]

export const NotAuthRouter = [
    {id:1, path: '/login', component: LoginPage, exact: true},
    {id:2, path: '/registration', component: RegistrationPage, exact: true},
]