const CustomInput = ({icon, name, value, id, placeholder, onChange, type='text'}) => {

    const inputBoxStyles = {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        flex: '1',
        color: 'white',
    }

    return (
        <div className="d-flex gap-2 rounded py-2 mb-3" style={{background: 'rgb(77, 88, 116)'}}>
            <span className="border-end px-2">{icon}</span>
            <input type={type} name={name} id={id} value={value} onChange={(e) => onChange(e)} placeholder={placeholder} style={inputBoxStyles} />
        </div>
    )
}

export default CustomInput