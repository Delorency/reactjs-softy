import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Divider from '@mui/material/Divider';
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



const ProjectItem = ({project}) => {
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const handler = () =>{
        navigate(`/project/${project.id}`);
    }

    useEffect(()=>{
        GetRole(project.team, setRole);
    }, [project.team])
    return (
        <Container
            onClick={handler}
            className={styles.container}
            border='3px solid #DEEBFA'
            borderRadius='5px'
            padding='15px'
            marginBottom='20px'
            display='flex'
            flexDirection='row'
        >
            <Container display='flex' alignItems='center' width='25%'> 
                {project.is_scrum
                    ? <AcUnitIcon style={{'fontSize':'32px', 'color':'#5EEBFA'}}/>
                    : <TableChartIcon style={{'fontSize':'32px', 'color':'#5EEBFA'}}/>
                }
                <Text fontSize='16px' color='#5E6569' marginLeft='10px'>{project.name}</Text>
            </Container>

            <Divider orientation="vertical" flexItem style={{'marginLeft':'10px', 'marginRight':'10px'}}/>

            <Container display='flex' width='25%'> 
                <Container display='flex' alignItems='center'>
                    <Tooltip title='Your project role'>
                        <RememberMeIcon style={{'fontSize':'32px', 'color':'#DEEBFA', 'marginRight':'2px'}}/>
                    </Tooltip>  
                    {project.team
                        ?<Text fontSize='16px' color='#5E6569'>{role}</Text>
                        :<Text fontSize='16px' color='#5E6569'>-</Text>
                    }
                </Container>
            </Container>

            <Divider orientation="vertical" flexItem style={{'marginLeft':'10px', 'marginRight':'10px'}}/>

            <Container display='flex' width='25%'> 
                <Container display='flex' alignItems='center'>
                    <Tooltip title='Project team size'>
                        <GroupIcon style={{'fontSize':'32px', 'color':'#DEEBFA', 'marginRight':'5px'}}/>
                    </Tooltip>  
                    {project.team
                        ?<Text fontSize='16px' color='#5E6569'>{project.team.length}</Text>
                        :<Text fontSize='16px' color='#5E6569'>0</Text>
                    }
                </Container>
            </Container>

            <Container display='flex' width='25%' justifyContent='flex-end'> 
                <Container display='flex' alignItems='center'>
                    {project.is_private
                        ?<Tooltip title='Private project'><LockIcon style={{'fontSize':'20px', 'color':'#5E6569'}}/></Tooltip>
                        :<Tooltip title='Public project'><LockOpenIcon style={{'fontSize':'20px', 'color':'#DEEBFA'}}/></Tooltip>
                    }  
                </Container>
            </Container>
        </Container>
    )
}

export default ProjectItem;