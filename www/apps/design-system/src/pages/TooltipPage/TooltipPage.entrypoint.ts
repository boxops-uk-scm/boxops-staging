import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import TooltipPage from './TooltipPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof TooltipPage> = {
  root: JSResource('TooltipPage', () => import('./TooltipPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/tooltip',
  entryPoint: entrypoint,
  title: 'Tooltip',
  description: 'Use a tooltip to provide contextual information when an element is hovered over or focused.',
};

export default route;
