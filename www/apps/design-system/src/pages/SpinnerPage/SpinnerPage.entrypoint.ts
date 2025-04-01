import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import SpinnerPage from './SpinnerPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof SpinnerPage> = {
  root: JSResource('SpinnerPage', () => import('./SpinnerPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/spinner',
  entryPoint: entrypoint,
  title: 'Spinner',
  description: 'Use a spinner to indicate a loading state.',
};

export default route;
