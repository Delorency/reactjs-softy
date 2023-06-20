import Container from "../../../UI/Container";
import Text from "../../../UI/Text";


import SubTaskListItem from "./SubTaskListItem";



const SubTaskList = ({subtasks, setOpen, setResult, setSuccess}) => {
    return (
            <Container display='flex' flexDirection='column' width='100%'>
                <Text fontSize='20px' textAlign='left' marginBottom='10px'>Sub tasks</Text>
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