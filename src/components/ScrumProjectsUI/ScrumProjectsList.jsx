import {useState, useEffect} from 'react';

import Container from '../UI/Container'
import Text from '../UI/Text'
import ProjectListItem from '../ProjectsUI/ProjectListItem'

import Scrums from '../../API/ScrumProjectsAPI';


const ScrumProjectsList = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        Scrums.getAllScrumProjects(setProjects);
    }, [])
    return (
        <Container display='flex' flexDirection='column' width='48%'>
            <Text
                marginBottom='40px'
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >
                Scrum
            </Text>     
            {projects && projects.slice(0,2).map( ({ ...project }) => (
                <ProjectListItem key={project.id}
                    project={project}/>
            ))}
        </Container>
    )
}

export default ScrumProjectsList;