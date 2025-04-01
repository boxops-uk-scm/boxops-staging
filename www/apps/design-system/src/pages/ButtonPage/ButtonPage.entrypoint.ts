import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import ButtonPage from './ButtonPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof ButtonPage> = {
  root: JSResource('ButtonPage', () => import('./ButtonPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/button',
  entryPoint: entrypoint,
  title: 'Button',
  description: 'Buttons allow users to trigger actions or events.',
};

export default route;
