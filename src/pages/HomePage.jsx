import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '../components/UI/Container';
import Heading from '../components/UI/Heading';
import ScrumProjectsList from '../components/ScrumProjectsUI/ScrumProjectsList';
import KanbanProjectsList from '../components/KanbanProjectsUI/KanbanProjectsList';
import DashboardTasksList from '../components/TasksUI/DashboardTasksList';


const HomePage = () => {
    const navigate = useNavigate();
    const manageProjectRedirect = () => {
        navigate('/manage-projects');
    }
    return (
        <>
            <Heading title='Dashboard - Flower'/>
            <Container width='90%' margin='60px auto 0'>
                <Container display='flex' justifyContent='space-evenly'>
                    <Container display='flex' flexDirection='column' width='50%'>
                        <Container display='flex' justifyContent='space-between'>
                            <ScrumProjectsList/>
                            <KanbanProjectsList/>
                        </Container>
                        <Button onClick={manageProjectRedirect}
                            style={{'width':'100%', 'background':'#26B2AC'}}
                            type='button'
                            color='primary'
                            size='medium'
                            variant='contained'
                        >
                            Manage projects
                        </Button>
                    </Container>
                    <Divider orientation="vertical" flexItem/>
                    <DashboardTasksList/>
                </Container>
            </Container>
        </>
    )
}

export default HomePage