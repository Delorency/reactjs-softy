import {useState, useEffect} from 'react';

import Container from '../UI/Container'
import Text from '../UI/Text';

import ProposalListItem from './ProposalListItem';

import Proposals from '../../API/ProposalsAPI';


const ProposalList = () => {
    const [proposals, setProposals] = useState([]);

    useEffect(()=>{
        Proposals.getMyProposals(setProposals);
      }, [])
    return (
        <Container display='flex' flexDirection='column'>
            <Text
                marginBottom='40px' 
                fontSize='32px' 
                textAlign='center' 
                background='#F1F1F4'
                letterSpacing='3px'
                >
                Your Proposals
            </Text>   
            {proposals && proposals.map( ({ ...proposal}) => (
                <ProposalListItem key={proposal.id}
                proposal={proposal}/>
            ))}
        </Container>
    )
}

export default ProposalList;