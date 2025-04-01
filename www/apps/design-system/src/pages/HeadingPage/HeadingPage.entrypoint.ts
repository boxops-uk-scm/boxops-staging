import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import HeadingPage from './HeadingPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof HeadingPage> = {
  root: JSResource('HeadingPage', () => import('./HeadingPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/heading',
  entryPoint: entrypoint,
  title: 'Heading',
  description: 'Use a heading to give structure to content.',
};

export default route;
