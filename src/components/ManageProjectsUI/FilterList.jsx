import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Container from '../UI/Container';

import '../../styles/Button.module.css';



const FilterList = ({setter, projects_filter, projects, tags, tags_setter}) => {
    const filterHandler = (event) => {
        if (event.target.name)
            setter(projects_filter.filter(
                project=>project.team.some(
                    member=>member.role===event.target.name && member.user.username===localStorage.getItem('user_username'))
            ));
            tags_setter(tags.concat([event.target.name]));
    }
    const projectTypeFilterHandler = (event) => {
        let res = false 
        if (event.target.name === 'scrum') {
            res=true
            tags_setter(tags.concat(['scrum']));
        }else {tags_setter(tags.concat(['kanban']));}
        setter(projects_filter.filter(project=>project.is_scrum===res))
    }

    const filterRefreshHandler = () => {
        setter(projects);
        tags_setter([]);
    }
    return (
        <Container display='flex' flexDirection='column'>
            <Button onClick={filterHandler} name='Project owner'
            variant='outlined' style={{'marginBottom':'20px'}} color='success'>Project owner</Button>

            <Button onClick={filterHandler} name='Backend'
            variant='outlined' style={{'marginBottom':'20px'}} color='secondary'>Backend</Button>

            <Button onClick={filterHandler} name='Frontend'
            variant='outlined' style={{'marginBottom':'20px'}} color='warning'>Frontend</Button>

            <Button onClick={filterHandler} name='UX'
            variant='outlined' style={{'marginBottom':'20px'}} color='error'>UX</Button>

            <Button onClick={filterHandler} name='Design'
            variant='outlined' style={{'marginBottom':'20px'}}>Design</Button>
            
            <Divider orientation="horizontal" flexItem style={{'marginLeft':'20px', 'marginRight':'20px'}}/>

            <Container display='flex' justifyContent='space-between' margin='20px auto 20px'>
                <Button onClick={filterRefreshHandler}
                variant='outlined' color='error'>Refresh filter</Button>
            </Container>

            <Divider orientation="horizontal" flexItem style={{'marginLeft':'20px', 'marginRight':'20px'}}/>

            <Container display='flex' justifyContent='space-between' marginTop='20px'>
                <Button onClick={projectTypeFilterHandler} name='scrum'
                variant='outlined' color='error'>Scrum</Button>

                <Button onClick={projectTypeFilterHandler} name='kanban'
                variant='outlined'>Kanban</Button>
            </Container>
        </Container>
    )
}

export default FilterList;