import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import Container from "../UI/Container";
import Text from "../UI/Text";

import Proposals from '../../API/ProposalsAPI';


const ProposalUpdate = ({id}) => {
    const navigate = useNavigate();
    
    const redirectHandler = () => {
        navigate('/proposals')
    }

    const AcceptHandler = () => {
        Proposals.acceptProposal(id, redirectHandler);
    }
    const DeclainHandler = () => {
        Proposals.declainProposal(id, redirectHandler);
    }
    return (
        <Container margin='0 auto 0' display='flex' flexDirection='column' textAlign='center' width='50%'>
            <Text fontSize='24px'>Proposal desision</Text>
            <Container display='flex' justifyContent='space-between' alignItems='center' margin='20px 0 20px'>
                <Button
                    onClick={AcceptHandler}
                    type='submit'
                    color='success'
                    size='medium'
                    variant='outlined'
                >Accept
                </Button>
                <Button
                    onClick={DeclainHandler}
                    type='submit'
                    color='error'
                    size='medium'
                    variant='outlined'
                >Declain
                </Button>
            </Container>
            <Button
                onClick={redirectHandler}
                type='submit'
                color='success'
                size='medium'
                variant='outlined'
                style={{'background':'#F1F1F4', 'color':'#2E3133', 'borderColor':'#2E3133'}}
            >Back
            </Button>
        </Container>
    )
}

export default ProposalUpdate;