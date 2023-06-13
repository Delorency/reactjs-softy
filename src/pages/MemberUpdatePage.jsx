import { useParams } from "react-router-dom";

import Container from "../components/UI/Container";
import Heading from "../components/UI/Heading";

import UpdateMember from "../components/ProjectsUI/Team/UpdateMember";



const MemberUpdatePage = () => {
    const {id} = useParams();
    return (
        <>
            <Heading title='Update member'/>
            <Container width='40%' margin='60px auto 0'>
                <UpdateMember id={id}/>
            </Container>
        </>
    )
}

export default MemberUpdatePage;