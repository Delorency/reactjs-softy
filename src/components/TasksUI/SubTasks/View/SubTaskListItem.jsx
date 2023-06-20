import {useState} from 'react';

import Container from "../../../UI/Container";
import Text from "../../../UI/Text";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

import Tasks from '../../../../API/TasksAPI';


const SubTaskListItem = ({subtask, setOpen, setResult, setSuccess}) => {
    const [check, setCheck] = useState(subtask.close);

    const handler = () => {
        Tasks.changeCloseSubTask(
            subtask.id,
            !check, 
            setCheck,
            setOpen,
            setResult,
            setSuccess);
    }  
    return (
        <>
        <Container
            borderRadius='3px'
            padding='5px'
            marginBottom='10px'
            display='flex'
            justifyContent='flex-start'
        >
            <Container>
                {check
                    ?<Checkbox checked onClick={handler}/>
                    :<Checkbox onClick={handler}/>
                }   
            </Container>
            <Container marginRight='20px'>
                <Text>{subtask.name}</Text>
            </Container>
            <Container>
                <Text>{subtask.end_at}</Text>
            </Container>
        </Container>
        <Divider orientation="horizontal" style={{'marginBottom':'10px'}}/>
        </>
    )
}

export default SubTaskListItem;