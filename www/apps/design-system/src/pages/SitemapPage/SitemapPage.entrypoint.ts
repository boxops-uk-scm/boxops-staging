import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import MegaMenuPage from './SitemapPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof MegaMenuPage> = {
  root: JSResource('MegaMenuPage', () => import('./SitemapPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/sitemap',
  title: 'Sitemap',
  entryPoint: entrypoint,
  description: 'A sitemap allows the user to navigate to any page in the application.',
};

export default route;
