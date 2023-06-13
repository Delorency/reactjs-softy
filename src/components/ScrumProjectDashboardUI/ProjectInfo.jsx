import Container from '../../components/UI/Container';
import Text from '../../components/UI/Text';




const ProjectInfo = ({project}) => {
    return (
        <Container display='flex' flexDirection='column'>
            <Container>
                <Text color='#2E3133' fontSize='32px'>{project.name}</Text>
            </Container>
            <Container>
                <Text color='#2E3133' fontSize='14px'>{project.description}</Text>
            </Container>
        </Container>
    )
}

export default ProjectInfo;