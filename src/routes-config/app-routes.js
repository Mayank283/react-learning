import { Suspense } from 'react'
import {
    HashRouter, Route, Switch
} from 'react-router-dom'

import reviewRoute from '../app-modules/review-dashboard/routes/routes'
import formRoute from '../app-modules/form/routes'

const appRoutes = () => (
    <HashRouter>
        <Switch>
            <Suspense>
                <Route path='/review' component={reviewRoute} />
                <Route path='/form' component={formRoute} />
            </Suspense>
        </Switch>
    </HashRouter>
);

export default appRoutes;