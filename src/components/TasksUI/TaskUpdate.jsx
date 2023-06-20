import {useState, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import Container from "../UI/Container";
import Form from "../UI/Form";

import Tasks from '../../API/TasksAPI';

import SubTaskList from './SubTasks/Update/SubTaskList';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const TaskUpdate = ({task}) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    const handleClose = () => {
        setOpen(false);
    };

    const handleBack = () => {
        navigate(-1);
    }

    const handlerRedirect = () => {
        Tasks.checkRole(task.id, navigate, setOpen, setResult, setSuccess);
    }

    return (
        <>
        <Container
            margin='0 auto 0'
            borderRadius='10px'
            padding='20px'
            marginBottom='20px'
            display='flex'
            flexDirection='column'
        >
            <Container display='flex' flexDirection='column'>
                <Form>
                    <input
                        type='text'
                        name='name'
                        placeholder={task.name}
                    /> 
                   <textarea
                        type='text'
                        name='description'
                        placeholder={task.description}
                        rows="10" cols="65"
                    />
                </Form>
                <Container display='flex' justifyContent='flex-start'>
                    <SubTaskList subtasks={task.task_items} task_id={task.id} setOpen={setOpen} setResult={setResult} setSuccess={setSuccess}/>
                </Container>
                <Button
                    color='success'
                    variant='outlined'
                    onClick={handlerRedirect}>
                    Update task</Button>
                <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handleBack}>Back</Button>
            </Container>
        </Container>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {success
        ?
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {result}
            </Alert>
        :
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {result}
            </Alert>
        }
    </Snackbar>
    </>
    )
}


export default TaskUpdate;