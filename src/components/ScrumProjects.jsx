import {useState, useEffect} from 'react';

import Container from './UI/Container'
import Text from './UI/Text'
import ScrumListItem from './ScrumProjectsUI/ScrumListItem'

import Scrums from '../API/ScrumProjectsAPI';


const ScrumProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        Scrums.getAllScrumProjects(setProjects);
    }, [])
    return (
        <Container display='flex' flexDirection='column' maxWidth='30%'>
            <Text marginBottom='40px' fontSize='32px' textAlign='center'>Scrum</Text>     
            {projects && projects.map( ({ ...project }) => (
                <ScrumListItem key={project.id}
                    project={project}
                >
                    {project.name}
                </ScrumListItem>
            ))}
        </Container>
    )
}

export default ScrumProjects;