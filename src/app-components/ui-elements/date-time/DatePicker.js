import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import  {useState, useEffect } from 'react';

const DatePicker = ({ input, meta, ...rest }) => {

    const [selectedDate, setSelectedDate] = useState();

    useEffect(() => {
        input.value === "" ? setSelectedDate() : setSelectedDate(input.value)
    }, [input.value])

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                {...rest}
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                value={selectedDate}
                onChange={input.onChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>);
}

export default DatePicker;