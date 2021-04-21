import React from 'react'
import { Form, Field } from "react-final-form"
import { Grid, Button } from '@material-ui/core'

import TextArea from '../../app-components/ui-elements/textinput/TextArea'
import SingleSelectDropdown from '../../app-components/ui-elements/dropdown/SingleSelectDropdown'
import MultiSelectDropdown from '../../app-components/ui-elements/dropdown/MultiSelectDropdown'
import { status, locations } from '../../constants/dropdown'

const FormComponent = (props) => {

    const { updateFormState } = props

    const onSubmit = async values => {
        window.alert(JSON.stringify(values, 0, 2))
        updateFormState(values, 'example')
    }

    console.log('property', props)
    return (
        <div>
            <Form onSubmit={onSubmit}>
                {
                    (props) => {
                        //console.log("form-props ->", props)
                        return (
                            <form onSubmit={props.handleSubmit}>
                                <Grid item xs={12} style={{ marginTop: 16 }}>
                                    <Field name="firstName" placeholder="First Name" component={TextArea} />
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: 16 }}>
                                    <Field name="middleName" placeholder='Middle name' component={TextArea} />
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: 16 }}>
                                    <Field name="lastName" placeholder='Last Name' component={TextArea} />
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: 16 }}>
                                    <Field name="statusId" field={status} component={SingleSelectDropdown} />
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: 16 }}>
                                    <Field name="locationIds" field={locations} component={MultiSelectDropdown} />
                                </Grid>
                                <div className="buttons">
                                    <Grid item style={{ marginTop: 16 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            disabled={props.submitting}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </div>
                            </form>
                        )
                    }
                }
            </Form>
        </div>);
}

export default FormComponent;