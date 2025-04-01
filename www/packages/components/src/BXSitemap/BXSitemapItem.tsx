import { PageRoute } from '@boxops/router/src/router';
import * as stylex from '@stylexjs/stylex';

import { BXLink } from '../BXLink/BXLink';
import { BXTextPair } from '../BXTextPair/BXTextPair';

interface BXSitemapItemProps {
  pageRoute: PageRoute;
}

const BXSitemapItem = ({ pageRoute }: BXSitemapItemProps) => {
  return (
    <BXTextPair style={bxSitemapItemStyles.base} variant="h4" description={pageRoute.description}>
      <BXLink href="https://www.google.com">{pageRoute.title}</BXLink>
    </BXTextPair>
  );
};

BXSitemapItem.displayName = 'BXSitemap';

const bxSitemapItemStyles = stylex.create({
  base: {
    width: '250px',
  },
});

export { BXSitemapItem, bxSitemapItemStyles };
export type { BXSitemapItemProps };
