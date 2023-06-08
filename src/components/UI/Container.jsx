const Container = ({children, ...props}) => {
    const divStyle = {
        ...props,
        'width':'100%'
    }
    return (
        <div style={divStyle}>
            {children}
        </div>
    )
}

export default Container;