import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import FlexboxPage from './FlexboxPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof FlexboxPage> = {
  root: JSResource('FlexboxPage', () => import('./FlexboxPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/flexbox',
  entryPoint: entrypoint,
  title: 'Flexbox',
  description: 'Use a Flexbox to arrange items in a horizontal or vertical layout.',
};

export default route;
