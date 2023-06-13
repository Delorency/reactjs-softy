import { useParams } from "react-router-dom";
import Container from "../../../components/UI/Container";

import SprintCreate from "../../../components/ScrumProjectDashboardUI/Sprints/SprintCreate";



const SprintCreatePage = () => {
    const {id} = useParams();
    return (
        <Container width='40%' margin='60px auto 0'>
            <SprintCreate id={id}/>
        </Container>
    )
}

export default SprintCreatePage;