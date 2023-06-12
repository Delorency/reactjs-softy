import {useNavigate} from 'react-router-dom'

import Container from '../UI/Container';

import styles from '../../styles/Link.module.css';



const SubNavigation = ({id}) => {
    const navigation = useNavigate();
    const dashboardRedirect = () => {
        navigation(`/project/${id}`);
    }
    const teamRedirect = () => {
        navigation(`/project-team/${id}`);
    }
    const settingsRedirect = () => {
        navigation(`/project-settings/${id}`);
    }
    
    return (
        <Container display='flex' justifyContent='space-between'>
            <span className={styles.link} onClick={dashboardRedirect}>Dashboard</span>
            <span className={styles.link} onClick={teamRedirect}>Team</span>
            <span className={styles.link} onClick={settingsRedirect}>Settings</span>
        </Container>
    )
}

export default SubNavigation;