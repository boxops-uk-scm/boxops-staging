import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import StatusDotPage from './StatusDotPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof StatusDotPage> = {
  root: JSResource('StatusDotPage', () => import('./StatusDotPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/statusdot',
  entryPoint: entrypoint,
  title: 'StatusDot',
  description:
    'Use a status dot to provide contextual indicators, such as user presence (e.g., online, busy, offline).',
};

export default route;
