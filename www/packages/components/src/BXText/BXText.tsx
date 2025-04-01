import * as stylex from '@stylexjs/stylex';
import { forwardRef, type ReactNode } from 'react';

import { textColors } from '../colors.stylex';


type BXTextProps = {
  children?: ReactNode;
  style?: stylex.StyleXStyles;
  variant?: BXTextVariant;
};

const BXText = forwardRef<HTMLSpanElement, BXTextProps>(({ variant = 'body', children, style, ...props }, ref) => (
  <span ref={ref} {...stylex.props(bxTextStyles.base, bxTextVariants[variant], style)} {...props}>
    {children}
  </span>
));

BXText.displayName = 'BXText';

const bxTextStyles = stylex.create({
  base: {
    fontFamily: '"Open Sans", sans-serif',
    color: textColors.primaryTextOnLightMedia,
  },
});

type BXTextVariant = keyof typeof bxTextVariants;

const bxTextVariants = stylex.create({
  largeEmphasized: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.24px',
  },
  largeBody: {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },
  emphasized: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '-0.24px',
  },
  body: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  code: {
    fontFamily: '"Fira Code", serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  supporting: {
    color: textColors.secondary,
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0px',
  },
});

export { BXText, bxTextStyles, bxTextVariants };

export type { BXTextProps, BXTextVariant };
