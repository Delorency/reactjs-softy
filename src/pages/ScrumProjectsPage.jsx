import {useState} from 'react'
import Navigation from '../components/UI/Navigation';

import ScrumProjects from "../API/ScrumProjects";


const ScrumProjectsPage = () => {
    const [projects] = useState(ScrumProjects.getAllScrumProjects());
    return (
        <div>Hello</div>
    )
}

export default ScrumProjectsPage;