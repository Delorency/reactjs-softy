import {useState, useEffect} from 'react';

import Container from '../UI/Container'
import Text from '../UI/Text'
import TaskListItem from './TaskListItem';

import Tasks from '../../API/TasksAPI';



const DashboardTasksList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        Tasks.getAllUserTasks(setTasks);
    }, [])

    return (
        <Container display='flex' flexDirection='column' width='30%'>
            <Text marginBottom='40px'
                fontSize='32px'
                textAlign='center'
                background='#F1F1F4'
                letterSpacing='3px'
                >
                Your tasks
            </Text>    
            {tasks && tasks.map( ({ ...task }) => (
                <TaskListItem key={task.id}
                    task={task}/>
            ))}
        </Container>
    )
}

export default DashboardTasksList;