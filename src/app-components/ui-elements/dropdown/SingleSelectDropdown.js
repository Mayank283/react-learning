import { Select, MenuItem, InputLabel } from '@material-ui/core'


const SingleSelectDropdown = ({ input, meta, field, ...rest }) => {
    return (
        <div>
            <InputLabel id="demo-simple-select-label">{field.type}</InputLabel>
            <Select
                style={{ marginTop: 5, minWidth: 120 }}
                {...input}
                {...rest}
                onChange={input.onChange}
            >
                {field.values.map((item, index) => (
                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>))}
            </Select>
        </div>
    );
}

export default SingleSelectDropdown