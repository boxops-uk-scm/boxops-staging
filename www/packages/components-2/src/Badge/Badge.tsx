import '../tokens.stylex.ts';
import './vars.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { nonsemanticBackgroundColor, nonsemanticTextColor } from '../tokens.stylex';
import Text from '../Text';
import Flexbox from '../Flexbox';
import { vars } from './vars.stylex';

export interface Props {
  label?: string;
  color?: keyof typeof variants.color;
  style?: stylex.StyleXStyles;
  startContent?: React.ReactNode;
}

const Badge = forwardRef<HTMLDivElement, Props>(({ label, startContent, color, style }: Props, ref) => (
  <Flexbox
    ref={ref}
    justifyContent="center"
    alignItems="center"
    gap="XS"
    style={[styles.base, color && variants.color[color], color && styles.dot, style]}
  >
    {startContent}
    <Text unselectable as="small" style={styles.label}>
      {label}
    </Text>
  </Flexbox>
));

Badge.displayName = 'Badge';

export default Badge;

export const styles = stylex.create({
  base: {
    height: '20px',
    borderRadius: '10px',
    padding: `0px 6px 0 6px`,
    minWidth: '20px',
    backgroundColor: vars.backgroundColor,
    fill: vars.fill,
  },
  label: {
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: -0.24,
    color: vars.color,
  },
  dot: {
    [vars.fill]: `oklch(from ${vars.backgroundColor} l c h / 100%)`,
  },
});

export const variants = {
  color: stylex.create({
    gray: {
      [vars.color]: nonsemanticTextColor.gray,
      [vars.backgroundColor]: nonsemanticBackgroundColor.gray,
    },
    blue: {
      [vars.color]: nonsemanticTextColor.blue,
      [vars.backgroundColor]: nonsemanticBackgroundColor.blue,
    },
    green: {
      [vars.color]: nonsemanticTextColor.green,
      [vars.backgroundColor]: nonsemanticBackgroundColor.green,
    },
    yellow: {
      [vars.color]: nonsemanticTextColor.yellow,
      [vars.backgroundColor]: nonsemanticBackgroundColor.yellow,
    },
    orange: {
      [vars.color]: nonsemanticTextColor.orange,
      [vars.backgroundColor]: nonsemanticBackgroundColor.orange,
    },
    red: {
      [vars.color]: nonsemanticTextColor.red,
      [vars.backgroundColor]: nonsemanticBackgroundColor.red,
    },
    magenta: {
      [vars.color]: nonsemanticTextColor.pink,
      [vars.backgroundColor]: nonsemanticBackgroundColor.pink,
    },
    purple: {
      [vars.color]: nonsemanticTextColor.purple,
      [vars.backgroundColor]: nonsemanticBackgroundColor.purple,
    },
    teal: {
      [vars.color]: nonsemanticTextColor.teal,
      [vars.backgroundColor]: nonsemanticBackgroundColor.teal,
    },
    cyan: {
      [vars.color]: nonsemanticTextColor.cyan,
      [vars.backgroundColor]: nonsemanticBackgroundColor.cyan,
    },
  }),
};
