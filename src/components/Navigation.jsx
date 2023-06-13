import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import ApiIcon from '@mui/icons-material/Api';
import Notifications from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import Container from './UI/Container';
import Text from './UI/Text';

import Users from '../API/UsersAPI';



const Navigation = () => {
  const navigate = useNavigate()

  const redirectHandler = () => {
    navigate('/');
  }

  const handleRefresh = () => {
    window.location.reload();
};

  const LogoutUser = () => {
    Users.logoutUser(redirectHandler, handleRefresh);
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{'backgroundColor':'#DEEBFA', 'boxShadow':'none'}}>
          <Toolbar style={{'minHeight':'0px'}}>
            <Box>
              <Button onClick={redirectHandler}>
                <ApiIcon style={{'fontSize':'32px', 'color':'#4279E0'}}/>
                </Button>
            </Box>
            <Text
              fontSize='24px'
              color='#4279E0'
              noWrap
            >
              Flower
            </Text>
            <Box sx={{ flexGrow: 1 }} />
            <Container display='flex' width='10%' justifyContent='space-between' alignItems='center'>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  style={{"color":'#4279E0'}}
                >
                  <Badge badgeContent={3} color="primary">
                    <Notifications />
                  </Badge>
                </IconButton>
              </Box>
              <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
              <Tooltip title='Logout'>
                <LogoutIcon onClick={LogoutUser}
                style={{'cursor':'pointer',
                'fontSize':'20px','color':'#4279E0','marginRight':'2px'}}/>
              </Tooltip> 
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navigation;