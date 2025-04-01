import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import HomePage from './HomePage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof HomePage> = {
  root: JSResource('HomePage', () => import('./HomePage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system',
  entryPoint: entrypoint,
  title: 'Home',
  hideFromNav: true,
};

export default route;
