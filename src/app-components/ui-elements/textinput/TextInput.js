import TextField from '@material-ui/core/TextField'

const TextInput = ({ input, meta, ...rest }) => {
    return (
        <TextField
            style={{ marginTop: 5, minWidth: 220 }}
            {...input}
            {...rest}
            onChange={input.onChange}
            
        />);
}

export default TextInput