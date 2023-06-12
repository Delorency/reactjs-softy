import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Container from '../UI/Container';
import Text from '../UI/Text'

import ProjectItem from './ProjectItem';
import FilterList from './FilterList';

import Scrums from '../../API/ScrumProjectsAPI';



const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    const [filters, setFilters] = useState([]);
    const [tags, setTags] = useState([]);

    const navigate = useNavigate();

    const createHandlerRedirect = () => {
        navigate('/create-project');
    }
    const homeHandlerRedirect = () => {
        navigate('/');
    }

    useEffect(()=>{
        Scrums.getAllScrumProjects(setProjects, setFilters);
    },[])
    return (
        <Container display='flex' flexDirection='column'>
            <Text
                marginBottom='10px'
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >
                Projects
            </Text> 
            <Container display='flex' marginBottom='20px'>
                {tags.map(tag => (
                    <Text marginRight='30px'>{tag}</Text>
                ))}
            </Container>
            <Container display='flex' flexDirection='row' justifyContent='space-between'>
                <Container width='20%'>
                    <FilterList 
                        setter={setFilters}
                        projects_filter={filters}
                        projects={projects}
                        tags = {tags}
                        tags_setter={setTags}/>
                </Container>    

                <Divider orientation="vertical" flexItem style={{'marginLeft':'20px', 'marginRight':'20px'}}/>

                <Container width='60%'>
                    <Container display='flex' justifyContent='space-between'>
                        <Button variant='outlined' onClick={homeHandlerRedirect}
                            style={{'marginBottom':'20px', 'color':'#5E6569', 'borderColor':'#5E6569'}}>
                            Home</Button>
                        <Button variant='outlined' onClick={createHandlerRedirect}
                            style={{'marginBottom':'20px', 'color':'#75D674', 'borderColor':'#75D674'}}>
                            Create new project</Button>
                    </Container>
                    <Container overflow='auto' height='60vh' padding='5px 16px 0 10px'>  
                        {filters.map(({...project})=>(
                            <ProjectItem key={project.id}
                            project={project}/>
                        ))}
                    </Container>
                </Container>  

                <Divider orientation="vertical" flexItem style={{'marginLeft':'20px', 'marginRight':'20px'}}/>

                <Container width='20%'>

                </Container>  
            </Container>
        </Container>
    )
}

export default ProjectsList;