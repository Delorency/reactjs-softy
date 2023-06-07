import styles from '../../styles/Form.module.css';


const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className={styles.form}>
            {props.children}
        </form>
    )
}

export default Form;