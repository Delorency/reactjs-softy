import Container from '../../components/UI/Container';
import Heading from '../../components/UI/Heading';

import ProjectsList from '../../components/ManageProjectsUI/ProjectsList';



const ManageProjectsPage = () => {
    return (
        <>
            <Heading title='Manage Projects - Flower'/>
            <Container width='70%' margin='60px auto 0'>
                <ProjectsList/>
            </Container>
        </>
    )
}

export default ManageProjectsPage;