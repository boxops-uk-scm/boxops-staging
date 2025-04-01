import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import ToggleButtonPage from './ToggleButtonPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof ToggleButtonPage> = {
  root: JSResource('ToggleButtonPage', () => import('./ToggleButtonPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/togglebutton',
  entryPoint: entrypoint,
  title: 'ToggleButton',
  description: 'Use a toggle button to switch between two states or options.',
};

export default route;
