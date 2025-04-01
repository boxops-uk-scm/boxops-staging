import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { dividerColors } from '../colors.stylex';

interface BXDividerProps {
  orientation?: BXDividerOrientation;
  variant?: BXDividerVariant;
  style?: stylex.StyleXStyles;
}

const BXDivider = forwardRef<HTMLDivElement, BXDividerProps>(
  ({ orientation = 'horizontal', variant = 'default', style }, ref) => (
    <div
      role="separator"
      aria-orientation={orientation}
      ref={ref}
      {...stylex.props(bxDividerStyles.base, bxDividerOrientations[orientation], bxDividerVariants[variant], style)}
    />
  ),
);

BXDivider.displayName = 'BXDivider';

type BXDividerOrientation = keyof typeof bxDividerOrientations;

const bxDividerStyles = stylex.create({
  base: {
    border: 'none',
    flexGrow: 1,
  },
});

const bxDividerOrientations = stylex.create({
  horizontal: {
    height: '2px',
    backgroundColor: '#E5E7EB',
  },
  vertical: {
    width: '2px',
    backgroundColor: '#E5E7EB',
  },
});

type BXDividerVariant = keyof typeof bxDividerVariants;

const bxDividerVariants = stylex.create({
  default: {
    backgroundColor: dividerColors.default,
  },
  strong: {
    backgroundColor: dividerColors.strong,
  },
});

export { BXDivider, bxDividerStyles, bxDividerOrientations, bxDividerVariants };
export type { BXDividerProps, BXDividerOrientation, BXDividerVariant };
