import styles from '../../styles/Form.module.css';


const Form = ({children, ...props}) => {
    return (
        <form {...props} method='POST' className={styles.form}>
            {children}
        </form>
    )
}

export default Form;