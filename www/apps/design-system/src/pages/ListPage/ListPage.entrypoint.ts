import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import ListPage from './ListPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof ListPage> = {
  root: JSResource('ListPage', () => import('./ListPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/list',
  entryPoint: entrypoint,
  title: 'List',
  description: 'Use a list to display one or more options to a user.',
};

export default route;
