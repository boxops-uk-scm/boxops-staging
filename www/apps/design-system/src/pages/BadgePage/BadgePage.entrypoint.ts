import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';
import BadgePage from './BadgePage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof BadgePage> = {
  root: JSResource('BadgePage', () => import('./BadgePage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/badge',
  entryPoint: entrypoint,
  title: 'Badge',
  description: 'Use a badge to display notifications, counts, or statuses.',
};

export default route;
