import { useParams } from 'react-router-dom';

import TaskCreate from '../../components/TasksUI/TaskCreate';

import Container from '../../components/UI/Container';


const TaskCreatePage = () => {
    const {id} = useParams();
    return (
        <Container width='40%' margin='60px auto 0'>
            <TaskCreate id={id}/>
        </Container>
    )
}


export default TaskCreatePage