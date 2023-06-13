import { useParams } from "react-router-dom";

import Container from "../components/UI/Container";

import Sprint from '../components/SprintDashboard/Sprint';



const SprintPage = () => {
    const {id} = useParams();
    return (
        <Container width='70%' margin='0 auto 0'>
            <Sprint id={id}/>
        </Container>
    )
}

export default SprintPage;