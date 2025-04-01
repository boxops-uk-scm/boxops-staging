import { useContext } from 'react';
import { UNSAFE_DataRouterContext } from 'react-router-dom';
import { PageRoute } from './Route';

const useMatch = () => {
  const dataRouterContext = useContext(UNSAFE_DataRouterContext);
  if (dataRouterContext == null) {
    throw new Error('useMatch cannot be used outside a RouterProvider.');
  }
  const match = dataRouterContext.router.state.matches.find(Boolean);
  if (match == null) {
    throw new Error('The current path does not match any route.');
  }
  return match.route as PageRoute;
};

export default useMatch;
