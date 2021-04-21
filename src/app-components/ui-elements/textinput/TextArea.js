import TextField from '@material-ui/core/TextField'

const TextArea = ({ input, meta, ...rest }) => {
    return (
        <TextField
            {...input}
            {...rest}
            onChange={input.onChange}
        />);
}

export default TextArea