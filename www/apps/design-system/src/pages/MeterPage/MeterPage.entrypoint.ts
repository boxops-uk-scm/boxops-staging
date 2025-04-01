import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import MeterPage from './MeterPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof MeterPage> = {
  root: JSResource('MeterPage', () => import('./MeterPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/meter',
  title: 'Meter',
  entryPoint: entrypoint,
  description: 'Use a meter to display a percentage or progress.',
};

export default route;
