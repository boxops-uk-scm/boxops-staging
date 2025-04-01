import { isGroupRoute, isPageRoute, useRouterConfig } from '@boxops/router';
import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Card from '../Card';
import Flexbox from '../Flexbox';
import SitemapSection from './Section';
import SitemapItem from './Item';
import { padding } from '../tokens.stylex';

export interface Props {
  style?: stylex.StyleXStyles;
}

const Sitemap = React.forwardRef<HTMLDivElement, Props>(({ style, ...props }, ref) => {
  const { routes } = useRouterConfig();

  const visibleRoutes = routes.filter((route) => !('hideFromNav' in route && route.hideFromNav));
  const groupRoutes = visibleRoutes.filter(isGroupRoute);
  const pageRoutes = visibleRoutes.filter(isPageRoute);

  return (
    <Card ref={ref} style={[styles.base, style]} {...props}>
      <Flexbox gap="M" style={styles.container}>
        {groupRoutes.map((groupRoute, i) => {
          return <SitemapSection key={i} groupRoute={groupRoute} />;
        })}
        {pageRoutes.length > 0 &&
          (groupRoutes.length > 0 ? (
            <SitemapSection groupRoute={{ type: 'group', label: 'Uncategorized', children: pageRoutes }} />
          ) : (
            <div {...stylex.props(SitemapSection.styles.items)}>
              {pageRoutes.map((child, i) => (
                <SitemapItem key={i} pageRoute={child} />
              ))}
            </div>
          ))}
      </Flexbox>
    </Card>
  );
});

Sitemap.displayName = 'Sitemap';

export default Sitemap;

export const styles = stylex.create({
  base: {
    padding: padding.M,
    marginLeft: padding.M,
    marginRight: padding.M,
    maxWidth: `calc(var(--radix-hover-card-content-available-width) - 64px)`,
    overflow: 'auto',
  },
  container: {
    minWidth: 'fit-content',
  },
});
