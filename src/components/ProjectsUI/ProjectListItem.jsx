import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TableChartIcon from '@mui/icons-material/TableChart';
import Tooltip from '@mui/material/Tooltip';
import GroupIcon from '@mui/icons-material/Group';

import Container from '../UI/Container'
import Text from '../UI/Text'

import {GetRole} from '../../utils/ProjectUtils';

import styles from '../../styles/Container.module.css'



const ProjectListItem = ({project}) => {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        GetRole(project.team, setRole);
    }, [project.team])

    const redirectHandler = () => {
        navigate(`/project/${project.id}`);
    }
    return (
        <Container
            onClick={redirectHandler}
            className={styles.container}
            border='3px solid #DEEBFA'
            borderRadius='10px'
            padding='20px'
            marginBottom='20px'
            display='flex'
            flexDirection='column'
        >
            <Container paddingTop='10px' display='flex' alignItems='center'> 
                {project.is_scrum
                    ? <AcUnitIcon style={{'fontSize':'64px', 'color':'#5EEBFA'}}/>
                    : <TableChartIcon style={{'fontSize':'64px', 'color':'#5EEBFA'}}/>
                }
                <Text fontSize='18px' color='#4279E0 ' marginLeft='20px'>{project.name}</Text>
            </Container>

            <Container paddingTop='10px' display='flex' alignItems='center'> 
                <Text fontSize='12px' marginLeft='20px'>{project.description}</Text>
            </Container>
            <Container marginTop='2%' display='flex' justifyContent='space-between' alignItems='center'>
                <Container marginRight='20px'>
                    <Tooltip title='Your project role'>
                        <RememberMeIcon style={{'fontSize':'20px', 'color':'#DEEBFA', 'marginRight':'2px'}}/>
                    </Tooltip>  
                    {project.team
                        ?<Text fontSize='12px' color='#4279E0'>{role}</Text>
                        :<Text fontSize='12px' color='#4279E0'>-</Text>
                    }
                </Container>
                <Container display='flex' alignItems='center'>
                    <Container marginRight='20px'>
                        <Tooltip title='Project team size'>
                            <GroupIcon style={{'fontSize':'20px', 'color':'#DEEBFA', 'marginRight':'2px'}}/>
                        </Tooltip>  
                        {project.team
                            ?<Text fontSize='12px' color='#DEEBFA'>{project.team.length}</Text>
                            :<Text fontSize='12px' color='#DEEBFA'>0</Text>
                        }
                    </Container>
                    {project.is_private
                        ?<Tooltip title='Private project'><LockIcon style={{'fontSize':'20px', 'color':'#DEEBFA'}}/></Tooltip>
                        :<Tooltip title='Public project'><LockOpenIcon style={{'fontSize':'20px', 'color':'#DEEBFA'}}/></Tooltip>
                    }  
                </Container>
            </Container>
        </Container>
    )
}

export default ProjectListItem;