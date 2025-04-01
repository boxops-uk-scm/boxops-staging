import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { BXCard } from '../BXCard';
import { backgroundColors, persistentColors } from '../colors.stylex';

interface BXToastProps {
  children?: React.ReactNode;
  style?: stylex.StyleXStyles;
  variant?: BXToastVariant;
}

const BXToast = forwardRef<HTMLDivElement, BXToastProps>(({ children, variant, style }, ref) => (
  <BXCard ref={ref} style={[bXToastStyles.base, variant && bxToastVariants[variant], style]}>
    <div {...stylex.props(bXToastStyles.content)}>{children}</div>
  </BXCard>
));

BXToast.displayName = 'BXToast';

const bXToastStyles = stylex.create({
  base: {
    width: '300px',
    height: '150px',
    padding: '0px',
  },
  content: {
    backgroundColor: backgroundColors.card,
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    marginLeft: '12px',
    height: '100%',
  },
});

type BXToastVariant = keyof typeof bxToastVariants;

const bxToastVariants = stylex.create({
  success: {
    backgroundColor: persistentColors.positive,
  },
  warning: {
    backgroundColor: persistentColors.warning,
  },
  error: {
    backgroundColor: persistentColors.negative,
  },
  info: {
    backgroundColor: persistentColors.accent,
  },
});

export { BXToast, bXToastStyles, bxToastVariants };
export type { BXToastProps, BXToastVariant };
