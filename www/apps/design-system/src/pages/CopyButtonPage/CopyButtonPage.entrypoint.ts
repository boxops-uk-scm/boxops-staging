import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import CopyButtonPage from './CopyButtonPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof CopyButtonPage> = {
  root: JSResource('CopyButtonPage', () => import('./CopyButtonPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/copybutton',
  entryPoint: entrypoint,
  title: 'CopyButton',
  description: 'Use a copy button to copy text to the clipboard.',
};

export default route;
