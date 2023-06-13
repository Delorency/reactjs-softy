import {useState, useEffect, forwardRef} from 'react';
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


const SprintUpdate = ({id}) => {
    const navigate = useNavigate();
    const [, setSprint] = useState({});

    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    useEffect(()=>{
        Sprints.getSprint(
            id,
            setSprint,
        )
    }, [id])

    const handleToBacklogs = () => {
        navigate(-1);
    }

    const UpdateHandler = async (event) => {
        event.preventDefault();
        Sprints.updateSprint(
            id,
            event.target.start_at.value,
            event.target.end_at.value,
            setResult,
            setOpen,
            setSuccess)
    }

    const DeleteHandler = async (event) => {
        event.preventDefault();
        Sprints.deleteSprint(id, navigate, setResult, setOpen, setSuccess);
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
                <Text fontSize='48px' marginBottom='30px'>Update Sprint</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={UpdateHandler}>
                    <input
                        type='date'
                        name='start_at'
                        placeholder='Start at'
                    />          
                    <input
                        type='date'
                        name='end_at'
                        placeholder='End at'
                    />  
                    <Container display='flex' justifyContent='space-between' marginBottom='20px'>               
                        <Button
                            type='submit'
                            color='success'
                            size='medium'
                            variant='outlined'
                        >Update sprint</Button>
                        <Button
                            onClick={DeleteHandler}
                            type='submit'
                            color='error'
                            size='medium'
                            variant='outlined'
                        >Delete sprint</Button>
                    </Container>
                    <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handleToBacklogs}>Back</Button>
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

export default SprintUpdate;