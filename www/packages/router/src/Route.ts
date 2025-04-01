import { EntryPointRouteObject } from '@loop-payments/react-router-relay';

export type PageRoute = EntryPointRouteObject & {
  type: 'page';
  title: string;
  label?: string;
  hidden?: boolean;
  description?: string;
  hideFromNav?: boolean;
};

export function isPageRoute(route: Route): route is PageRoute {
  return route.type === 'page';
}

export type GroupRoute = {
  type: 'group';
  label: string;
  children: PageRoute[];
};

export function isGroupRoute(route: Route): route is GroupRoute {
  return route.type === 'group';
}

export type Route = PageRoute | GroupRoute;
