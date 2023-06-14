import {useState, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import Container from '../../components/UI/Container'; 
import Text from '../../components/UI/Text'; 
import Form from '../../components/UI/Form'; 

import Proposals from '../../API/ProposalsAPI';



const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ProposalCreate = ({id}) => {
    const navigate = useNavigate();
    const [selectValue, setSelectValue] = useState('Backend');
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    const changeValue = (event) => {
        setSelectValue(event.target.value);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleToBacklogs = () => {
        navigate(-1);
    }

    const CreateHandler = async (event) => {
        event.preventDefault();
        await Proposals.createProposal(
            event.target.role.value,
            event.target.username.value,
            event.target.email.value,
            id,
            setResult,
            setOpen,
            setSuccess,
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
                <Text fontSize='48px' marginBottom='30px'>Send proposal</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={CreateHandler}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue}
                        name='role'
                        style={{'marginBottom':'20px'}}
                        onChange={changeValue}
                        >
                        <MenuItem value='Backend'>Backend</MenuItem>
                        <MenuItem value='Frontend'>Frontend</MenuItem>
                        <MenuItem value='UX'>UX</MenuItem>
                        <MenuItem value='Design'>Design</MenuItem>
                        <MenuItem value='Project owner'>Project owner</MenuItem>
                    </Select>               
                        <Button
                            type='submit'
                            color='success'
                            size='medium'
                            variant='outlined'
                        >Send proposal</Button>
                </Form>
                <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handleToBacklogs}>Back</Button>
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

export default ProposalCreate;
