import LockIcon from '@mui/icons-material/Lock';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TableChartIcon from '@mui/icons-material/TableChart';
import Tooltip from '@mui/material/Tooltip';
import GroupIcon from '@mui/icons-material/Group';

import Container from '../UI/Container'
import Text from '../UI/Text'



const TaskListItem = ({task}) => {
    return (
        <Container
            width='100%'
            border='3px solid #DEEBFA'
            borderRadius='10px'
            display='flex'
            flexDirection='column'
        >
            {task.name}
        </Container>
    )
}

export default TaskListItem;