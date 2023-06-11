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
        <Container display='flex' flexDirection='column' maxWidth='45%' marginBottom='20px'>
            <Text marginBottom='40px' fontSize='32px' textAlign='center'>Your tasks</Text>     
            {tasks && tasks.map( ({ ...task }) => (
                <TaskListItem key={task.id}
                    task={task}/>
            ))}
        </Container>
    )
}

export default DashboardTasksList;