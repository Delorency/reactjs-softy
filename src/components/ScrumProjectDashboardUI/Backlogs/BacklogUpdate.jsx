import {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import Container from '../../UI/Container'; 
import Text from '../../UI/Text'; 
import Form from '../../UI/Form';

import Backlogs from '../../../API/BacklogsAPI';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const BacklogUpdate = ({id}) => {
    const navigate = useNavigate();
    const [backlog, setBacklog] = useState({});
    const [selectValue, setSelectValue] = useState('Easy');
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    const changeValue = (event) => {
        setSelectValue(event.target.value);
    }

    useEffect(()=>{
        Backlogs.getBacklog(
            id,
            setBacklog,
            setSelectValue
        )
    }, [id])

    const handleToBacklogs = () => {
        navigate(-1);
    }

    const UpdateHandler = async (event) => {
        event.preventDefault();
        Backlogs.updateBacklog(
            id,
            event.target.name.value,
            event.target.difficult.value,
            setResult,
            setOpen,
            setSuccess)
    }

    const DeleteHandler = async (event) => {
        event.preventDefault();
        Backlogs.deleteBacklog(id, navigate, setResult, setOpen, setSuccess);
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
                <Text fontSize='48px' marginBottom='30px'>Update Backlog</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={UpdateHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder={backlog.name}
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue}
                        name='difficult'
                        style={{'marginBottom':'20px'}}
                        onChange={changeValue}
                        >
                        <MenuItem value='Easy'>Easy</MenuItem>
                        <MenuItem value='Medium'>Medium</MenuItem>
                        <MenuItem value='Hard'>Hard</MenuItem>
                    </Select>   
                    <Container display='flex' justifyContent='space-between' marginBottom='20px'>               
                        <Button
                            type='submit'
                            color='success'
                            size='medium'
                            variant='outlined'
                        >Update backlog</Button>
                        <Button
                            onClick={DeleteHandler}
                            type='submit'
                            color='error'
                            size='medium'
                            variant='outlined'
                        >Delete backlog</Button>
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

export default BacklogUpdate;