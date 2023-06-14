import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Divider from '@mui/material/Divider';

import Container from '../../UI/Container'; 
import Text from '../../UI/Text';
import SprintListItem from './SprintListItem';

import Sprints from '../../../API/SprintsAPI';

import styles from '../../../styles/TaskListItem.module.css';



const SprintList = ({id}) => {  
    const navigate = useNavigate();
    const [sprints, setSprints] = useState([]);
    useEffect(()=>{
        Sprints.getProjectSprints(id, setSprints);
    }, [id])
    const createSprintRedirect = () => {
        navigate(`/create-sprint/${id}`);
    }
    return (
        <>
        <Container display='flex' flexDirection='column'>
            <Text
                marginBottom='20px' 
                marginTop='20px' 
                fontSize='32px' 
                textAlign='center' 
                background='#F1F1F4'
                letterSpacing='3px'
                >
                Sprints
            </Text> 
            <Container
                className={styles.list_item}
                onClick={createSprintRedirect}
                borderRadius='3px'
                padding='5px'
                background='#4279E0'
                textAlign='center'
            >
                <Text color='white'>Create sprint</Text>
            </Container>
            <Divider orientation="horizontal" flexItem style={{'margin':'20px 0 20px'}}/>
            <Container display='flex' flexDirection='column'>
                {sprints && sprints.map( ({ ...sprint }) => (
                    <SprintListItem key={sprint.id}
                        sprint={sprint}/>
                ))}
            </Container>
        </Container>
        </>
    )
}

export default SprintList;