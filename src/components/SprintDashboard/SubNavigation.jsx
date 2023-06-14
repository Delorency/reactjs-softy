import {useNavigate} from 'react-router-dom'

import Container from '../UI/Container';

import styles from '../../styles/Link.module.css';



const SubNavigation = ({id}) => {
    const navigation = useNavigate();
    const redirectProjectDashboard = () => {
        navigation(`/project/${id}`);
    }
    
    return (
        <Container display='flex' justifyContent='space-between'>
            <span className={styles.link} onClick={redirectProjectDashboard}>Project dashboard</span>
            <span className={styles.link} onClick={redirectProjectDashboard}>Project dashboard</span>
            <span className={styles.link} onClick={redirectProjectDashboard}>Project dashboard</span>
        </Container>
    )
}

export default SubNavigation;