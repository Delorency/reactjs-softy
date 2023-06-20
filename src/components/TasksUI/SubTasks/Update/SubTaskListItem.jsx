import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';

import Button  from '@mui/material/Button';
import Divider  from '@mui/material/Divider';
import Tooltip  from '@mui/material/Tooltip';

import Container from "../../../UI/Container";
import Text from "../../../UI/Text";

import Tasks from '../../../../API/TasksAPI';



const SubTaskListItem = ({subtask, setOpen, setResult, setSuccess}) => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(subtask.close);

    const redirectHandler = () => {
        navigate(`/update-subtask/${subtask.id}`);
    }

    const deleteHandler = () => {
        Tasks.deleteSubTask(subtask.id, navigate, setOpen, setResult, setSuccess);
    }
    return (
        <>
        <Container
            borderRadius='3px'
            padding='5px'
            marginBottom='10px'
            display='flex'
            justifyContent='space-between'
        >
            <Container width='10%' display='flex'>
                <Button color='warning' onClick={redirectHandler}>Update</Button>
                <Tooltip title='Delete'>
                    <DeleteIcon onClick={deleteHandler} style={{'cursor':'pointer','fontSize':'20px', 'color':'#DEEBFA', 'marginRight':'2px'}}/>
                </Tooltip> 
            </Container> 
            <Container width='30%'>
                <Text>{subtask.name}</Text>
            </Container>
            <Container width='30%'>
                <Text>{subtask.end_at}</Text>
            </Container>
            <Container justifyContent='flex-end'>
                {subtask.worker
                    ?<Text>{subtask.worker.user.username}</Text>
                    :<Text>-</Text>
                }
            </Container>
        </Container>
        <Divider orientation="horizontal" style={{'marginBottom':'10px'}}/>
        </>
    )
}

export default SubTaskListItem;