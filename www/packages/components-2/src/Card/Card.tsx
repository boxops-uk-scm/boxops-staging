import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Flexbox from '../Flexbox';
import { backgroundColor, gap, padding } from '../tokens.stylex';

export type Props = Flexbox.Props;

const Card = React.forwardRef<HTMLDivElement, Props>(({ style, ...props }, ref) => {
  return <Flexbox direction="column" ref={ref} style={[styles.base, style]} {...props} />;
});

Card.displayName = 'Card';

export default Card;

export const styles = stylex.create({
  base: {
    backgroundColor: backgroundColor.card,
    borderRadius: '12px',
    boxShadow: 'oklch(0% 0 0 / 20%) 0px 1px 6px 0px;',
    padding: padding.S,
    gap: gap.S,
  },
});
