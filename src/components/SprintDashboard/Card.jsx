import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import Container from '../UI/Container';
import Text from '../UI/Text';

import {GetRole} from '../../utils/TaskUtils';


const Card = ({task}) => {
    const [role, setRole] = useState(false);
    const navigate = useNavigate();

    const redirectHandler = () => {
        navigate(`/view-task/${task.id}`);
    }

    useEffect(()=>{
        GetRole(task, setRole);
    }, [task])
    return (
        <Container
            onClick={redirectHandler}
            border='2px solid #5E6569'
            borderRadius='5px'
            marginBottom='20px'
            position='relative'
            cursor='pointer'
        >
            <Container
                position='absolute' top='10px' left='10px'> 
                <Text fontSize='14px' color='#5E6569 ' marginLeft='20px'>#{task.id}</Text>
            </Container>
            <Container 
                display='flex'
                flexDirection='column'
                margin='30px auto'>
                <Container> 
                    <Text fontSize='18px' color='#4279E0 ' marginLeft='20px'>{task.name}</Text>
                </Container>
                {role
                    ?<Container position='absolute' bottom='0' right='10px'> 
                        <Text fontSize='14px' color='#5E6569 ' marginLeft='20px'>You worker</Text>
                    </Container>
                    : null
                }
                <Container position='absolute' bottom='0' left='10px'>
                    <Tooltip title='End at'>
                        <AccessTimeRoundedIcon style={{'fontSize':'20px', 'color':'#5E6569', 'marginRight':'2px'}}/>
                    </Tooltip>
                    {task.end_at
                    ? <Text fontSize='12px' color='#FFC200'>{task.end_at}</Text>
                    : <Text fontSize='12px' color='#4279E0'>-</Text>
                    }
                </Container>
            </Container>
        </Container>
    )
}

export default Card;