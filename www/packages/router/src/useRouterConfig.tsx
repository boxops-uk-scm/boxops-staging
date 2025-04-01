import React from 'react';
import { Route } from './Route';

export type RouterConfig = {
  routes: Route[];
};

const RouterContext = React.createContext<RouterConfig | undefined>(undefined);

export const RouterProvider: React.FC<RouterConfig & { children: React.ReactNode }> = ({ routes, children }) => {
  return <RouterContext.Provider value={{ routes }}>{children}</RouterContext.Provider>;
};

const useRouterConfig = (): RouterConfig => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error('useRoutes cannot be used outside a RouterProvider.');
  }
  return context;
};

export default useRouterConfig;
