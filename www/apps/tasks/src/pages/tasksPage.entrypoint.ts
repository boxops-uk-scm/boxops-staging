import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

import TasksPage from './tasksPage';

const homePageEntryPoint: SimpleEntryPoint<typeof TasksPage> = {
  root: JSResource('TasksPage', () => import('./tasksPage')),
  getPreloadProps() {
    return {};
  },
};

export default homePageEntryPoint;
