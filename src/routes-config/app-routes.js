import { Suspense } from 'react'
import {
    HashRouter, Route, Switch
} from 'react-router-dom'

import reviewRoute from '../app-modules/review-dashboard/routes/routes'

const appRoutes = () => (
    <HashRouter>
        <Switch>
            <Suspense>
                <Route path='/review' component={reviewRoute} />
            </Suspense>
        </Switch>
    </HashRouter>
);

export default appRoutes;