const Text = ({children, ...props}) => {
    const styleH3 = {
        'margin':'0',
        'padding':'0',
        ...props,
    }

    return <h3 style={styleH3}>{children}</h3>
}

export default Text;