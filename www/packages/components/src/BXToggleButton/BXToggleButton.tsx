import * as stylex from '@stylexjs/stylex';
import { forwardRef, useCallback, useState } from 'react';

import { BXButtonProps, bxButtonStyles, bxButtonVariants } from '../BXButton/BXButton';
import { bxButtonVars } from '../BXButton/vars.stylex';
import { BXText } from '../BXText/BXText';
import { persistentColors, textColors } from '../colors.stylex';

type BXToggleButtonProps = BXUncontrolledToggleButtonProps & {
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
};

const BXToggleButton = forwardRef<HTMLButtonElement, BXToggleButtonProps>(
  (
    {
      style,
      startIcon: StartIcon,
      endIcon: EndIcon,
      badge,
      compact,
      label,
      variant = 'default',
      selected,
      onSelectedChange,
      ...props
    },
    ref,
  ) => {
    const iconSize = compact ? 'small' : 'medium';
    const iconVariant = selected ? 'solid' : 'outline';
    const hasBadge = badge !== undefined;

    const toggle = useCallback(() => {
      onSelectedChange(!selected);
    }, [selected, onSelectedChange]);

    return (
      <button
        data-selected={selected}
        onClick={toggle}
        ref={ref}
        {...stylex.props([
          bxButtonStyles.base,
          bxButtonVariants[variant],
          bxButtonStyles.onLightMedia,
          hasBadge && bxButtonStyles.hasBadge,
          compact && bxButtonStyles.compact,
          selected && bxToggleButtonStyles.selected,
          style,
        ])}
        {...props}
      >
        {StartIcon && <StartIcon size={iconSize} variant={iconVariant} />}
        {label && (
          <BXText
            data-text={label}
            variant={selected ? 'emphasized' : 'body'}
            style={[bxButtonStyles.label, bxToggleButtonStyles.placeholder]}
          >
            {label}
          </BXText>
        )}
        {EndIcon && <EndIcon size={iconSize} variant={iconVariant} />}
        {badge && badge}
      </button>
    );
  },
);

type BXToggleButtonVariant = 'default' | 'flat';

BXToggleButton.displayName = 'BXToggleButton';

const bxToggleButtonStyles = stylex.create({
  placeholder: {
    '::before': {
      display: 'block',
      content: 'attr(data-text)',
      fontWeight: '700',
      letterSpacing: '-0.24px',
      height: '2px',
      overflow: 'hidden',
      visibility: 'hidden',
    },
  },
  selected: {
    [bxButtonVars.backgroundColors]: {
      default: persistentColors.accentDeemphasized,
      ':disabled': `color-mix(in srgb, white 50%, ${persistentColors.accentDeemphasized} 50%)`,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${persistentColors.accentDeemphasized} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${persistentColors.accentDeemphasized} 90%)`,
    },
    [bxButtonVars.color]: {
      default: textColors.link,
      ':enabled:hover': `color-mix(in srgb, black 5%, ${textColors.link} 95%)`,
      ':enabled:active': `color-mix(in srgb, black 10%, ${textColors.link} 90%)`,
    },
  },
});

type BXUncontrolledToggleButtonProps = Omit<BXButtonProps, 'hasChevron' | 'onClick' | 'loading' | 'variant'> & {
  variant?: BXToggleButtonVariant;
};

const BXUncontrolledToggleButton = forwardRef<HTMLButtonElement, BXUncontrolledToggleButtonProps>(
  ({ ...props }: BXUncontrolledToggleButtonProps, ref) => {
    const [selected, setSelected] = useState(false);
    const toggle = useCallback(() => {
      setSelected(!selected);
    }, [selected, setSelected]);
    return <BXToggleButton ref={ref} selected={selected} onSelectedChange={toggle} {...props} />;
  },
);

BXUncontrolledToggleButton.displayName = 'BXUncontrolledToggleButton';

export { BXToggleButton, bxToggleButtonStyles, BXUncontrolledToggleButton };
export type { BXToggleButtonProps, BXToggleButtonVariant, BXUncontrolledToggleButtonProps };
