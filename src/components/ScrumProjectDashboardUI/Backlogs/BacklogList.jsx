import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Divider from '@mui/material/Divider';

import Container from '../../UI/Container'; 
import Text from '../../UI/Text';
import BacklogListItem from './BacklogListItem';

import Backlogs from '../../../API/BacklogsAPI';

import styles from '../../../styles/TaskListItem.module.css';



const BacklogList = ({id}) => {  
    const navigate = useNavigate();
    const [backlogs, setBacklogs] = useState([]);
    useEffect(()=>{
        Backlogs.getProjectBacklogs(id, setBacklogs);
    }, [id])
    const createBacklogRedirect = () => {
        navigate(`/create-backlog/${id}`);
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
                Backlogs
            </Text> 
            <Container
                className={styles.list_item}
                onClick={createBacklogRedirect}
                borderRadius='3px'
                padding='5px'
                background='#4279E0'
                textAlign='center'
            >
                <Text color='white'>Create backlog</Text>
            </Container>
            <Divider orientation="horizontal" flexItem style={{'margin':'20px 0 20px'}}/>
            <Container display='flex' flexDirection='column'>
                {backlogs && backlogs.map( ({ ...backlog }) => (
                    <BacklogListItem key={backlog.id}
                        backlog={backlog}/>
                ))}
            </Container>
        </Container>
        </>
    )
}

export default BacklogList;