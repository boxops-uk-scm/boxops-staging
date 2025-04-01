import '../colors.stylex';

import * as stylex from '@stylexjs/stylex';
import { FC, forwardRef, SVGProps } from 'react';

interface BXIconProps {
  size?: BXIconSize;
  style?: stylex.StyleXStyles;
  variant?: BXIconVariant;
}

interface InternalIconProps {
  outline: FC<SVGProps<SVGSVGElement>>;
  solid: FC<SVGProps<SVGSVGElement>>;
}

const BXIcon = forwardRef<SVGSVGElement, BXIconProps & InternalIconProps>(
  (
    { variant = 'outline', size = 'medium', style, outline: Outline, solid: Solid }: BXIconProps & InternalIconProps,
    ref,
  ) => {
    const stylexProps = stylex.props(bxIconStyles.base, bxIconSizes[size], style);

    switch (variant) {
      case 'outline':
        return <Outline ref={ref} {...stylexProps} />;
      case 'solid':
        return <Solid ref={ref} {...stylexProps} />;
    }
  },
);

BXIcon.displayName = 'BXIcon';

const bxIconStyles = stylex.create({
  base: {
    fill: 'inherit',
    color: 'inherit',
  },
});

type BXIconVariant = 'outline' | 'solid';

type BXIconSize = keyof typeof bxIconSizes;

const bxIconSizes = stylex.create({
  small: {
    width: '16px',
    height: '16px',
  },
  medium: {
    width: '20px',
    height: '20px',
  },
  large: {
    width: '24px',
    height: '24px',
  },
  xlarge: {
    width: '32px',
    height: '32px',
  },
  huge: {
    width: '48px',
    height: '48px',
  },
});

export { BXIcon, bxIconStyles, bxIconSizes };

export type { BXIconProps, BXIconVariant, BXIconSize };
