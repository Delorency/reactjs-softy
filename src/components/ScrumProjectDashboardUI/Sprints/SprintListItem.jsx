import { useNavigate } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Container from '../../UI/Container'
import Text from '../../UI/Text'
import SprintBacklogItem from '../../ScrumProjectDashboardUI/Sprints/SprintBacklogItem';



const SprintListItem = ({sprint}) => {
    const navigate = useNavigate();

    const updateBacklogRedirect = () => {
        navigate(`/update-sprint/${sprint.id}`);
    }

    return (
        <>
        <Container
            border='3px solid #DEEBFA'
            borderRadius='3px'
            padding='5px'
            marginBottom='10px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            cursor='pointer'
        >
            <Container display='flex' justifyContent='space-between'>
                <Container display='flex' alignItems='center' justifyContent='space-between' width='10%'> 
                    <Text fontSize='14px' color='#5E6569 ' marginLeft='10px'>#{sprint.id}</Text>
                </Container>
                <Container display='flex' alignItems='center' justifyContent='space-between' width='70%'> 
                    <Text fontSize='14px' color='#5E6569 ' marginLeft='10px'>Start at: {sprint.start_at}</Text>
                    <Text fontSize='14px' color='#5E6569 ' marginLeft='10px'>End at: {sprint.end_at}</Text>
                </Container>

                <Container display='flex' justifyContent='flex-end'> 
                    <Container display='flex' alignItems='center'>
                        <Tooltip title='Settings'>
                            <MoreVertIcon onClick={updateBacklogRedirect} style={{'fontSize':'24px', 'color':'#5E6569', 'marginRight':'2px'}}/>
                        </Tooltip>  
                    </Container>
                </Container>
            </Container>
            <Container>
                {sprint.backlogs.map(({...backlog}) => (
                    <Container>
                        <SprintBacklogItem key = {backlog.id} backlog={backlog} id={sprint.id}/>
                    </Container>
                ))}
            </Container>
        </Container>
        <Divider orientation="horizontal" style={{'marginBottom':'10px'}}/>
        </>
    )
}

export default SprintListItem;