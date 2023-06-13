import {useParams} from 'react-router-dom';

import Container from '../../components/UI/Container';

import ProposalCreate from "../../components/ProposalsUI/ProposalCreate";


const InvitePage = () => {
    const {id} = useParams();
    return (
        <Container width='40%' margin='60px auto 0'>
            <ProposalCreate id={id}/>
        </Container>
    )
}

export default InvitePage;