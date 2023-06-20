import {useState, useEffect, forwardRef} from 'react';
import { useNavigate } from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import CropSquareIcon from '@mui/icons-material/CropSquare';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import Container from '../../../UI/Container';
import Form from '../../../UI/Form';
import Text from '../../../UI/Text';

import Tasks from '../../../../API/TasksAPI';

import SubTaskWorkerListItem from './SubTaskWorkerListItem';




const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SubTaskUpdate = ({id}) => {
    const navigate = useNavigate();
    const [subtask, setSubTask] = useState({});
    const [taskWorkers, setTaskWorkers] = useState([]);
    const [value, setValue] = useState('');
    
    const [checkValue, setcheckValue] = useState(false);

    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    useEffect(()=>{
        Tasks.getSubTask(id, setSubTask, setcheckValue)
    }, [id]);

    useEffect(()=>{
        Tasks.getTaskWorkers(id, setTaskWorkers)
    }, [id]);

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const changeChecked = () => {
        setcheckValue(!checkValue);
    }

    const handleToBack = () => {
        navigate(-1);
    };

    const removeWorkerHandler = () => {
        Tasks.removeWorkerSubTask(
            id, 
            setValue, 
            setOpen, 
            setResult, 
            setSuccess);
    }

    const UpdateHandler = (event) => {
        event.preventDefault();
        Tasks.updateSubTask(
            id,
            event.target.end_at.value,
            value,
            checkValue,
            setOpen,
            setResult,
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
                <Text fontSize='48px' marginBottom='30px'>SubTask update</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={UpdateHandler}>       
                    <input
                        type='date'
                        name='end_at'
                        placeholder='End at'
                    />   
                    <Container margin='20px 0 20px 0'>
                    <FormControl style={{'width':'80%'}}>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                        {taskWorkers.map(({...worker})=>(
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
                        <Button
                            onClick={removeWorkerHandler}
                            type='button'
                            color='error'
                            size='medium'
                            variant='outlined'
                            style={{'width':'30%', 'padding':'2px 5px 2px 5px'}}
                    >remove worker</Button>
                    </FormControl>  
                    </Container>  
                    <Container display='flex' flexDirection='column' marginBottom='20px'>
                        
                    {checkValue
                        ?<Tooltip onClick={changeChecked}>
                            <CheckBoxIcon style={{'fontSize':'30px', 'color':'#5EEBFA', 'cursor':'pointer'}}/>
                         </Tooltip>
                        :<Tooltip onClick={changeChecked}>
                            <CropSquareIcon style={{'fontSize':'30px', 'color':'#5EEBFA', 'cursor':'pointer'}}/>
                         </Tooltip>
                    }
                    <Text>Close</Text>
                    </Container>
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Update Subtask</Button>
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

export default SubTaskUpdate;