import {useState,forwardRef} from 'react';
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


const BacklogCreate = ({id}) => {
    const navigate = useNavigate();

    const [selectValue, setSelectValue] = useState('Easy');
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');

    const handleToBacklogs = () => {
        navigate(`/project/${id}`);
    }

    const changeValue = (event) => {
        setSelectValue(event.target.value);
    }

    const CreateHandler = async (event) => {
        event.preventDefault();
        await Backlogs.createBacklog(
            event.target.name.value,
            event.target.difficult.value,
            id,
            setResult,
            setOpen,
            handleToBacklogs
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
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Create new backlog</Button>
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

export default BacklogCreate;