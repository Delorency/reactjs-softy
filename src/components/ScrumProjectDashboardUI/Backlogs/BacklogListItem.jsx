import {useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Container from '../../UI/Container'
import Text from '../../UI/Text'

import styles from '../../../styles/TaskListItem.module.css';



const BacklogListItem = ({backlog}) => {
    const navigate = useNavigate();
    const [color, setColor] = useState();
    useEffect(()=>{
        if (backlog.difficult === 'Easy'){
            setColor('#75D674')
        }else if (backlog.difficult === 'Medium'){
            setColor('#FFC200')
        } else if (backlog.difficult === 'Hard'){
            setColor('#C91A39')
        }
    }, [backlog.difficult, color])
    const updateBacklogRedirect = () => {
        navigate(`/update-backlog/${backlog.id}`);
    }
    return (
        <Container
            className={styles.list_item}
            borderRadius='3px'
            padding='5px'
            marginBottom='10px'
            display='flex'
            justifyContent='space-between'
            background='#F1F1F4'
        >
            <Container display='flex' alignItems='center' width='5%'> 
                <Text fontSize='16px' color='#4279E0 ' marginLeft='10px'>#{backlog.id}</Text>
            </Container>

            <Container display='flex' alignItems='center' width='60%'> 
                <Text fontSize='16px' color='#5E6569 ' marginLeft='10px'>{backlog.name}</Text>
            </Container>

            <Divider orientation="vertical" flexItem style={{'marginLeft':'10px','marginRight':'10px'}}/>

            <Container display='flex' width='15%'> 
                <Container display='flex' alignItems='center'>
                    <Tooltip title='Backlog difficult'>
                        <FitnessCenterIcon style={{'fontSize':'24px', 'color':'#5E6569', 'marginRight':'5px'}}/>
                    </Tooltip>  
                    <Text fontSize='16px' color={color}>{backlog.difficult}</Text>
                </Container>
            </Container>

            <Container display='flex' justifyContent='flex-end'> 
                <Container display='flex' alignItems='center'>
                    <Tooltip title='Settings'>
                        <MoreVertIcon onClick={updateBacklogRedirect} style={{'fontSize':'24px', 'color':'#5E6569', 'marginRight':'2px'}}/>
                    </Tooltip>  
                </Container>
            </Container>
        </Container>
    )
}

export default BacklogListItem;