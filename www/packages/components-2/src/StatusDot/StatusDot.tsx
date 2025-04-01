import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { backgroundColor, iconColor, semanticColor } from '../tokens.stylex';

export interface Props {
  style?: stylex.StyleXStyles;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
}

const StatusDot = React.forwardRef<HTMLDivElement, Props>(({ style, variant, size = 'M', ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      {...stylex.props(styles.base, variant && variants[variant], size && sizes[size], style)}
    />
  );
});

StatusDot.displayName = 'StatusDot';

export default StatusDot;

export const styles = stylex.create({
  base: {
    backgroundColor: iconColor.secondary,
    borderRadius: '50%',
    borderColor: backgroundColor.input,
    borderStyle: 'solid',
  },
});

export const variants = stylex.create({
  info: {
    backgroundColor: semanticColor.accent,
  },
  success: {
    backgroundColor: semanticColor.positive,
  },
  error: {
    backgroundColor: semanticColor.negative,
  },
  warning: {
    backgroundColor: semanticColor.warning,
  },
});

export const sizes = stylex.create({
  S: {
    width: '8px',
    height: '8px',
    borderWidth: '2px',
  },
  M: {
    width: '12px',
    height: '12px',
    borderWidth: '2px',
  },
  L: {
    width: '16px',
    height: '16px',
    borderWidth: '3px',
  },
  XL: {
    width: '28px',
    height: '28px',
    borderWidth: '4px',
  },
});
