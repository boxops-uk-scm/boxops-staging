import { isGroupRoute, isPageRoute, useRoutes } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { BXSitemapSection } from './BXSitemapSection';
import { partition } from './partition';
import { BXCard } from '../BXCard/BXCard';


const BXSitemap = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const [groupRoutes, uncategorizedRoutes] = partition(useRoutes(), isGroupRoute);

  const topLevelPageRoutes = uncategorizedRoutes.filter(isPageRoute);

  return (
    <BXCard ref={ref} style={bxSitemapStyles.base}>
      <div style={{ display: 'flex', gap: '16px' }}>
        {groupRoutes.map((groupRoute, i) => {
          return <BXSitemapSection key={i} groupRoute={groupRoute} />;
        })}
        {topLevelPageRoutes.length > 0 && (
          <BXSitemapSection groupRoute={{ type: 'group', label: 'Uncategorized', children: topLevelPageRoutes }} />
        )}
      </div>
    </BXCard>
  );
});

BXSitemap.displayName = 'BXSitemap';

const bxSitemapStyles = stylex.create({
  base: {
    padding: '16px',
    gap: '16px',
    marginLeft: '8px',
    marginRight: '8px',
    maxWidth: 'calc(var(--radix-hover-card-content-available-width) - 16px)',
    overflow: 'auto',
  },
});

export { BXSitemap, bxSitemapStyles };
