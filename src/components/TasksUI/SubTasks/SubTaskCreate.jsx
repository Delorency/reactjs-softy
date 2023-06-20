import {useState, useEffect, forwardRef} from 'react';
import { useNavigate } from 'react-router-dom';

import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';


import Container from "../../UI/Container";
import Text from "../../UI/Text";
import Form from "../../UI/Form";

import Tasks from '../../../API/TasksAPI';

import SubTaskWorkerListItem from './Update/SubTaskWorkerListItem';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const SubTaskCreate = ({id}) => {
    const navigate = useNavigate();
    const [task, setTask] = useState({});
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');

    const handleToBack = () => {
        navigate(`/view-task/${id}`);
    }

    useEffect(()=>{
        Tasks.getTask(id, setTask)
    }, [id]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const CreateHandler = async (event) => {
        event.preventDefault();
        await Tasks.createSubTask(
            event.target.name.value,
            value,
            task.id,
            setResult,
            setOpen,
            handleToBack
        )
    }
    
    const handleClose = () => {
        setOpen(false);
    };
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
            <Container display='flex' flexDirection='column' margin='0 auto 0'>
                <Text fontSize='48px' marginBottom='30px'>Create Subtask</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={CreateHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                    />   
                    <FormControl style={{'width':'80%'}}>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >   
                        <Container display='flex'>
                            <Container>
                                <FormControlLabel 
                                value='' control={<Radio/>}/>
                            </Container>
                            <Container width='50%'>
                                <Text>No worker</Text>
                            </Container>
                        </Container>
                        {task.workers && task.workers.map(({...worker})=>(
                            <Container display='flex' key={worker.id}>
                                <Container>
                                    <FormControlLabel 
                                    value={worker.id} control={<Radio/>}/>
                                </Container>
                                <Container width='100%'>
                                    <SubTaskWorkerListItem worker={worker}/>
                                </Container>
                            </Container>
                        ))}    
                        </RadioGroup>
                        </FormControl>       
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Create new subtask</Button>
                    <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handleToBack}>Back</Button>
                </Form>
            </Container>
        </Container>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {result}
            </Alert>
        </Snackbar>
        </>
    )
}

export default SubTaskCreate;