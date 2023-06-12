import { useParams } from "react-router-dom";

import Container from "../components/UI/Container";

import BacklogUpdate from "../components/ScrumProjectDashboardUI/Backlogs/BacklogUpdate";



const BacklogUpdatePage = () => {
    const {id} = useParams();
    return (
        <Container width='40%' margin='60px auto 0'>
            <BacklogUpdate id={id}/>
        </Container>
    )
}

export default BacklogUpdatePage;