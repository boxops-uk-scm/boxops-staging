import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import DateTimePage from './DateTimePage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof DateTimePage> = {
  root: JSResource('DateTimePage', () => import('./DateTimePage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/datetime',
  entryPoint: entrypoint,
  title: 'DateTime',
  description: "Use DateTime to format dates and times in the user's local timezone.",
};

export default route;
