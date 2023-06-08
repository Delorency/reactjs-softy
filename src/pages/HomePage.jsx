import Container from '../components/UI/Container';
import ScrumProjects from '../components/ScrumProjects';


const HomePage = () => {
    return (
        <Container display='flex' maxWidth='60%' margin='50px auto 0'>
            <ScrumProjects/>
        </Container>
    )
}

export default HomePage