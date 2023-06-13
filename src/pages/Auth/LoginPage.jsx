import {useState, forwardRef} from 'react';

import Heading from '../../components/UI/Heading';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import ApiIcon from '@mui/icons-material/Api';

import Container from '../../components/UI/Container';
import Text from '../../components/UI/Text';
import Form from '../../components/UI/Form';

import Users from '../../API/UsersAPI';



const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPage = () => {
    const handleRefresh = () => {
        window.location.reload();
    };
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState(null);

    const handleClose = () => {
      setOpen(false);
    };
    const LoginHandler = async (event) => {
        event.preventDefault();
        await Users.loginUser(
            event.target.email.value,
            event.target.password.value,
            setResult,
            setOpen, handleRefresh);
    }
    return (
        <>
        <Heading title='Login - Flower'/>
        <Container maxWidth='440px' margin='60px auto 0'>

            <Container display='flex' flexDirection='column' textAlign='center'> 
                <ApiIcon style={{'fontSize':'128px', 'color':'#4279E0', 'margin':'0 auto 0'}}/>
                <Text marginBottom='30px' fontSize='64px'>Flower</Text>
            </Container>

            <Form onSubmit={LoginHandler}>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                />
                <Button
                    type='submit'
                    color='primary'
                    size='medium'
                    variant='outlined'
                >Login</Button>
            </Form>

            <Container display='flex' alignItems='center' margin='20px auto 0'>
                <Text
                    align='right'
                    fontSize='16px'
                    marginRight='5px'
                    color='#474C4F'>
                    Do you really not have a Flower account?   
                </Text>
                <Link href='/registration' underline='hover' style={{'color':'#474C4F'}}>Fix this problem!</Link>
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

export default LoginPage;