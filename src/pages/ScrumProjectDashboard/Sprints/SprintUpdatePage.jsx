import { useParams } from "react-router-dom";

import Container from "../../../components/UI/Container";

import SprintUpdate from "../../../components/ScrumProjectDashboardUI/Sprints/SprintUpdate";



const SprintUpdatePage = () => {
    const {id} = useParams();
    return (
        <Container width='40%' margin='60px auto 0'>
            <SprintUpdate id={id}/>
        </Container>
    )
}

export default SprintUpdatePage;