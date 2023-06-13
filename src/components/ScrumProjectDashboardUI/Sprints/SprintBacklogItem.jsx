import Container from "../../UI/Container";
import Text from "../../UI/Text";

import styles from '../../../styles/TaskListItem.module.css';

import Sprints from '../../../API/SprintsAPI';


const SprintBacklogItem = ({backlog, id}) => {
    const handlerRefresh = () => {
        window.location.reload();
    }
    const UpdateHandler = async (event) => {
        event.preventDefault();
        Sprints.changeBacklogsSprint(
            id,
            [backlog.id],
            true,
            handlerRefresh
        )
    }
    return (
        <Container
            onClick = {UpdateHandler}
            name = {backlog.id}
            border='3px solid #DEEBFA'
            borderRadius='10px'
            padding='10px 20px'
            marginBottom='10px'
            marginTop='10px'
            display='flex'
            justifyContent='space-between'
            background='white'
            className={styles.list_item}
        >
            <Text>{backlog.name}</Text>
            <Text>{backlog.difficult}</Text>
        </Container>
    )
}

export default SprintBacklogItem;