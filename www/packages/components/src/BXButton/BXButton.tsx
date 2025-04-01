import '../colors.stylex.ts';
import './vars.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React, { FC, forwardRef, ReactNode } from 'react';

import { bxButtonVars } from './vars.stylex';
import { bxBadgeVars } from '../BXBadge/vars.stylex';
import { BXIconProps } from '../BXIcon/BXIcon';
import { BXText } from '../BXText/BXText';
import { internalColors, persistentColors, textColors } from '../colors.stylex';
import { BXSpinner } from '../BXSpinner/BXSpinner';

interface BXButtonProps {
  badge?: ReactNode;
  compact?: boolean;
  disabled?: boolean;
  endIcon?: FC<BXIconProps>;
  label?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  startIcon?: FC<BXIconProps>;
  style?: stylex.StyleXStyles;
  variant?: BXButtonVariant;
  endContent?: ReactNode;
}

const BXButton = forwardRef<HTMLButtonElement, BXButtonProps>(
  (
    {
      style,
      startIcon: StartIcon,
      endIcon: EndIcon,
      endContent,
      badge,
      loading,
      compact,
      label,
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const onLightMedia = variant === 'default' || variant === 'flat';
    const iconSize = compact ? 'small' : 'medium';
    const iconVariant = onLightMedia ? 'outline' : 'solid';
    const hasBadge = badge !== undefined;

    return (
      <button
        ref={ref}
        {...stylex.props([
          bxButtonStyles.base,
          bxButtonVariants[variant],
          onLightMedia && bxButtonStyles.onLightMedia,
          hasBadge && bxButtonStyles.hasBadge,
          compact && bxButtonStyles.compact,
          loading && bxButtonStyles.loading,
          style,
        ])}
        {...props}
      >
        {StartIcon && <StartIcon size={iconSize} variant={iconVariant} />}
        {label && (
          <BXText variant={onLightMedia ? 'body' : 'emphasized'} style={bxButtonStyles.label}>
            {label}
          </BXText>
        )}
        {endContent && (
          <>
            <span {...stylex.props(bxButtonStyles.spacer)} />
            {endContent}
          </>
        )}
        {EndIcon && <EndIcon size={iconSize} variant={iconVariant} />}
        {badge && badge}
        {loading && (
          <BXSpinner variant={onLightMedia ? 'dark' : 'light'} size={iconSize} style={bxButtonStyles.spinner} />
        )}
      </button>
    );
  },
);

BXButton.displayName = 'BXButton';

const bxButtonStyles = stylex.create({
  label: {
    whiteSpace: 'nowrap',
    color: bxButtonVars.color,
    userSelect: 'none',
  },
  base: {
    fill: bxButtonVars.color,
    backgroundColor: bxButtonVars.backgroundColors,
    borderTopLeftRadius: bxButtonVars.borderTopLeftRadius,
    borderBottomLeftRadius: bxButtonVars.borderBottomLeftRadius,
    borderTopRightRadius: bxButtonVars.borderTopRightRadius,
    borderBottomRightRadius: bxButtonVars.borderBottomRightRadius,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
    },
    ':focus-visible': {
      outline: `2px solid ${internalColors.inputFocusOutline}`,
      outlineOffset: '2px',
    },
    [bxBadgeVars.color]: {
      default: 'white',
      ':enabled:hover': `color-mix(in srgb, black 5%, white 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, white 90%)`,
    },
    [bxBadgeVars.backgroundColor]: {
      default: 'rgba(0,0,0,0.5)',
      ':disabled': 'rgba(0,0,0,0.2)',
    },
    [bxButtonVars.color]: bxBadgeVars.color,
    [bxButtonVars.spinnerColor]: bxBadgeVars.color,
  },
  onLightMedia: {
    [bxButtonVars.color]: {
      default: textColors.primaryTextOnLightMedia,
      ':disabled': `color-mix(in srgb, white 50%, ${textColors.secondary} 50%)`,
    },
    [bxButtonVars.spinnerColor]: {
      default: persistentColors.accent,
      ':disabled': `color-mix(in srgb, white 50%, ${persistentColors.accent} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${persistentColors.accent} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${persistentColors.accent} 90%)`,
    },
  },
  compact: {
    padding: '4px 8px',
    minHeight: '20px',
    gap: '4px',
  },
  hasBadge: {
    padding: '6px 12px',
  },
  spinner: {
    fill: bxButtonVars.spinnerColor,
  },
  loading: {
    cursor: 'wait',
  },
  spacer: {
    flexGrow: 1,
  },
  chevron: {
    padding: '2px 0px',
  },
});

type BXButtonVariant = keyof typeof bxButtonVariants;

const bxButtonVariants = stylex.create({
  default: {
    [bxButtonVars.backgroundColors]: {
      default: internalColors.secondaryButton,
      ':disabled': `color-mix(in srgb, white 50%, ${internalColors.secondaryButton} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${internalColors.secondaryButton} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${internalColors.secondaryButton} 90%)`,
    },
  },
  flat: {
    [bxButtonVars.backgroundColors]: {
      default: 'transparent',
      ':disabled': 'rgba(255,255,255,0.5)',
      ':enabled:hover': 'rgba(0,0,0,0.05)',
      ':enabled:active': 'rgba(0,0,0,0.1)',
    },
  },
  primary: {
    [bxButtonVars.backgroundColors]: {
      default: internalColors.primaryButton,
      ':disabled': `color-mix(in srgb, white 50%, ${internalColors.primaryButton} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${internalColors.primaryButton} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${internalColors.primaryButton} 90%)`,
    },
  },
  negative: {
    [bxButtonVars.backgroundColors]: {
      default: persistentColors.negative,
      ':disabled': `color-mix(in srgb, white 50%, ${persistentColors.negative} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${persistentColors.negative} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${persistentColors.negative} 90%)`,
    },
  },
  positive: {
    [bxButtonVars.backgroundColors]: {
      default: persistentColors.positive,
      ':disabled': `color-mix(in srgb, white 50%, ${persistentColors.positive} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${persistentColors.positive} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${persistentColors.positive} 90%)`,
    },
  },
});

export { BXButton, bxButtonStyles, bxButtonVariants };

export type { BXButtonProps, BXButtonVariant };
