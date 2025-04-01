import '../tokens.stylex.ts';
import '../Button/vars.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { vars as buttonVars } from '../Button/vars.stylex';
import { backgroundColor, gap, outlineColor, padding, semanticColor, textColor } from '../tokens.stylex';
import React from 'react';
import Text from '../Text';
import Icon from '../Icon';

export interface Props {
  compact?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: stylex.StyleXStyles;
  startContent?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  endContent?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  isSelected?: boolean;
  variant?: keyof typeof variants;
}

export interface RenderProps {
  iconProps: Partial<Icon.Props>;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ label, startContent, endContent, compact, isSelected, style, disabled, variant = 'default', ...props }, ref) => {
    const iconProps: Partial<Icon.Props> = {
      variant: isSelected ? 'solid' : 'outline',
    };

    return (
      <button
        data-selected={isSelected}
        ref={ref}
        {...stylex.props(
          styles.base,
          compact && styles.compact,
          isSelected ? styles.selected : variant && variants[variant],
          style,
        )}
        disabled={disabled}
        {...props}
      >
        {typeof startContent === 'function' ? startContent({ iconProps }) : startContent}
        {label && <Text style={styles.label}>{label}</Text>}
        {typeof endContent === 'function' ? endContent({ iconProps }) : endContent}
      </button>
    );
  },
);

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;

export const styles = stylex.create({
  base: {
    gap: gap.S,
    fill: buttonVars.color,
    backgroundColor: buttonVars.backgroundColor,
    borderTopLeftRadius: buttonVars.borderRadiusLeft,
    borderBottomLeftRadius: buttonVars.borderRadiusLeft,
    borderTopRightRadius: buttonVars.borderRadiusRight,
    borderBottomRightRadius: buttonVars.borderRadiusRight,
    borderWidth: 0,
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: padding.S,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
    },
    ':focus-visible': {
      outline: `2px solid ${outlineColor.focus}`,
      outlineOffset: '2px',
    },
    [buttonVars.color]: {
      default: textColor.onLightMedia,
      ':disabled': `color-mix(in srgb, white 50%, ${textColor.subtle} 50%)`,
    },
  },
  label: {
    whiteSpace: 'nowrap',
    color: buttonVars.color,
    userSelect: 'none',
  },
  onLightMedia: {
    [buttonVars.color]: {
      default: textColor.onLightMedia,
      ':disabled': `color-mix(in srgb, white 50%, ${textColor.subtle} 50%)`,
    },
  },
  compact: {
    padding: `${padding.XS} ${padding.S}`,
    gap: gap.XS,
  },
  selected: {
    [buttonVars.fill]: buttonVars.color,
    [buttonVars.color]: {
      default: semanticColor.accent,
      ':disabled': `color-mix(in srgb, white 50%, ${semanticColor.accent} 50%)`,
    },
    [buttonVars.backgroundColor]: {
      default: 'oklch(66.6% 0.163 257.9 / 16%)',
      ':enabled:hover': 'oklch(66.6% 0.163 257.9 / 28%)',
    },
  },
  selectedIcon: {
    fill: semanticColor.accent,
  },
});

export const variants = stylex.create({
  default: {
    [buttonVars.backgroundColor]: {
      default: backgroundColor.button,
      ':disabled': `color-mix(in srgb, white 50%, ${backgroundColor.button} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${backgroundColor.button} 95%)`,
    },
  },
  flat: {
    [buttonVars.backgroundColor]: {
      default: 'transparent',
      ':disabled': 'rgba(255,255,255,0.5)',
      ':enabled:hover': 'rgba(0,0,0,0.05)',
    },
  },
});
