import Container from "../components/UI/Container";
import { useParams } from "react-router-dom";

import BacklogCreate from "../components/ScrumProjectDashboardUI/Backlogs/BacklogCreate";



const BacklogCreatePage = () => {
    const {id} = useParams();
    return (
        <Container width='40%' margin='60px auto 0'>
            <BacklogCreate id={id}/>
        </Container>
    )
}

export default BacklogCreatePage;