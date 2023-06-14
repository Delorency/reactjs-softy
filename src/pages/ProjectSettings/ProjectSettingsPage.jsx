import {useParams } from "react-router-dom";

import Container from '../../components/UI/Container';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import SubNavigation from "../../components/ProjectsUI/SubNavigation";
import ProjectUpdate from "../../components/ProjectsUI/Settings/ProjectUpdate";


const ProjectSettingsPage = () => {
    const {id} = useParams();

    return (
        <>
            <Heading title='Project settings - Flower'/>
            <Container width='40%' margin='10px auto 10px'>
                <SubNavigation id={id}/>
            </Container>
            <Container display='flex' flexDirection='column' width='90%' margin='30px auto 0'>
                <Text margin='0 auto 20px' fontSize='24px'>Project Settings</Text>
                <Container width='40%' margin='0 auto 0'>
                    <ProjectUpdate id={id}/>
                </Container>
            </Container>
        </>
    )
}

export default ProjectSettingsPage;