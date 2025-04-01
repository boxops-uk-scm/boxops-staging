import '../colors.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { backgroundColors } from '../colors.stylex';

interface BXCardProps {
  children?: React.ReactNode;
  style?: stylex.StyleXStyles;
}

const BXCard = forwardRef<HTMLDivElement, BXCardProps>(({ children, style }: BXCardProps, ref) => {
  return (
    <div ref={ref} {...stylex.props(bxCardStyles.base, style)}>
      {children}
    </div>
  );
});

BXCard.displayName = 'BXCard';

const bxCardStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: backgroundColors.card,
    borderRadius: '12px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 6px 0px;',
    padding: '8px',
    gap: '8px',
  },
});

export { BXCard, bxCardStyles };
export type { BXCardProps };
