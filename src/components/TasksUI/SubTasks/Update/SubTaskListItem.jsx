import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Button  from '@mui/material/Button';
import Divider  from '@mui/material/Divider';

import Container from "../../../UI/Container";
import Text from "../../../UI/Text";
import Checkbox from '@mui/material/Checkbox';

import Tasks from '../../../../API/TasksAPI';


const SubTaskListItem = ({subtask, setOpen, setResult, setSuccess}) => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(subtask.close);

    const redirectHandler = () => {
        navigate(`/update-subtask/${subtask.id}`);
    }
    return (
        <>
        <Container
            display='flex'
            justifyContent='flex-start'
        >
            <Container width='20%'>
                {check
                    ?<Checkbox checked/>
                    :<Checkbox/>
                }   
            </Container>
            <Container width='40%'>
                <Text>{subtask.name}</Text>
            </Container>
            <Container marginRight='20px' width='40%'>
                <Text>{subtask.end_at}</Text>
            </Container>
            <Container width='10%'>
                <Button color='warning' onClick={redirectHandler}>Update</Button>
            </Container>
        </Container>
        <Divider orientation="horizontal" style={{'marginBottom':'10px'}}/>
        </>
    )
}

export default SubTaskListItem;