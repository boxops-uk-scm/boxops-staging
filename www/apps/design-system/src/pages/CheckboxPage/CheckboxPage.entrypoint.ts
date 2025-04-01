import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import CheckboxPage from './CheckboxPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof CheckboxPage> = {
  root: JSResource('CheckboxPage', () => import('./CheckboxPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/checkbox',
  entryPoint: entrypoint,
  title: 'Checkbox',
  description: 'Use a checkbox to allow users to select one or more options from a list.',
};

export default route;
