import {Helmet} from 'react-helmet';



const Heading = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}

export default Heading;