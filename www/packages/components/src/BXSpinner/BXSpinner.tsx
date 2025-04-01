import stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { ReactComponent as SpinnerDark } from './dark.svg';
import { ReactComponent as SpinnerLight } from './light.svg';
import { BXIconProps, bxIconSizes, bxIconStyles } from '../BXIcon';

type BXSpinnerProps = Omit<BXIconProps, 'variant'> & {
  variant?: BXSpinnerVariant;
};

const BXSpinner = forwardRef<SVGSVGElement, BXSpinnerProps>(
  ({ size = 'medium', style, variant = 'dark', ...props }: BXSpinnerProps, ref) => {
    switch (variant) {
      case 'light':
        return <SpinnerLight ref={ref} {...stylex.props(bxIconStyles.base, bxIconSizes[size], style)} {...props} />;
      case 'dark':
        return <SpinnerDark ref={ref} {...stylex.props(bxIconStyles.base, bxIconSizes[size], style)} {...props} />;
    }
  },
);

BXSpinner.displayName = 'BXSpinner';

type BXSpinnerVariant = 'light' | 'dark';

export { BXSpinner };

export type { BXSpinnerProps, BXSpinnerVariant };
