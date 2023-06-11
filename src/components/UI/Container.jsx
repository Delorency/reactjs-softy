const Container = ({children, className, ...props}) => {
    const divStyle = {
        margin:0,
        padding:0,
        ...props,
    }
    return (
        <div className={className} style={divStyle}>
            {children}
        </div>
    )
}

export default Container;