import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import Container  from '../UI/Container';
import Text  from '../UI/Text';

import Card from './Card';



const SprintTableItem = ({backlog}) => {
    const [tasks,] = useState(backlog.tasks);
    const navigate = useNavigate();

    const redirectHandler = () => {
        navigate(`/create-task/${backlog.id}`)
    }
    return (
        <Container display='flex' width='180vh' justifyContent='space-between'>
            <Container width='10%'>
                <Text>{backlog.name}</Text>
                <Button onClick={redirectHandler}>Create task</Button>
            </Container>

            <Container width='20%'>
                {tasks.filter(task=>task.column==='To Do').map(({...task})=>(
                    <Card key={task.id} task={task}/>
                ))}
            </Container>
                
            <Container width='20%'>
                {tasks.filter(task=>task.column==='In Progress').map(({...task})=>(
                    <Card key={task.id} task={task}/>
                ))}
            </Container>

            <Container width='20%'>
                {tasks.filter(task=>task.column==='In Review').map(({...task})=>(
                    <Card key={task.id} task={task}/>
                ))}
            </Container>

            <Container width='20%'>
                {tasks.filter(task=>task.column==='Done').map(({...task})=>(
                    <Card key={task.id} task={task}/>
                ))}
            </Container>
        </Container>
    )
}

export default SprintTableItem;