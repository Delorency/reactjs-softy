import LockIcon from '@mui/icons-material/Lock';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import Container from '../UI/Container'
import Text from '../UI/Text'



const ScrumListItem = ({project}) => {
    return (
        <Container
            width='100%'
            border='3px solid #DEEBFA'
            paddingLeft='20px'
            marginBottom='20px'
            display='flex'
            flexDirection='column'
        >
            <Container paddingTop='10px' display='flex' alignItems='center'> 
                <AcUnitIcon style={{'fontSize':'64px', 'color':'#5EEBFA'}}/>
                <Text fontSize='18px' color='#5156B0' marginLeft='20px'>{project.name}</Text>
            </Container>

            <Container paddingTop='10px' display='flex' alignItems='center'> 
                <Text fontSize='12px' color='#474C4F' marginLeft='20px'>{project.description}</Text>
            </Container>

            <Container textAlign='center'> 
                <LockIcon style={{'fontSize':'16px', 'color':'#5156B0'}}/>
            </Container>
        </Container>
    )
}

export default ScrumListItem;