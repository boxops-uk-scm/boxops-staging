import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { gap } from '../tokens.stylex.js';
import React from 'react';

export interface Props {
  gap?: keyof typeof variants.gap;
  direction?: keyof typeof variants.direction;
  alignItems?: keyof typeof variants.alignItems;
  justifyContent?: keyof typeof variants.justifyContent;
  children?: React.ReactNode;
  style?: stylex.StyleXStyles;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
}

const Flexbox = React.forwardRef<HTMLDivElement, Props>(
  ({ direction = 'row', alignItems = 'stretch', justifyContent = 'start', gap, children, style, ...props }, ref) => (
    <div
      ref={ref}
      {...stylex.props(
        styles.base,
        direction && variants.direction[direction],
        alignItems && variants.alignItems[alignItems],
        justifyContent && variants.justifyContent[justifyContent],
        gap && variants.gap[gap],
        style,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

Flexbox.displayName = 'Flexbox';

export default Flexbox;

export const styles = stylex.create({
  base: {
    display: 'flex',
  },
});

export const variants = {
  gap: stylex.create({
    XXS: {
      gap: gap.XXS,
    },
    XS: {
      gap: gap.XS,
    },
    S: {
      gap: gap.S,
    },
    M: {
      gap: gap.M,
    },
    L: {
      gap: gap.L,
    },
    XL: {
      gap: gap.XL,
    },
    XXL: {
      gap: gap.XXL,
    },
  }),
  direction: stylex.create({
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
  }),
  alignItems: stylex.create({
    start: {
      alignItems: 'flex-start',
    },
    center: {
      alignItems: 'center',
    },
    end: {
      alignItems: 'flex-end',
    },
    baseline: {
      alignItems: 'baseline',
    },
    stretch: {
      alignItems: 'stretch',
    },
  }),
  justifyContent: stylex.create({
    start: {
      justifyContent: 'flex-start',
    },
    center: {
      justifyContent: 'center',
    },
    end: {
      justifyContent: 'flex-end',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    spaceEvenly: {
      justifyContent: 'space-evenly',
    },
    spaceAround: {
      justifyContent: 'space-around',
    },
  }),
};
