import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

import GroupIcon from '@mui/icons-material/Group';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Container from "../UI/Container";
import Text from "../UI/Text";
import { useNavigate } from "react-router-dom";



const ProposalListItem = ({proposal}) => {
    const navigate = useNavigate();
    const RedirectHandler = () => {
        navigate(`/proposal/${proposal.id}`);
    }
    return (
        <Container
            border='3px solid #DEEBFA'
            borderRadius='10px'
            padding='10px'
            marginBottom='20px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
        >

            <Container marginRight='20px' width='15%'>
                <Tooltip title='Vacant role'>
                    <RememberMeIcon style={{'fontSize':'20px', 'color':'#DEEBFA', 'marginRight':'2px', 'cursor':'pointer'}}/>
                </Tooltip>  
                <Text fontSize='16px' color='#4279E0'>{proposal.role}</Text>
            </Container>

            <Divider orientation="vertical" flexItem style={{'marginLeft':'10px','marginRight':'10px'}}/>

            <Container width='40%'> 
                <Text fontSize='18px' color='#4279E0 ' marginLeft='20px'>{proposal.scrum_project.name}</Text>
            </Container>

            <Divider orientation="vertical" flexItem style={{'marginLeft':'10px','marginRight':'10px'}}/>

            <Container marginRight='20px'>
                <Tooltip title='Project team size'>
                    <GroupIcon style={{'fontSize':'20px', 'color':'#DEEBFA', 'marginRight':'2px', 'cursor':'pointer'}}/>
                </Tooltip>  
                {proposal.scrum_project.team
                ?<Text fontSize='16px' color='#4279E0'>{proposal.scrum_project.team.length}</Text>
                :<Text fontSize='16px' color='#4279E0'>-</Text>
                }
            </Container>
            <Container display='flex' justifyContent='flex-end'>
                <Tooltip title='Settings'>
                    <MoreVertIcon onClick={RedirectHandler} style={{'fontSize':'24px', 'color':'#5E6569', 'marginRight':'2px', 'cursor':'pointer'}}/>
                </Tooltip>  
            </Container>
        </Container>
    )
}

export default ProposalListItem;