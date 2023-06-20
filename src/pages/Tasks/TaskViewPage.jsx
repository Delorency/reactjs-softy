import {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom';

import Container from "../../components/UI/Container";

import TaskView from '../../components/TasksUI/TaskView';

import Tasks from '../../API/TasksAPI';



const TaskViewPage = () => {
    const {id} = useParams();
    const [task, setTask] = useState(false);

    useEffect(()=>{
        Tasks.getTask(id, setTask);
    },[id]);

    return (
        <Container width='40%' margin='60px auto 0'>
            {task
                ?<TaskView task ={task}/>
                :null
            }
        </Container>
    )
}

export default TaskViewPage;