import { useState } from 'react';

import Container from '../../components/UI/Container';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import UserUpdate from "../../components/ProfileUI/UserUpdate";


const ProfilePage = () => {
    const [username,] = useState(`Profile - ${localStorage.getItem('user_username')}`);
    return (
        <>
            <Heading title={username}/>
            <Container display='flex' flexDirection='column' width='90%' margin='30px auto 0'>
                <Text margin='0 auto 20px' fontSize='24px'>Project Settings</Text>
                <Container width='40%' margin='0 auto 0'>
                    <UserUpdate/>
                </Container>
            </Container>
        </>
    )
}

export default ProfilePage;