import {useState, forwardRef} from 'react';
import Heading from '../components/UI/Heading';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ApiIcon from '@mui/icons-material/Api';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Text from '../components/UI/Text';
import Container from '../components/UI/Container';
import Form from '../components/UI/Form';

import Users from '../API/UsersAPI';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RegistrationPage = () => {
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleClose = () => {
      setOpen(false);
    };
    const RegistrationHandler = async (event) => {
        event.preventDefault();
        await Users.RegistrationUser(
            event.target.email.value,
            event.target.username.value,
            event.target.last_name.value,
            event.target.first_name.value,
            event.target.password.value,
            setResult,
            setOpen,
            setSuccess);
    }
    return (
        <>
        <Heading title='Registration - Flower'/>
        <Container maxWidth='440px' margin='60px auto 0'>

            <Container display='flex' flexDirection='column' textAlign='center'> 
                <ApiIcon style={{'fontSize':'128px', 'color':'#5156B0', 'margin':'0 auto 0'}}/>
                <Text marginBottom='30px' fontSize='64px'>Flower</Text>
            </Container>

            <Form onSubmit={RegistrationHandler}>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                />
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                />
                <input
                    type='text'
                    name='last_name'
                    placeholder='Surname'
                />
                <input
                    type='text'
                    name='first_name'
                    placeholder='Name'
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
                >Create Flower account</Button>
            </Form>

            <Container display='flex' alignItems='center' margin='20px auto 0'>
                <Text
                    align='right'
                    fontSize='16px'
                    marginRight='5px' 
                    color='#474C4F'>
                    Already have the account? It's perfectly!   
                </Text>
                <Link href='/login' underline='hover' style={{'color':'#474C4F'}}>Login right now!</Link>
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

export default RegistrationPage;