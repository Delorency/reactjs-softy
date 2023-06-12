const Text = ({children, onClick, ...props}) => {
    const styleH3 = {
        margin:0,
        padding:0,
        fontWeight:400,
        color:'#494E52',
        ...props,
    }

    return <span style={styleH3} onClick={onClick}>{children}</span>
}

export default Text;