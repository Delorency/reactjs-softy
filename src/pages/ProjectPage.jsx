import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import Container from '../components/UI/Container';
import Heading from '../components/UI/Heading';
import BacklogList from '../components/ScrumProjectDashboardUI/Backlogs/BacklogList';

import Scrums from '../API/ScrumProjectsAPI';
import SubNavigation from '../components/ProjectsUI/SubNavigation';



const ProjectPage = () => {
    const {id} = useParams();
    const [, setProject] = useState();
    useEffect(()=>{
        Scrums.getScrumProject(id, setProject)
    }, [id])

    return (
        <>
            <Heading title='Project Dashboard - Flower'/>
            <Container width='40%' margin='10px auto 10px'>
                <SubNavigation id={id}/>
            </Container>
            <Container width='50%' margin='0 auto 0'>
                <BacklogList id={id}/>
            </Container>
        </>
    )
}

export default ProjectPage;