import {useParams} from 'react-router-dom';

import Container from "../../components/UI/Container";

import TaskUpdate from '../../components/TasksUI/TaskUpdate';



const TaskUpdatePage = () => {
    const {id} = useParams()
    return (
        <Container width='40%' margin='60px auto 0'>
            <TaskUpdate id ={id}/>
        </Container>
    )
}

export default TaskUpdatePage;