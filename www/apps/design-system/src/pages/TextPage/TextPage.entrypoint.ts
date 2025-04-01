import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import TextPage from './TextPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof TextPage> = {
  root: JSResource('TextPage', () => import('./TextPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/text',
  entryPoint: entrypoint,
  title: 'Text',
  description: 'Use text to display content with consistent typography.',
};

export default route;
