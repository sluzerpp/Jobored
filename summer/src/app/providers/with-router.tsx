import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from 'shared/ui';

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback={<Spinner></Spinner>}>
            {component()}
        </Suspense>
    </BrowserRouter>
);