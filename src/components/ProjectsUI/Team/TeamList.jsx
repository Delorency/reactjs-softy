import { useNavigate } from 'react-router-dom';

import Container from '../../UI/Container';
import Text from '../../UI/Text';

import TeamListItem from './TeamListItem';



const TeamList = ({project}) => {
    const navigate = useNavigate();
    const handler = () => {
        navigate(`/invite/${project.id}`);
    }
    return (
        <Container>
            <Container
                onClick={handler}
                border='3px solid #DEEBFA'
                borderRadius='10px'
                padding='10px 20px'
                marginBottom='10px'
                textAlign='center'
                cursor='pointer'
            >
                <Text>Invite new worker</Text>
            </Container>
            {project.team && project.team.map(({...member})=>(
                <TeamListItem key={member.id} member={member}/>
            ))}
        </Container>
    )
}

export default TeamList;