import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Container from '../UI/Container';
import Text from '../UI/Text'

import ProjectItem from './ProjectItem';

import Scrums from '../../API/ScrumProjectsAPI';



const ProjectsList = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [filters, setFilters] = useState([]);

    const [selectValue, setSelectValue] = useState('All');

    const changeValue = (event) => {
        setSelectValue(event.target.value);
        if (event.target.value !== 'All'){
            setFilters(projects.filter(project=>project.team.some(
                member=>member.role===event.target.value && member.user.username===localStorage.getItem('user_username'))))
        } else{
            setFilters(projects);
        }
    }

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
            <Container display='flex' justifyContent='space-between'>
                <Container width='80%'>
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
                <Container display='flex' justifyContent='flex-end'>  
                    <Divider orientation="vertical" style={{'margin':'0 20px 0 20px'}}/>
                    <Container>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectValue}
                            style={{'marginBottom':'20px', 'width':'12vw'}}
                            onChange={changeValue}
                            >
                            <MenuItem value='All'>All</MenuItem>
                            <MenuItem value='Project owner'>Project owner</MenuItem>
                            <MenuItem value='Backend'>Backend</MenuItem>
                            <MenuItem value='Frontend'>Frontend</MenuItem>
                            <MenuItem value='UX'>UX</MenuItem>
                            <MenuItem value='Design'>Design</MenuItem>
                        </Select>  
                    </Container>   
                </Container>

            </Container>
        </Container>
    )
}

export default ProjectsList;