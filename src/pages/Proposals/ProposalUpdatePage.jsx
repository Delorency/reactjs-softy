import {useParams} from 'react-router-dom';

import Container from '../../components/UI/Container';

import ProposalUpdate from '../../components/ProposalsUI/ProposalUpdate';



const ProposalUpdatePage = () => {
    const {id} = useParams();

    return (
        <Container display='flex' width='30%' margin='200px auto 0'>
            <ProposalUpdate id = {id}/>
        </Container>
    )
}

export default ProposalUpdatePage;