import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import LinkPage from './LinkPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof LinkPage> = {
  root: JSResource('LinkPage', () => import('./LinkPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/link',
  entryPoint: entrypoint,
  title: 'Link',
  description: 'Links enable the user to navigate to pages, documents, or resources.',
};

export default route;
