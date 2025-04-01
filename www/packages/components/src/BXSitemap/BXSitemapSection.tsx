import { GroupRoute } from '@boxops/router/src/router';
import * as stylex from '@stylexjs/stylex';

import { BXSitemapItem } from './BXSitemapItem';
import { BXHeading } from '../BXHeading/BXHeading';

interface BXSitemapSectionProps {
  groupRoute: GroupRoute;
}

const BXSitemapSection = ({ groupRoute }: BXSitemapSectionProps) => {
  return (
    <div {...stylex.props(bxSitemapSectionStyles.base)}>
      <BXHeading variant="h1">{groupRoute.label}</BXHeading>
      <div {...stylex.props(bxSitemapSectionStyles.items)}>
        {groupRoute.children.map((child, i) => (
          <BXSitemapItem key={i} pageRoute={child} />
        ))}
      </div>
    </div>
  );
};

BXSitemapSection.displayName = 'BXSitemap';

const bxSitemapSectionStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  items: {
    display: 'grid',
    gridTemplateRows: 'repeat(8, auto)',
    gridAutoFlow: 'column',
    gap: '6px',
  },
});

export { BXSitemapSection, bxSitemapSectionStyles };
export type { BXSitemapSectionProps };
