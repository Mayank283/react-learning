import { Suspense } from 'react'
import {
    HashRouter, Route, Switch
} from 'react-router-dom'

import reviewRoute from '../app-modules/review-dashboard/routes/routes'
import accountRoutes from '../app-modules/account/routes/routes';

const appRoutes = () => (
    <HashRouter>
        <Switch>
            <Suspense>
                <Route path='/review' component={reviewRoute} />
                <Route path='/account' component={accountRoutes} />
            </Suspense>
        </Switch>
    </HashRouter>
);

export default appRoutes;