import { Select, MenuItem,  InputLabel, ListItemText, Checkbox } from '@material-ui/core'
import { useState } from 'react';

const MultiSelectDropdown = ({ input, meta, field, ...rest }) => {

    const [values, setValues] = useState([]);

    return (
        <div>
            <InputLabel>{field.type}</InputLabel>
            <Select
                style={{ marginTop: 5, minWidth: 120 }}
                {...input}
                {...rest}
                multiple
                value={values}
                renderValue={(selected) => selected.length + " " + field.type + " selected"}
                onChange={(event) => {
                    setValues(event.target.value);
                    input.onChange(event.target.value)
                }}
            >
                {field.values.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                        <Checkbox checked={values.indexOf(item.id) > -1} />
                        <ListItemText primary={item.name} />
                    </MenuItem>))}
            </Select>
        </div>
    );
}

export default MultiSelectDropdown