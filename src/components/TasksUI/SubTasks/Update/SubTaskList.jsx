import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import Container from "../../../UI/Container";
import Text from "../../../UI/Text";


import SubTaskListItem from "./SubTaskListItem";



const SubTaskList = ({subtasks, task_id, setOpen, setResult, setSuccess}) => {
    const navigate = useNavigate();
    const createRedirectHandler = () => {
        navigate(`/create-subtask/${task_id}`);
    }

    return (
            <Container display='flex' flexDirection='column' width='100%'>
                <Container>
                <Text fontSize='20px' marginRight='10px' textAlign='left' marginBottom='10px'>Sub tasks</Text>
                <Button
                style={{'padding':'2px 5px 2px 5px'}}
                    color='success'
                    variant='outlined'
                    onClick={createRedirectHandler}
                    >
                    create subtask</Button>
                    </Container>
                {subtasks.map(({...subtask})=>(
                    <SubTaskListItem
                        key={subtask.id}
                        subtask={subtask}
                        setOpen={setOpen}
                        setResult={setResult}
                        setSuccess={setSuccess}
                        />
                ))}
            </Container>
        )
}

export default SubTaskList;