import { forwardRef } from 'react';
import '../colors.stylex';

import * as stylex from '@stylexjs/stylex';

interface BXGlimmerProps {
  style?: stylex.StyleXStyles;
}

const BXGlimmer = forwardRef<HTMLSpanElement, BXGlimmerProps>(({ style }: BXGlimmerProps, ref) => (
  <span ref={ref} {...stylex.props(bxGlimmerStyles.base, style)} />
));

BXGlimmer.displayName = 'BXGlimmer';

const shimmer = stylex.keyframes({
  to: {
    backgroundPositionX: '-300%',
  },
});

const bxGlimmerStyles = stylex.create({
  base: {
    background: `linear-gradient(to right, rgba(206, 230, 255, 0.2) 0%, rgba(245,206,230,0.15) 48%, rgba(245,206,230,0.15) 52%, rgba(206, 230, 255, 0.2) 100%);`,
    backgroundSize: '300%',
    backgroundPositionX: '300%',
    animation: `${shimmer} 4s infinite linear`,
  },
});

export { BXGlimmer, bxGlimmerStyles };
export type { BXGlimmerProps };
