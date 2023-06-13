import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TableChartIcon from '@mui/icons-material/TableChart';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import Container from '../../components/UI/Container';
import Text from '../../components/UI/Text';
import Heading from '../../components/UI/Heading';

import ProjectCreate from '../../components/ManageProjectsUI/ProjectCreate';

import styles from '../../styles/Container.module.css'



const ProjectCreatePage = () => {
    const navigate = useNavigate()
    const [is_scrum, setScrum] = useState(true);
    const [openForm, setOpenForm] = useState(false);

    const handlerScrum = () => {
        setScrum(true);
        setOpenForm(true);
    }
    const handlerNotScrum = () => {
        setScrum(false);
        setOpenForm(true);
    }
    const handlerProjectList = () => {
        navigate('/manage-projects');
    }
    return (
        <>
            <Heading title='Create project - Flower'/>
            <Container display='flex' width='80%' margin='50px auto 0'>

                {openForm
                    ?<ProjectCreate is_scrum={is_scrum}/>
                    :<Container display='flex' flexDirection='column' margin='0 auto 0'>
                        <Container
                            onClick={handlerScrum}
                            cursor='pointer'
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            border='3px solid #DEEBFA'
                            borderRadius='10px'
                            padding='20px'
                            marginBottom='20px'
                            className={styles.container}
                            >
                            <Tooltip title='Scrum project'>
                                <AcUnitIcon style={{'fontSize':'64px', 'color':'#2E3133'}}/>
                            </Tooltip>
                            <Container display='flex' flexDirection='column'>
                                <Text fontSize='32px'>Scrum</Text>
                                <Text>Prioritize and solve your tasks in short time cycles.</Text>
                            </Container>
                        </Container>

                        <Container
                            onClick={handlerNotScrum}
                            cursor='pointer'
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            border='3px solid #DEEBFA'
                            borderRadius='10px'
                            padding='20px'
                            marginBottom='20px'
                            className={styles.container}
                            >
                            <Tooltip title='Kanban project'>
                                <TableChartIcon style={{'fontSize':'64px', 'color':'#2E3133'}}/>
                            </Tooltip>
                            <Container display='flex' flexDirection='column'>
                                <Text fontSize='32px'>Kanban</Text>
                                <Text>Keep a constant workflow on independent tasks.</Text>
                            </Container>
                        </Container>
                        <Button style={{'background':'#F1F1F4'}} onClick={handlerProjectList}>Back</Button>
                    </Container>
                }
            </Container>
        </>
    )
}

export default ProjectCreatePage;