import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import AvatarPage from './AvatarPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof AvatarPage> = {
  root: JSResource('AvatarPage', () => import('./AvatarPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/avatar',
  entryPoint: entrypoint,
  title: 'Avatar',
  description: 'An avatar represents a user or entity.',
};

export default route;
