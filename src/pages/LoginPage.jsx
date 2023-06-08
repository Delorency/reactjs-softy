import Heading from '../components/UI/Heading';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ApiIcon from '@mui/icons-material/Api';

import Container from '../components/UI/Container';
import Form from '../components/UI/Form';

import Users from '../API/UsersAPI';

const LoginPage = () => {
    const LoginHandler = async (event) => {
        event.preventDefault();
        await Users.LoginUser(event.target.email.value, event.target.password.value);
    }
    return (
        <>
        <Heading title='Login'/>
        <Container maxWidth='420px' margin='80px auto 0'>

            <Container display='flex' flexDirection='column' textAlign='center'> 
                <ApiIcon style={{'fontSize':'128px', 'color':'#5156B0', 'margin':'0 auto 0'}}/>
                <Typography variant='h2' style={{'marginBottom':'30px'}}>Softy</Typography>
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
                <Typography
                    variant='h6'
                    align='right'
                    style={{'fontSize':'16px', 'marginRight':'5px', 'color':'#474C4F'}}>
                    Do you really not have a Softy account?   
                </Typography>
                <Link href='/registration' underline='hover' style={{'color':'#474C4F'}}>Fix this problem!</Link>
            </Container>
        </Container>
        </>
    )
}

export default LoginPage;