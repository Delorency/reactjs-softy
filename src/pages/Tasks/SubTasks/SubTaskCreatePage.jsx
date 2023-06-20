import { useParams } from "react-router-dom";
import Container from "../../../components/UI/Container";

import SubTaskCreate from "../../../components/TasksUI/SubTasks/SubTaskCreate";



const SubTaskCreatePage = () => {
    const {id} = useParams();
    return (
        <Container width='40%' margin='60px auto 0'>
            <SubTaskCreate id={id}/>
        </Container>
    )
}

export default SubTaskCreatePage;