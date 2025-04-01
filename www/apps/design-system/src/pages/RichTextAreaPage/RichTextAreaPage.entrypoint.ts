import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import RichTextAreaPage from './RichTextAreaPage';
import { PageRoute } from '@boxops/router';

const entrypoint: SimpleEntryPoint<typeof RichTextAreaPage> = {
  root: JSResource('RichTextAreaPage', () => import('./RichTextAreaPage')),
  getPreloadProps() {
    return {};
  },
};

const route: PageRoute = {
  type: 'page',
  path: '/design-system/richtextarea',
  title: 'RichTextArea',
  entryPoint: entrypoint,
  description: '',
};

export default route;
