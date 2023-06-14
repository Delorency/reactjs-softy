import {useState, useEffect} from 'react';

import { useParams } from "react-router-dom";

import Container from "../../components/UI/Container";

import Sprint from '../../components/SprintDashboard/Sprint';

import Sprints from '../../API/SprintsAPI';

import SubNavigation from '../../components/SprintDashboard/SubNavigation';



const SprintPage = () => {
    const {id} = useParams();
    const [sprint, setSprint] = useState();
    
    useEffect(()=>{
        Sprints.getSprint(id, setSprint);
    }, [id])
    return (
        <>
            {sprint
                ?<Container width='40%' margin='10px auto 10px'>
                    <SubNavigation id={sprint.scrum_project}/>
                </Container>
                :null
            }
            <Container width='80%' margin='0 auto 0'>
                {sprint
                    ? <Sprint sprint={sprint}/>
                    : null
                }
            </Container>
        </>
    )
}

export default SprintPage;