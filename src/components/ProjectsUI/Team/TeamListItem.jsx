import {useNavigate} from 'react-router-dom';

import Divider from '@mui/material/Divider';

import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Container from "../../UI/Container";
import Text from "../../UI/Text";



const TeamListItem = ({member}) => {
    const navigate = useNavigate();
    const updateBacklogRedirect = () => {
        navigate(`/update-member/${member.id}`);
    }
    return (
        <Container
            border='3px solid #DEEBFA'
            borderRadius='10px'
            padding='10px 20px'
            marginBottom='10px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            background='white'
            cursor='pointer'
        >
            <Container width='5%'>
                <Text>{member.user.username}</Text>
            </Container>

            <Divider orientation="vertical" flexItem/>

            <Container width='60%'>
                <Text>{member.role}</Text>
            </Container>

            <Container display='flex' alignItems='center'>
                <Tooltip title='Settings'>
                    <MoreVertIcon onClick={updateBacklogRedirect} style={{'fontSize':'24px', 'color':'#5E6569', 'marginRight':'2px'}}/>
                </Tooltip>  
            </Container>
        </Container>
    )
}

export default TeamListItem;