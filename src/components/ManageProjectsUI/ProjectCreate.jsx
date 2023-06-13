import {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TableChartIcon from '@mui/icons-material/TableChart';

import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Tooltip from '@mui/material/Tooltip';

import Container from '../UI/Container'; 
import Text from '../UI/Text'; 
import Form from '../UI/Form';

import Scrums from '../../API/ScrumProjectsAPI';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ProjectCreate = ({is_scrum}) => {
    const navigate = useNavigate();
    const [type, setType] = useState();
    const [check, setCheck] = useState(false);

    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');

    const handleToProject = (id) => {
        navigate(`/project/${id}`);
    }
    const handlerToListProjects = () => {
        navigate('/manage-projects');
    }

    const CreateHandler = async (event) => {
        event.preventDefault();
        await Scrums.createProject(
            event.target.name.value,
            event.target.description.value,
            check,
            setResult,
            setOpen,
            handleToProject
        )
    }

    const handleClose = () => {
        setOpen(false);
    };

    const changeChecked = () =>{
        setCheck(!check)
    }
    useEffect(()=>{
        is_scrum ? setType('Scrum') : setType('Kanban')
    }, [is_scrum])
    return (
        <>
        <Container
            margin='20px auto 0'
            borderRadius='10px'
            padding='20px'
            marginBottom='20px'
            display='flex'
            flexDirection='column'
        >
            <Container display='flex' flexDirection='column' margin='0 auto 0'>
                {is_scrum
                    ? <AcUnitIcon style={{'fontSize':'64px', 'color':'#5EEBFA', 'margin':'0 auto 0'}}/>
                    : <TableChartIcon style={{'fontSize':'64px', 'color':'#5EEBFA', 'margin':'0 auto 0'}}/>
                }
                <Text fontSize='48px' marginBottom='30px'>Create {type}</Text>
            </Container>
            
            <Container display='flex' flexDirection='column'>
                <Form onSubmit={CreateHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                    />
                    <textarea
                        type='text'
                        name='description'
                        placeholder='Description'
                        rows="10" cols="65"
                    />
                    {check
                        ?<Tooltip onClick={changeChecked}>
                            <LockIcon style={{'fontSize':'20px', 'color':'#5EEBFA', 'cursor':'pointer', 'marginBottom':'20px'}}/>
                         </Tooltip>
                        :<Tooltip onClick={changeChecked}>
                            <LockOpenIcon style={{'fontSize':'20px', 'color':'#5EEBFA', 'cursor':'pointer', 'marginBottom':'20px'}}/>
                         </Tooltip>
                    }
                    <Button
                        type='submit'
                        color='success'
                        size='medium'
                        variant='outlined'
                    >Create new project</Button>
                    <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handlerToListProjects}>Back</Button>
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

export default ProjectCreate;