import {useState, useEffect} from 'react';

import Sprints from '../../API/SprintsAPI';
import { Container } from '@mui/material';



const Sprint = ({id}) => {
    const [, setSprint] = useState();
    
    useEffect(()=>{
        Sprints.getSprint(id, setSprint);
    }, [id])


    return (
        <Container display='flex' justifyContent='space-between'>
            <Container>
                <Container>
                    <Container>

                    </Container>
                    <Container></Container>
                </Container>

                <Container>

                </Container>

                <Container>

                </Container>

                <Container>

                </Container>
            </Container>
        </Container>
    )
}

export default Sprint;