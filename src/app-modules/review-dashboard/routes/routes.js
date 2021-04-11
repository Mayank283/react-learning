import { Suspense } from "react";
import reviewDashboard from '../container/container';
import { Route } from 'react-router-dom'


const reviewRoutes = () => (
    <Suspense>
        <Route path='/review/feed' component={reviewDashboard} />
    </Suspense>
);

export default reviewRoutes;