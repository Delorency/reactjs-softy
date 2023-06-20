import Divider from '@mui/material/Divider';

import Container from '../UI/Container';
import Text from '../UI/Text';

import SprintTableRow from './SprintTableRow';



const Sprint = ({sprint}) => {
    return (
        <>
        <Container display='flex' width='85vw%' justifyContent='space-between' marginBottom='20px' textAlign='center'>
            <Container width='10%'>
                <Text fontSize='28px'>Backlogs</Text>
            </Container>

            <Container width='20%'>
                <Text fontSize='28px'>To Do</Text>
            </Container>
                
            <Container width='20%'>
                <Text fontSize='28px'>In Progress</Text>
            </Container>

            <Container width='20%'>
                <Text fontSize='28px'>In Review</Text>
            </Container>

            <Container width='20%'>
                <Text fontSize='28px'>Done</Text>
            </Container>
        </Container>
        <Container display='flex' flexDirection='column' justifyContent='space-between'>
        {sprint.backlogs && sprint.backlogs.map(({...backlog})=>(
            <Container key={backlog.id+10000}>
                <SprintTableRow key={backlog.id} backlog={backlog}/>
                <Divider key={backlog.id+1000}
                orientation="horizontal" flexItem style={{'marginTop':'20px','marginBottom':'20px'}}/>
            </Container>
        ))}
        </Container>
        </>
    )
}

export default Sprint;