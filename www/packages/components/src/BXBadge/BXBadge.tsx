import '../colors.stylex.ts';
import './vars.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { FC, forwardRef } from 'react';

import { bxBadgeVars } from './vars.stylex';
import { BXIconProps } from '../BXIcon';
import { nonsemanticBackgroundColors, nonsemanticTextColors, persistentColors, textColors } from '../colors.stylex';

interface BXBadgeProps {
  label?: string;
  icon?: FC<BXIconProps>;
  variant?: BXBadgeVariant;
  style?: stylex.StyleXStyles;
}

const BXBadge = forwardRef<HTMLSpanElement, BXBadgeProps>(
  ({ label, icon: Icon, variant, style }: BXBadgeProps, ref) => (
    <span ref={ref} {...stylex.props(bxBadgeStyles.default, variant && bxBadgeVariants[variant], style)}>
      {Icon && <Icon variant="solid" size="small" />}
      {label}
    </span>
  ),
);

BXBadge.displayName = 'BXBadge';

const bxBadgeStyles = stylex.create({
  default: {
    height: '20px',
    fontSize: '12px',
    lineHeight: '12px',
    borderRadius: '10px',
    padding: '0px 6px 0 6px',
    minWidth: '20px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fill: bxBadgeVars.color,
    backgroundColor: bxBadgeVars.backgroundColor,
    gap: '2px',
    color: bxBadgeVars.color,
    userSelect: 'none',
    fontWeight: 600,
    letterSpacing: -0.24,
  },
});

type BXBadgeVariant = keyof typeof bxBadgeVariants;

const bxBadgeVariants = stylex.create({
  active: {
    [bxBadgeVars.backgroundColor]: persistentColors.accent,
  },
  positive: {
    [bxBadgeVars.backgroundColor]: persistentColors.positive,
  },
  error: {
    [bxBadgeVars.backgroundColor]: persistentColors.negative,
  },
  warning: {
    [bxBadgeVars.color]: textColors.primaryTextOnLightMedia,
    [bxBadgeVars.backgroundColor]: persistentColors.warning,
  },
  gray: {
    [bxBadgeVars.color]: nonsemanticTextColors.gray,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.gray,
  },
  blue: {
    [bxBadgeVars.color]: nonsemanticTextColors.blue,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.blue,
  },
  green: {
    [bxBadgeVars.color]: nonsemanticTextColors.green,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.green,
  },
  yellow: {
    [bxBadgeVars.color]: nonsemanticTextColors.yellow,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.yellow,
  },
  orange: {
    [bxBadgeVars.color]: nonsemanticTextColors.orange,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.orange,
  },
  red: {
    [bxBadgeVars.color]: nonsemanticTextColors.red,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.red,
  },
  magenta: {
    [bxBadgeVars.color]: nonsemanticTextColors.pink,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.pink,
  },
  purple: {
    [bxBadgeVars.color]: nonsemanticTextColors.purple,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.purple,
  },
  teal: {
    [bxBadgeVars.color]: nonsemanticTextColors.teal,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.teal,
  },
  cyan: {
    [bxBadgeVars.color]: nonsemanticTextColors.cyan,
    [bxBadgeVars.backgroundColor]: nonsemanticBackgroundColors.cyan,
  },
});

export { BXBadge, bxBadgeStyles, bxBadgeVariants };

export type { BXBadgeProps, BXBadgeVariant };
