import {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import Container from '../../UI/Container'; 
import Text from '../../UI/Text'; 
import Form from '../../UI/Form';

import Members from '../../../API/MembersAPI';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const UpdateMember = ({id}) => {
    const navigate = useNavigate();
    const [member, setMember] = useState({});
    const [selectValue, setSelectValue] = useState('Backend');

    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    useEffect(()=>{
        Members.getMember(
            id,
            setMember,
        )
    }, [id])

    const handleToBacklogs = () => {
        navigate(-1);
    }

    const UpdateHandler = async (event) => {
        event.preventDefault();
        Members.updateMember(
            id,
            event.target.role.value,
            setResult,
            setOpen,
            setSuccess)
    }

    const DeleteHandler = async (event) => {
        event.preventDefault();
        Members.deleteMember(id, navigate, setResult, setOpen, setSuccess);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const changeValue = (event) => {
        setSelectValue(event.target.value);
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
                <Text fontSize='48px' marginBottom='30px'>Update Member</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={UpdateHandler}>
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
                    </Select>   
                    <Container display='flex' justifyContent='space-between' marginBottom='20px'>               
                        <Button
                            type='submit'
                            color='success'
                            size='medium'
                            variant='outlined'
                        >Update member</Button>
                        <Button
                            onClick={DeleteHandler}
                            type='submit'
                            color='error'
                            size='medium'
                            variant='outlined'
                        >Delete member</Button>
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

export default UpdateMember;