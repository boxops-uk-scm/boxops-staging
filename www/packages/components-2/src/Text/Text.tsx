import '../tokens.stylex.ts';

import React, { ElementType, forwardRef } from 'react';
import { PolyRefFunction } from 'react-polymorphed';
import { textColor } from '../tokens.stylex.js';
import * as stylex from '@stylexjs/stylex';

const polyRef = forwardRef as PolyRefFunction;

export type Props = {
  children?: React.ReactNode;
  style?: stylex.StyleXStyles;
  variant?: keyof typeof variants;
  unselectable?: boolean;
};

const Text = polyRef<ElementType, Props>(({ as: As = 'span', variant, unselectable, style, ...props }, ref) => (
  <As
    ref={ref}
    {...props}
    {...stylex.props(
      styles.base,
      getStyles(As),
      variant && variants[variant],
      unselectable && styles.unselectable,
      style,
    )}
  />
));

Text.displayName = 'Text';

export default React.memo(Text);

function getStyles(as: ElementType): stylex.StyleXStyles[] {
  switch (as) {
    case 'b':
    case 'strong':
      return [styles.bold];
    case 'small':
      return [styles.small];
    case 'code':
      return [styles.code];
    case 'i':
    case 'em':
      return [styles.italic];
    case 'u':
      return [styles.underline];
    case 's':
      return [styles.strikethrough];
    default:
      return [styles.body];
  }
}

export const styles = stylex.create({
  base: {
    fontFamily: '"Open Sans", sans-serif',
  },
  body: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
    letterSpacing: '-0.24px',
  },
  small: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  code: {
    fontFamily: '"CommitMono", monospace',
  },
  unselectable: {
    userSelect: 'none',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecoration: 'underline',
  },
  strikethrough: {
    textDecoration: 'line-through',
  },
});

export const variants = stylex.create({
  subtle: {
    color: textColor.subtle,
  },
  onLightMedia: {
    color: textColor.onLightMedia,
  },
  onDarkMedia: {
    color: textColor.onDarkMedia,
  },
});
