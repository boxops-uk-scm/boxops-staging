import '../tokens.stylex.ts';
import './vars.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { vars } from './vars.stylex';
import { vars as badgeVars } from '../Badge/vars.stylex';
import { vars as spinnerVars } from '../Spinner/vars.stylex';
import { backgroundColor, gap, outlineColor, padding, semanticColor, textColor } from '../tokens.stylex';
import React from 'react';
import Text from '../Text';
import Icon from '../Icon';
import Spinner from '../Spinner';

export interface Props {
  compact?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: stylex.StyleXStyles;
  startContent?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  endContent?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  variant?: keyof typeof variants;
}

export interface RenderProps {
  iconProps: Partial<Icon.Props>;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ label, startContent, endContent, compact, variant = 'default', loading, style, disabled, ...props }, ref) => {
    const onLightMedia = variant === 'default' || variant === 'flat';

    const iconProps: Partial<Icon.Props> = {
      variant: onLightMedia ? 'outline' : 'solid',
    };

    const labelStyle = loading ? styles.placeholder : styles.label;

    return (
      <button
        ref={ref}
        {...stylex.props(
          styles.base,
          variants[variant],
          onLightMedia && styles.onLightMedia,
          compact && styles.compact,
          style,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {typeof startContent === 'function' ? startContent({ iconProps }) : startContent}
        {(loading || label) &&
          (onLightMedia ? (
            <Text data-text={label} style={labelStyle}>
              {loading ? <Spinner /> : label}
            </Text>
          ) : (
            <Text>
              <Text as="b" data-text={label} style={labelStyle}>
                {loading ? <Spinner /> : label}
              </Text>
            </Text>
          ))}
        {typeof endContent === 'function' ? endContent({ iconProps }) : endContent}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;

export const styles = stylex.create({
  base: {
    gap: gap.S,
    fill: vars.color,
    backgroundColor: vars.backgroundColor,
    borderTopLeftRadius: vars.borderRadiusLeft,
    borderBottomLeftRadius: vars.borderRadiusLeft,
    borderTopRightRadius: vars.borderRadiusRight,
    borderBottomRightRadius: vars.borderRadiusRight,
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
    [badgeVars.color]: {
      default: 'white',
      ':enabled:hover': `color-mix(in srgb, black 5%, white 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, white 90%)`,
    },
    [badgeVars.backgroundColor]: {
      default: 'rgba(0,0,0,0.5)',
      ':disabled': 'rgba(0,0,0,0.2)',
    },
    [badgeVars.fill]: badgeVars.color,
    [vars.color]: badgeVars.color,
    [spinnerVars.fill]: badgeVars.color,
  },
  label: {
    whiteSpace: 'nowrap',
    color: vars.color,
    userSelect: 'none',
  },
  placeholder: {
    '::before': {
      display: 'block',
      content: 'attr(data-text)',
      height: '0px',
      overflow: 'hidden',
      visibility: 'hidden',
    },
  },
  onLightMedia: {
    [vars.color]: {
      default: textColor.onLightMedia,
      ':disabled': `color-mix(in srgb, white 50%, ${textColor.subtle} 50%)`,
    },
    [spinnerVars.fill]: {
      default: semanticColor.accent,
      ':disabled': `color-mix(in srgb, white 50%, ${semanticColor.accent} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${semanticColor.accent} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${semanticColor.accent} 90%)`,
    },
  },
  compact: {
    padding: `${padding.XS} ${padding.S}`,
    gap: gap.XS,
  },
});

export const variants = stylex.create({
  default: {
    [vars.backgroundColor]: {
      default: backgroundColor.button,
      ':disabled': `color-mix(in srgb, white 50%, ${backgroundColor.button} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${backgroundColor.button} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${backgroundColor.button} 90%)`,
    },
  },
  flat: {
    [vars.backgroundColor]: {
      default: 'transparent',
      ':disabled': 'rgba(255,255,255,0.5)',
      ':enabled:hover': 'rgba(0,0,0,0.05)',
      ':enabled:active': 'rgba(0,0,0,0.1)',
    },
  },
  primary: {
    [vars.backgroundColor]: {
      default: semanticColor.accent,
      ':disabled': `color-mix(in srgb, white 50%, ${semanticColor.accent} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${semanticColor.accent} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${semanticColor.accent} 90%)`,
    },
  },
  negative: {
    [vars.backgroundColor]: {
      default: semanticColor.negative,
      ':disabled': `color-mix(in srgb, white 50%, ${semanticColor.negative} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${semanticColor.negative} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${semanticColor.negative} 90%)`,
    },
  },
  positive: {
    [vars.backgroundColor]: {
      default: semanticColor.positive,
      ':disabled': `color-mix(in srgb, white 50%, ${semanticColor.positive} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${semanticColor.positive} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${semanticColor.positive} 90%)`,
    },
  },
});
