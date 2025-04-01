import { GroupRoute } from '@boxops/router';
import '../../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Flexbox from '../../Flexbox';
import Heading from '../../Heading';
import { gap } from '../../tokens.stylex';
import SitemapItem from '../Item';

export interface Props {
  groupRoute: GroupRoute;
}

const Section = React.forwardRef<HTMLDivElement, Props>(({ groupRoute: { label, children }, ...props }, ref) => {
  return (
    <Flexbox ref={ref} style={styles.base} direction="column" gap="S" {...props}>
      <Heading as="h1">{label}</Heading>
      <div {...stylex.props(styles.items)}>
        {children.map((child, i) => (
          <SitemapItem key={i} pageRoute={child} />
        ))}
      </div>
    </Flexbox>
  );
});

Section.displayName = 'Sitemap.Section';

export default Section;

export const styles = stylex.create({
  base: {},
  items: {
    display: 'grid',
    gridTemplateRows: 'repeat(8, auto)',
    gridAutoFlow: 'column',
    gap: gap.M,
  },
});
