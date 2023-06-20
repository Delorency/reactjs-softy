import {useState} from 'react';

import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

import MoreVertIcon from '@mui/icons-material/MoreVert';

import Container from "../../../UI/Container";
import Text from "../../../UI/Text";



const SubTaskWorkerListItem = ({worker}) => {
    return (
        <Container
            border='3px solid #DEEBFA'
            borderRadius='10px'
            padding='10px 10px 10px'
            marginBottom='10px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            background='white'
            cursor='pointer'
            width='100%'
            verticalAlign='center'
        >
            <Container>
                <Text>{worker.user.username}</Text>
            </Container>

            <Divider orientation="vertical" flexItem/>

            <Container width='40%'>
                <Text>{worker.role}</Text>
            </Container>
        </Container>
    )
}

export default SubTaskWorkerListItem;