import { Suspense } from "react";
import formComponent from './container';
import { Route } from 'react-router-dom'


const formRoutes = () => (
    <Suspense>
        <Route path='/form/feed' component={formComponent} />
    </Suspense>
);

export default formRoutes;