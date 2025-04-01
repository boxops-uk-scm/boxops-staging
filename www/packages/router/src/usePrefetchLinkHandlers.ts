import React from 'react';
import { useNavigate } from 'react-router';
import { useLinkDataLoadHandler, useLinkResourceLoadHandler } from '@loop-payments/react-router-relay';
import { useLinkEntryPointLoadHandler } from '@loop-payments/react-router-relay/dist/useLinkEntryPointLoadHandler.js';

export function usePrefetchLinkHandlers(path: string): [React.MouseEventHandler, React.MouseEventHandler] {
  const navigate = useNavigate();

  const fetchEntryPoint = useLinkEntryPointLoadHandler(path);
  const fetchResources = useLinkResourceLoadHandler(path);
  const fetchData = useLinkDataLoadHandler(path);

  React.useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(fetchEntryPoint);
      return () => cancelIdleCallback(id);
    }

    const id = requestAnimationFrame(fetchEntryPoint);
    return () => cancelAnimationFrame(id);
  }, [fetchEntryPoint]);

  const onMouseEnter = React.useCallback(() => {
    fetchResources();
  }, [fetchResources]);

  const onClick = React.useCallback(() => {
    fetchResources();
    fetchData();
    navigate(path);
  }, [navigate, fetchResources, fetchData, path]);

  return [onMouseEnter, onClick];
}
