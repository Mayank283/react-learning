import { Suspense } from "react";
import LoginComponent from "../components/login/index";
import SignUpComponent from "../components/signup/index";
import { Route } from 'react-router-dom'

const accountRoutes = () => (
    <Suspense>
        <Route path='/account/login' exact component={LoginComponent} />
        <Route path='/account/signup' exact component={SignUpComponent} />
    </Suspense>
);

export default accountRoutes;