import styles from '../../styles/Form.module.css';


const Form = ({children, ...props}) => {
    return (
        <form {...props} className={styles.form}>
            {children}
        </form>
    )
}

export default Form;