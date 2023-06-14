import {useState, useEffect} from 'react';

import Container from '../UI/Container';
import Text from '../UI/Text';

import {GetRole} from '../../utils/TaskUtils';


const Card = ({task}) => {
    const [role, setRole] = useState(false);

    useEffect(()=>{
        GetRole(task, setRole);
    }, [task])
    return (
        <Container
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
                <Container display='flex' alignItems='center'> 
                    <Text fontSize='18px' color='#4279E0 ' marginLeft='20px'>{task.name}</Text>
                </Container>
                {role
                    ?<Container position='absolute' bottom='0' right='10px'> 
                        <Text fontSize='14px' color='#5E6569 ' marginLeft='20px'>You worker</Text>
                    </Container>
                    : null
                }
            </Container>
        </Container>
    )
}

export default Card;