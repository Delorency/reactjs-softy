import {useState, useEffect, forwardRef} from 'react';
import { useNavigate } from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Container from '../UI/Container';  
import Text from '../UI/Text';  
import Form from '../UI/Form';

import Users from '../../API/UsersAPI';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const UserUpdate = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    const profileRedirect = () => {
        navigate('/');
      }
    const handleRefresh = () => {
        window.location.reload();
    };

    useEffect(()=>{
        Users.getCurrentUser(
            setUser,
        )
    }, [])

    const UpdateInfoHandler = async (event) => {
        event.preventDefault();
        Users.updateUserInfo(
            event.target.first_name.value,
            event.target.last_name.value,
            setResult,
            setOpen,
            setSuccess)
    }
    const updateEmailHandler = async (event) => {
        event.preventDefault();
        Users.updateUserEmail(
            event.target.new_email.value,
            event.target.current_password.value,
            setResult,
            setOpen,
            setSuccess)
    }

    const updatePasswordHandler = async (event) => {
        event.preventDefault();
        Users.updateUserPassword(
            event.target.new_password.value,
            event.target.current_password.value,
            setResult,
            setOpen,
            setSuccess)
    }

    const deleteHandler = async (event) => {
        event.preventDefault();
        Users.deleteUser(
            event.target.current_password.value,
            setResult, setOpen, setSuccess, profileRedirect, handleRefresh);
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
            <Container display='flex' flexDirection='column'>
                <Text fontSize='18px' marginBottom='20px'>Update Info</Text>

                <Form onSubmit={UpdateInfoHandler}>
                    <input
                        type='text'
                        name='first_name'
                        placeholder={user.first_name}
                    />  
                    <input
                        type='text'
                        name='last_name'
                        placeholder={user.last_name}
                    />    
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Update info</Button>
                </Form>

                <Divider orientation="horizontal" flexItem style={{'marginTop':'20px','marginBottom':'20px'}}/>

                <Text fontSize='18px' marginBottom='20px'>Update Email</Text>

                <Form onSubmit={updateEmailHandler}>
                    <input
                        type='email'
                        name='new_email'
                        placeholder={user.email}
                    />    
                    <input
                        type='password'
                        name='current_password'
                        placeholder='Password'
                    />    
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Update email</Button>
                </Form>

                <Divider orientation="horizontal" flexItem style={{'marginTop':'20px','marginBottom':'20px'}}/>

                <Text fontSize='18px' marginBottom='20px'>Update Password</Text>

                <Form onSubmit={updatePasswordHandler}>
                    <input
                        type='password'
                        name='new_password'
                        placeholder='New password'
                    />    
                    <input
                        type='password'
                        name='current_password'
                        placeholder='Current password'
                    />    
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Update password</Button>
                </Form>

                <Divider orientation="horizontal" flexItem style={{'marginTop':'20px','marginBottom':'20px'}}/>

                <Form onSubmit={deleteHandler}>   
                    <input
                        type='password'
                        name='current_password'
                        placeholder='Current password'
                    />    
                    <Button
                        type='submit'
                        color='error'
                        size='small'
                        variant='outlined'
                    >Delete account</Button>
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

export default UserUpdate;