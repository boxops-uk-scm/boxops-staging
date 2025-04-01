import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { gap } from '../tokens.stylex';
import Flexbox from '../Flexbox';
import Heading from '../Heading';
import Text from '../Text';

export interface Props {
  title?: string;
  subtitle?: string;
  style?: stylex.StyleXStyles;
  children?: React.ReactNode;
}

const MetadataList = React.forwardRef<HTMLDivElement, Props>(({ title, subtitle, style, ...props }, ref) => {
  return (
    <Flexbox direction="column" gap="S">
      <Flexbox direction="column">
        {title && <Heading as="h4">{title}</Heading>}
        {subtitle && (
          <Text as="small" variant="subtle">
            {subtitle}
          </Text>
        )}
      </Flexbox>
      <div ref={ref} {...props} {...stylex.props(styles.base, style)} />
    </Flexbox>
  );
});

MetadataList.displayName = 'MetadataList';

export default MetadataList;

export const styles = stylex.create({
  base: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    columnGap: gap.XL,
    rowGap: gap.XS,
  },
});
