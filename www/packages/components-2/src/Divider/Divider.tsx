import '../tokens.stylex.ts';

import { dividerColor } from '../tokens.stylex';
import { forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';

export interface Props {
  orientation?: keyof typeof variants.orientation;
  color?: keyof typeof variants.color;
  style?: stylex.StyleXStyles;
}

const Divider = forwardRef<HTMLDivElement, Props>(({ orientation = 'horizontal', color = 'subtle', style }, ref) => (
  <div
    role="separator"
    aria-orientation={orientation}
    ref={ref}
    {...stylex.props(styles.base, variants.orientation[orientation], variants.color[color], style)}
  />
));

Divider.displayName = 'Divider';

export default Divider;

export const styles = stylex.create({
  base: {
    backgroundColor: '#E5E7EB',
    border: 'none',
  },
});

export const variants = {
  orientation: stylex.create({
    horizontal: {
      height: '1px',
    },
    vertical: {
      width: '1px',
    },
  }),
  color: stylex.create({
    subtle: {
      backgroundColor: dividerColor.subtle,
    },
    strong: {
      backgroundColor: dividerColor.strong,
    },
  }),
};
