const Container = ({children, className, onClick, ...props}) => {
    const divStyle = {
        margin:0,
        padding:0,
        ...props,
    }
    return (
        <div className={className} onClick={onClick} style={divStyle}>
            {children}
        </div>
    )
}

export default Container;