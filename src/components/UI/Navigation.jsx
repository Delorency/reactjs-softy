import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ApiIcon from '@mui/icons-material/Api';
import Notifications from '@mui/icons-material/Notifications';

import Text from './Text';



const Navigation = () => {

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{'backgroundColor':'#EBEBEB', 'boxShadow':'none'}}>
          <Toolbar style={{'minHeight':'0px'}}>
            <Box>
              <Button>
                <ApiIcon style={{'fontSize':'32px', 'color':'#5156B0'}}/>
                </Button>
            </Box>
            <Text
              fontSize='24px'
              color='#5156B0'
              noWrap
            >
              Flower
            </Text>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                style={{"color":'#5156B0'}}
              >
                <Badge badgeContent={3} color="primary">
                  <Notifications />
                </Badge>
              </IconButton>
            </Box>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navigation;