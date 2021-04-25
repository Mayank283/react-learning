import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'


const SingleSelectDropdown = ({ input, meta, field, ...rest }) => {
    return (
        <div>
            <FormControl style = {{marginTop: 16}}>
                <InputLabel id="demo-simple-select-label" style = {{top:-12}}>{field.type}</InputLabel>
                <Select
                    style={{ marginTop: 5, minWidth: 220 }}
                    {...input}
                    {...rest}
                    onChange={input.onChange}
                    MenuProps={{
                        getContentAnchorEl: null
                      }}
                >
                    {field.values.map((item, index) => (
                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SingleSelectDropdown