import { Button } from '@mui/material';
import Container from '../../components/UI/Container';
import Text from '../../components/UI/Text';
import { useNavigate } from 'react-router-dom';




const ProjectInfo = ({project}) => {
    const navigate = useNavigate();
    const handler = () => {
        navigate('/manage-projects');
    }
    return (
        <Container display='flex' flexDirection='column'>
            <Container marginBottom='30px'>
                <Text color='#2E3133' fontSize='32px'>{project.name}</Text>
            </Container>
            <Container marginBottom='30px'>
                <Text color='#2E3133' fontSize='14px'>{project.description}</Text>
            </Container>
            <Button variant='outlined'
                style={{'background':'#F1F1F4', 'color':'#2E3133'}}
                onClick = {handler}>Back to Project list
            </Button>
        </Container>
    )
}

export default ProjectInfo;