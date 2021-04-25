import React from 'react'
import { Form, Field } from "react-final-form"
import { Grid, Button, Paper } from '@material-ui/core'

import TextInput from '../../ui-elements/textinput/TextInput'
import SingleSelectDropdown from '../../ui-elements/dropdown/SingleSelectDropdown'
import MultiSelectDropdown from '../../ui-elements/dropdown/MultiSelectDropdown'
import DatePicker from '../../ui-elements/date-time/DatePicker'

import { status, locations } from '../../../constants/dropdown'

const Filter = (props) => {

    const { updateFilterState } = props

    const onSubmit = async values => {
        window.alert(JSON.stringify(values, 0, 2))
        updateFilterState(values, 'filter')
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                {
                    (props) => {
                        /*console.log("form-props ->", props)*/
                        return (
                            <Paper elevation={3} style={{ width: 220, padding: 20, margin: 20 }}>
                                <form onSubmit={props.handleSubmit}>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="firstName" component={TextInput} label="First Name" />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="middleName" label='Middle name' component={TextInput} />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="lastName" label='Last Name' component={TextInput} />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="statusId" field={status} component={SingleSelectDropdown} />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="locationIds" field={locations} component={MultiSelectDropdown} />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="fromDate" label="From Date" component={DatePicker} />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="toDate" label="To Date" component={DatePicker} />
                                    </Grid>
                                    <Grid container item direction="row" justify="center" alignItems="center" style={{ marginTop: 16 }}>
                                        <Grid xs item style={{ marginTop: 16 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                disabled={props.submitting}
                                            >
                                                Apply
                                        </Button>
                                        </Grid>
                                        <Grid xs item style={{ marginTop: 16 }}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={props.form.reset}
                                                disabled={props.submitting || props.pristine}
                                            >
                                                Reset
                                        </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        )
                    }
                }
            </Form>
        </div>);
}

export default Filter;