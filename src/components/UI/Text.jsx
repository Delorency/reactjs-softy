const Text = ({children, ...props}) => {
    const styleH3 = {
        margin:0,
        padding:0,
        fontWeight:400,
        color:'#494E52',
        ...props,
    }

    return <span style={styleH3}>{children}</span>
}

export default Text;