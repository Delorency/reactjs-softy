import {useNavigate} from 'react-router-dom';
import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import SegmentIcon from '@mui/icons-material/Segment';
import Tooltip from '@mui/material/Tooltip';
import GroupIcon from '@mui/icons-material/Group';

import Container from '../UI/Container'
import Text from '../UI/Text'

import styles from '../../styles/TaskListItem.module.css'



const TaskListItem = ({task}) => {
    const navigate = useNavigate();
    const handler = () =>{
        navigate(`/task/${task.id}`);
    }
    return (
        <Container onClick={handler}
            border='3px solid #DEEBFA'
            borderRadius='10px'
            padding='10px 20px'
            marginBottom='10px'
            display='flex'
            flexDirection='column'
            background='white'
            className={styles.list_item}
        >
            <Container marginBottom='10px'>
                <Container
                    height='8px'
                    width='15%'
                    background={task.color}
                    borderRadius='10px'
                />
            </Container>
            <Container display='flex' justifyContent='space-between' color='#404040'>
                {task.name}
            </Container>

            <Container display='flex' justifyContent='space-between' alignItems='center'>

                <Container display='flex' alignItems='end'>
                    <ViewColumnRoundedIcon style={{'fontSize':'20px', 'color':'#404040', 'marginRight':'2px'}}/>
                    <Text fontSize='14px' color='#FFC200'>{task.column}</Text>
                </Container>

                <Container marginTop='2%' display='flex' justifyContent='flex-end'>
                    <Container marginRight='20px'>
                        <Tooltip title='Workers quantity'>
                            <AccessTimeRoundedIcon style={{'fontSize':'20px', 'color':'#404040', 'marginRight':'2px'}}/>
                        </Tooltip>
                        {task.end_at
                        ? <Text fontSize='12px' color='black'>{task.end_at}</Text>
                        : <Text fontSize='12px' color='black'>-</Text>
                        }
                    </Container>

                    <Container marginRight='20px'>
                        <Tooltip title='Workers quantity'>
                            <GroupIcon style={{'fontSize':'20px', 'color':'#404040', 'marginRight':'2px'}}/>
                        </Tooltip>
                        <Text fontSize='12px' color='black'>{task.workers.length}</Text>
                    </Container>

                    <Container marginRight='20px'>
                        <Tooltip title='Task items quantity'>
                            <SegmentIcon style={{'fontSize':'20px', 'color':'#404040', 'marginRight':'2px'}}/>
                        </Tooltip>  
                        {task.task_items
                            ?<Text fontSize='12px' color='black'>{task.task_items.length}</Text>
                            :<Text fontSize='12px' color='black'>0</Text>
                        }
                    </Container>

                </Container>

            </Container>
        </Container>
    )
}

export default TaskListItem;