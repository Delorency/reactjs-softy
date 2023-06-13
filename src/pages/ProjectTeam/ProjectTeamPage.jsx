import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import Container from '../../components/UI/Container';
import Text from '../../components/UI/Text';
import Heading from '../../components/UI/Heading';

import SubNavigation from '../../components/ProjectsUI/SubNavigation';

import Scrums from '../../API/ScrumProjectsAPI';
import TeamList from '../../components/ProjectsUI/Team/TeamList';



const ProjectTeamPage = () => {
    const {id} = useParams();
    const [project, setProject] = useState();
    useEffect(()=>{
        Scrums.getScrumProject(id, setProject)
    }, [id])

    return (
        <>
            <Heading title='Project team - Flower'/>
            <Container width='40%' margin='10px auto 10px'>
                <SubNavigation id={id}/>
            </Container>
            <Container display='flex' flexDirection='column' width='90%' margin='30px auto 0'>
                <Text margin='0 auto 20px' fontSize='24px'>Workers</Text>
                <Container width='40%' margin='0 auto 0'>
                    {project
                    ?<TeamList project={project}/>
                    :null
                    }
                </Container>
            </Container>
        </>
    )
}

export default ProjectTeamPage;