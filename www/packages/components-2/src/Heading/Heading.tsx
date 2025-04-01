import '../tokens.stylex.ts';

import { ElementType, forwardRef } from 'react';
import { PolyRefFunction } from 'react-polymorphed';
import { textColor } from '../tokens.stylex.js';
import * as stylex from '@stylexjs/stylex';

const polyRef = forwardRef as PolyRefFunction;

export type Props = {
  isContent?: boolean;
  children?: React.ReactNode;
  style?: stylex.StyleXStyles;
};

const Heading = polyRef<ElementType, Props>(({ as: As = 'h2', style, isContent = false, ...props }, ref) => {
  return <As ref={ref} {...props} {...stylex.props(styles.base, getStyles(As, isContent), style)} />;
});

export default Heading;

function getStyles(as: ElementType, isContent: boolean): stylex.StyleXStyles[] {
  switch (as) {
    case 'h1':
      return [isContent ? variants.title : variants.h1];
    case 'h2':
      return [isContent ? variants.section : variants.h2];
    case 'h3':
      return [isContent ? variants.content : variants.h3];
    case 'h4':
      return [isContent ? variants.group : variants.h4];
    default:
      return [];
  }
}

export const styles = stylex.create({
  base: {
    color: textColor.onLightMedia,
    fontFamily: '"Open Sans", sans-serif',
    marginTop: 0,
    marginBlockEnd: 0,
  },
});

export const variants = stylex.create({
  h1: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
  h2: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: 0,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: 0,
  },
  title: {
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '48px',
    letterSpacing: 0,
  },
  section: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: 0,
  },
  content: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: 0,
  },
  group: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
});
