import { Select, MenuItem, InputLabel, ListItemText, Checkbox, FormControl } from '@material-ui/core'
import { useEffect, useState } from 'react';

const MultiSelectDropdown = ({ input, meta, field, ...rest }) => {

    const [values, setValues] = useState(() => []);
    useEffect(() => {
        input.value === "" ? setValues([]) : setValues(input.value)
    }, [input.value])

    return (
        <>
            <FormControl style = {{    marginTop: 16}}>
                <InputLabel style = {{top:-12}}>{field.type}</InputLabel>
                <Select
                    style={{ marginTop: 5, minWidth: 220 }}
                    {...rest}
                    multiple
                    value={values}
                    renderValue={() => values.length + " " + field.type + " selected"}
                    onChange={(event) => {
                        input.onChange(event.target.value)
                    }}
                    MenuProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "left"
                        },
                        getContentAnchorEl: null
                      }}
                >
                    {field.values.map((item, index) => (
                        <MenuItem key={index} value={item.id}>
                            <Checkbox checked={values.indexOf(item.id) > -1} />
                            <ListItemText primary={item.name} />
                        </MenuItem>))}
                </Select>
            </FormControl>
        </>
    );
}

export default MultiSelectDropdown