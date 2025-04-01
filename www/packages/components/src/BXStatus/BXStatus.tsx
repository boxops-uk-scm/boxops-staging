import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { iconColors, internalColors, persistentColors } from '../colors.stylex';

interface BXStatusProps {
  size?: BXStatusSize;
  variant?: BXStatusVariant;
  style?: stylex.StyleXStyles;
}

const BXStatus = forwardRef<HTMLSpanElement, BXStatusProps>(
  ({ variant = 'default', size = 'medium', style, ...props }: BXStatusProps, ref) => (
    <span
      ref={ref}
      {...stylex.props(bxStatusStyles.base, bxStatusSizes[size], bxStatusVariants[variant], style)}
      {...props}
    />
  ),
);

BXStatus.displayName = 'BXStatus';

const bxStatusStyles = stylex.create({
  base: {
    backgroundColor: iconColors.secondary,
    borderRadius: '50%',
    borderColor: internalColors.inputBackground,
    borderStyle: 'solid',
  },
});

type BXStatusVariant = keyof typeof bxStatusVariants;

const bxStatusVariants = stylex.create({
  default: {
    backgroundColor: iconColors.secondary,
  },
  info: {
    backgroundColor: persistentColors.accent,
  },
  success: {
    backgroundColor: persistentColors.positive,
  },
  error: {
    backgroundColor: persistentColors.negative,
  },
  warning: {
    backgroundColor: persistentColors.warning,
  },
});

type BXStatusSize = keyof typeof bxStatusSizes;

const bxStatusSizes = stylex.create({
  small: {
    width: '8px',
    height: '8px',
    borderWidth: '2px',
  },
  medium: {
    width: '12px',
    height: '12px',
    borderWidth: '2px',
  },
  large: {
    width: '16px',
    height: '16px',
    borderWidth: '3px',
  },
  xlarge: {
    width: '28px',
    height: '28px',
    borderWidth: '4px',
  },
});

export { BXStatus, bxStatusStyles, bxStatusSizes, bxStatusVariants };
export type { BXStatusProps, BXStatusSize, BXStatusVariant };
