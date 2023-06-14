import {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Tooltip from '@mui/material/Tooltip';

import Container from '../../UI/Container';  
import Form from '../../UI/Form';

import Scrums from '../../../API/ScrumProjectsAPI';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ProjectUpdate = ({id}) => {
    const navigate = useNavigate();
    const [project, setProject] = useState({});
    const [check, setCheck] = useState(true);
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Ivalid input');
    const [success, setSuccess] = useState(null);

    const changeChecked = () =>{
        setCheck(!check)
    }

    useEffect(()=>{
        Scrums.getScrumProject(
            id,
            setProject,
            setCheck
        )
    }, [id])

    const handleToProjectList = () => {
        navigate('/manage-projects');
    }
    const handlerBack = () => {
        navigate(`/project/${id}`);
    }

    const UpdateHandler = async (event) => {
        event.preventDefault();
        Scrums.updateScrumProject(
            id,
            event.target.name.value,
            event.target.description.value,
            check,
            setResult,
            setOpen,
            setSuccess)
    }

    const DeleteHandler = async (event) => {
        event.preventDefault();
        Scrums.deleteScrumProject(id, handleToProjectList, setResult, setOpen, setSuccess);
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
                <Form onSubmit={UpdateHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder={project.name}
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
                    <Container display='flex' justifyContent='space-between' marginBottom='20px'>               
                        <Button
                            type='submit'
                            color='success'
                            size='medium'
                            variant='outlined'
                        >Update Project</Button>
                        <Button
                            onClick={DeleteHandler}
                            type='submit'
                            color='error'
                            size='medium'
                            variant='outlined'
                        >Delete Project</Button>
                    </Container>
                </Form>
                <Button style={{'background':'#F1F1F4', 'color':'#2E3133'}} onClick={handlerBack}>Back</Button>
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

export default ProjectUpdate;