import { useParams } from "react-router-dom";

import Container from "../../../components/UI/Container";

import SubTaskUpdate from '../../../components/TasksUI/SubTasks/Update/SubTaskUpdate';


const SubTaskUpdatePage = () => {
    const {id} = useParams();

    return (
        <Container width='40%' margin='60px auto 0'>
            <SubTaskUpdate id={id}/>
        </Container>
    )
}

export default SubTaskUpdatePage;