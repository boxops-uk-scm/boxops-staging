import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import ButtonGroupPage from './ButtonGroupPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof ButtonGroupPage> = {
  root: JSResource('ButtonGroupPage', () => import('./ButtonGroupPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/buttongroup',
  entryPoint: entrypoint,
  title: 'ButtonGroup',
  description: 'Use a button group to show that multiple buttons are related.',
};

export default route;
