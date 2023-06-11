import LockIcon from '@mui/icons-material/Lock';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TableChartIcon from '@mui/icons-material/TableChart';
import Tooltip from '@mui/material/Tooltip';
import GroupIcon from '@mui/icons-material/Group';

import Container from '../UI/Container'
import Text from '../UI/Text'

import styles from '../../styles/ScrumListItem.module.css'



const ProjectListItem = ({project}) => {
    return (
        <Container
            className={styles.container}
            border='3px solid #DEEBFA'
            borderRadius='10px'
            padding='20px'
            marginBottom='20px'
            display='flex'
            flexDirection='column'
        >
            <Container paddingTop='10px' display='flex' alignItems='center'> 
                {project.is_scrum
                    ? <AcUnitIcon style={{'fontSize':'64px', 'color':'#5EEBFA'}}/>
                    : <TableChartIcon style={{'fontSize':'64px', 'color':'#5EEBFA'}}/>
                }
                <Text fontSize='18px' color='#5156B0' marginLeft='20px'>{project.name}</Text>
            </Container>

            <Container paddingTop='10px' display='flex' alignItems='center'> 
                <Text fontSize='12px' color='#474C4F' marginLeft='20px'>{project.description}</Text>
            </Container>

            <Container marginTop='2%' display='flex' justifyContent='flex-end'>
                <Container marginRight='20px'>
                    <Tooltip title='Project team size'>
                        <GroupIcon style={{'fontSize':'20px', 'color':'#5156B0', 'marginRight':'2px'}}/>
                    </Tooltip>  
                    {project.team
                        ?<Text fontSize='12px' color='#474C4F'>{project.team.length}</Text>
                        :<Text fontSize='12px' color='#474C4F'>0</Text>
                    }
                </Container>
                {project.is_private
                    ?<Tooltip title='Private project'><LockIcon style={{'fontSize':'20px', 'color':'#5156B0'}}/></Tooltip>
                    :null
                }  
            </Container>
        </Container>
    )
}

export default ProjectListItem;