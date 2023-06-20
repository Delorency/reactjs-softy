import {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import Container from "../UI/Container";
import Form from "../UI/Form";

import Tasks from '../../API/TasksAPI';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const TaskUpdate = ({id}) => {
    const navigate = useNavigate();
    const [task, setTask] = useState({});
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);


    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        Tasks.getTask(
            id,
            setTask
        )
    }, [id])

    useEffect(()=>{
        Tasks.updateTask(
            id,
            setTask,
            setResult,
            setOpen,
            setSuccess
        )
    }, [id])

    const UpdateHandler = () => {
        console.log('5');
    }
    const handleBack = () => {
        navigate(-1);
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
                <Form onSubmit={UpdateHandler}>
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
                        readOnly
                    />
                    <Container display='flex' justifyContent='space-between' marginBottom='20px'>               
                        <Button
                            type='submit'
                            color='success'
                            size='medium'
                            variant='outlined'
                        >Update backlog</Button>
                    </Container>
                </Form>
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