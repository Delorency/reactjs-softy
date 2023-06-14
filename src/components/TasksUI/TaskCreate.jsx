import {useState,forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import Container from '../UI/Container'; 
import Text from '../UI/Text'; 
import Form from '../UI/Form';

import Tasks from '../../API/TasksAPI';



const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const TaskCreate = ({id}) => {
    const navigate = useNavigate();

    const [selectValue, setSelectValue] = useState('To Do');
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    const handleToBack = () => {
        navigate(-1);
    }

    const changeValue = (event) => {
        setSelectValue(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const CreateHandler = async (event) => {
        event.preventDefault();
        await Tasks.createTask(
            event.target.name.value,
            event.target.description.value,
            id,
            setResult,
            setOpen,
            setSuccess
        )
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
            <Container display='flex' flexDirection='column' margin='0 auto 0'>
                <Text fontSize='48px' marginBottom='30px'>Create Backlog</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={CreateHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                    />
                    <textarea
                        type='text'
                        name='description'
                        placeholder='Description'
                        rows="10" cols="65"
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue}
                        name='column'
                        style={{'marginBottom':'20px'}}
                        onChange={changeValue}
                        >
                        <MenuItem value='To Do'>To Do</MenuItem>
                        <MenuItem value='In Progress'>In Progress</MenuItem>
                        <MenuItem value='In Review'>In Review</MenuItem>
                        <MenuItem value='Done'>Done</MenuItem>
                    </Select>                   
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Create Task</Button>
                    <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handleToBack}>Back</Button>
                </Form>
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

export default TaskCreate;