import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import CardPage from './CardPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof CardPage> = {
  root: JSResource('CardPage', () => import('./CardPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/card',
  entryPoint: entrypoint,
  title: 'Card',
  description: 'Use a card to group related content and actions.',
};

export default route;
