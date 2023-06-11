import {useState, useEffect} from 'react';

import Container from '../UI/Container'
import Text from '../UI/Text'
import ProjectListItem from '../ProjectsUI/ProjectListItem'

import Scrums from '../../API/ScrumProjectsAPI';


const KanbanProjectsList = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        Scrums.getAllScrumProjects(setProjects);
    }, [])
    return (
        <Container display='flex' flexDirection='column' width='48%'>
            <Text marginBottom='40px' fontSize='32px' textAlign='center'>Kanban</Text>   
            {projects && projects.map( ({ ...project }) => (
                <ProjectListItem key={project.id}
                    project={project}/>
            ))}
        </Container>
    )
}

export default KanbanProjectsList;