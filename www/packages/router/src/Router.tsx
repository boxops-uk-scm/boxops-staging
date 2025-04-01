import { preparePreloadableRoutes, SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import { useMemo, useRef } from 'react';
import { useRelayEnvironment } from 'react-relay';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageRoute } from './Route';
import useRouterConfig, { RouterConfig } from './useRouterConfig';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type EmptyEntryPointProps = SimpleEntryPointProps<{}>;

function foldRoutes(config: RouterConfig): PageRoute[] {
  return config.routes.reduce<PageRoute[]>((routes, route) => {
    switch (route.type) {
      case 'page': {
        routes.push(route);
        return routes;
      }
      case 'group': {
        return routes.concat(route.children);
      }
    }
  }, []);
}

export default function Router() {
  const environment = useRelayEnvironment();
  const environmentRef = useRef(environment);
  environmentRef.current = environment;

  (window as unknown as { store: unknown })['store'] = environment.getStore();

  const routerConfig = useRouterConfig();

  const router = useMemo(() => {
    const routes = preparePreloadableRoutes(foldRoutes(routerConfig), {
      getEnvironment() {
        return environmentRef.current;
      },
    });

    return createBrowserRouter(routes);
  }, []);

  return <RouterProvider router={router} />;
}
