import { Grid, Button, Paper } from '@material-ui/core'

import { Form, Field } from "react-final-form"
import { Link } from 'react-router-dom';

import TextInput from "../../../../app-components/ui-elements/textinput/TextInput";
import FacebookLoginProvider from '../login-providers/facebook';
import GoogleLoginProvider from '../login-providers/google';

const loginPage = () => {

    const onSubmit = async values => {
        window.alert(JSON.stringify(values, 0, 2))
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                {
                    (props) => {
                        return (
                            <Paper elevation={3} style={{padding: 20, marginLeft: 570, marginRight: 570, marginTop: 100}}>
                                <div>Login to your account</div>
                                <form onSubmit={props.handleSubmit}>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="email" component={TextInput} placeholder="Enter email" />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 16 }}>
                                        <Field name="password" component={TextInput} placeholder="Enter password" />
                                    </Grid>
                                    <Grid container item direction="row" justify="center" alignItems="center" style={{ marginTop: 16 }}>
                                        <Grid xs item style={{ marginTop: 16 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                disabled={props.submitting}
                                            >
                                                Log in
                                        </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                                <Grid xs item style={{ marginTop: 16 }}>
                                    OR
                                </Grid>
                                <Grid xs item style={{ marginTop: 16 }}>
                                    <GoogleLoginProvider />
                                </Grid>
                                <Grid xs item style={{ marginTop: 16 }}>
                                    <FacebookLoginProvider />
                                </Grid>
                                <Grid xs item style={{ marginTop: 16 }}>
                                    Can't log in? <Link to ="/account/signup">Sign up for an account</Link>
                                </Grid>
                            </Paper>
                        )
                    }
                }
            </Form>
        </div>
    )
}

export default loginPage;