const Container = (props) => {
    const divStyle = {
        'maxWidth':props.maxWidth || 'inherit',
        'display':props.display || 'block',
        'flexDirection':props.flexDirection || 'row',
        'textAlign':props.textAlign || 'inherit',
        'alignItems':props.alignItems || 'inherit',
        'width':'100%',
        'margin':props.margin || '0 auto 0'
    }
    return (
        <div style={divStyle}>
            {props.children}
        </div>
    )
}

export default Container;