import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import MetadataListPage from './MetadataListPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof MetadataListPage> = {
  root: JSResource('MetadataListPage', () => import('./MetadataListPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/metadatalist',
  title: 'MetadataList',
  entryPoint: entrypoint,
  description: 'Use a metadata list to display key-value pairs.',
};

export default route;
