import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import Divider from '@mui/material/Divider';

import Container from '../components/UI/Container';
import Heading from '../components/UI/Heading';
import BacklogList from '../components/ScrumProjectDashboardUI/Backlogs/BacklogList';
import SprintList from '../components/ScrumProjectDashboardUI/Sprints/SprintList';

import Scrums from '../API/ScrumProjectsAPI';
import SubNavigation from '../components/ProjectsUI/SubNavigation';

import ProjectInfo from '../components/ScrumProjectDashboardUI/ProjectInfo';



const ProjectPage = () => {
    const {id} = useParams();
    const [project, setProject] = useState();
    useEffect(()=>{
        Scrums.getScrumProject(id, setProject)
    }, [id])

    return (
        <>
            <Heading title='Project Dashboard - Flower'/>
            <Container width='40%' margin='10px auto 10px'>
                <SubNavigation id={id}/>
            </Container>
            <Container display='flex' alignItems='top' width='90%' margin='0 auto 0'>
                <Container width='20%'>
                    {project
                    ?<ProjectInfo project={project}/>
                    :null
                    }
                </Container>
                <Divider orientation="vertical" flexItem style={{'marginLeft':'10px', 'marginRight':'10px'}}/>
                <Container width='60%' margin='0 auto 0'>
                    <BacklogList id={id}/>
                </Container>
                <Divider orientation="vertical" flexItem style={{'marginLeft':'10px', 'marginRight':'10px'}}/>
                <Container width='40%' margin='0 auto 0'>
                    <SprintList id={id}/>
                </Container>
            </Container>
        </>
    )
}

export default ProjectPage;