import Divider from '@mui/material/Divider';

import Container from '../UI/Container';
import Text from '../UI/Text';

import SprintTableItem from './SprintTableItem';



const Sprint = ({sprint}) => {
    return (
        <>
        <Container width='100%' display='flex' justifyContent='space-between' margin='0px auto 40px'>
            <Text
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >Backlogs</Text>
            <Text
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >To Do</Text>
            <Text
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >In Progress</Text>

            <Text
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >In Review</Text>

            <Text
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >Done</Text>
        </Container>
        <Container display='flex' flexDirection='column' justifyContent='space-between'>
        {sprint.backlogs && sprint.backlogs.map(({...backlog})=>(
            <Container key={backlog.id+10000}>
                <SprintTableItem key={backlog.id} backlog={backlog}/>
                <Divider key={backlog.id+1000}
                orientation="horizontal" flexItem style={{'marginTop':'20px','marginBottom':'20px'}}/>
            </Container>
        ))}
        </Container>
        </>
    )
}

export default Sprint;