import {useState,forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import Container from '../../UI/Container'; 
import Text from '../../UI/Text'; 
import Form from '../../UI/Form';

import Sprints from '../../../API/SprintsAPI';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SprintCreate = ({id}) => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');

    const handleClose = () => {
        setOpen(false);
    };

    const handleToBacklogs = () => {
        navigate(`/project/${id}`);
    }

    const CreateHandler = async (event) => {
        event.preventDefault();
        await Sprints.createSprint(
            event.target.start_at.value,
            event.target.end_at.value,
            id,
            setResult,
            setOpen,
            handleToBacklogs
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
                <Text fontSize='48px' marginBottom='30px'>Create Sprint</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={CreateHandler}>
                    <input
                        type='date'
                        name='start_at'
                        placeholder='Start at'
                        required
                    />          
                    <input
                        type='date'
                        name='end_at'
                        placeholder='End at'
                        required
                    />          
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Create new sprint</Button>
                    <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handleToBacklogs}>Back</Button>
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

export default SprintCreate;