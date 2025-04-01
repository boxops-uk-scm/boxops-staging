import '../../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React, { forwardRef } from 'react';
import Flexbox from '../../Flexbox';
import Text from '../../Text';
import { borderRadius, padding, semanticColor } from '../../tokens.stylex';
import Icon from '../../Icon/index.js';

export interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  label: React.ReactNode;
  description?: React.ReactNode;
  isSelected?: boolean;
  style?: stylex.StyleXStyles;
  startContent?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  endContent?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
}

export interface RenderProps {
  isSelected?: boolean;
  iconProps: Partial<Icon.Props>;
}

const Item = forwardRef<HTMLDivElement, Props>(
  ({ label, description, isSelected, style, startContent, endContent, ...props }, ref) => {
    const iconProps: Partial<Icon.Props> = isSelected
      ? {
          variant: 'solid',
          style: styles.selectedIcon,
        }
      : {
          variant: 'outline',
        };

    return (
      <Flexbox
        alignItems="center"
        gap="S"
        ref={ref}
        style={[styles.base, isSelected && styles.selected, style]}
        {...props}
      >
        {typeof startContent === 'function' ? startContent({ isSelected, iconProps }) : startContent}
        <Flexbox direction="column">
          <Text variant={isSelected ? undefined : 'onLightMedia'} unselectable>
            {label}
          </Text>
          {description && (
            <Text as="small" variant={isSelected ? undefined : 'subtle'} unselectable>
              {description}
            </Text>
          )}
        </Flexbox>
        {endContent && (
          <>
            <span {...stylex.props(styles.spacer)} />
            {typeof endContent === 'function' ? endContent({ isSelected, iconProps }) : endContent}
          </>
        )}
      </Flexbox>
    );
  },
);

Item.displayName = 'Item';

export default React.memo(Item);

export const styles = stylex.create({
  base: {
    paddingLeft: padding.S,
    paddingRight: padding.S,
    paddingTop: padding.XS,
    paddingBottom: padding.XS,
    borderRadius: borderRadius.button,
    ':hover': {
      backgroundColor: 'oklch(0% 0 0 / 5%)',
    },
  },
  spacer: {
    flexGrow: 1,
  },
  selected: {
    fill: semanticColor.accent,
    color: semanticColor.accent,
    backgroundColor: 'oklch(66.6% 0.163 257.9 / 16%)',
    ':hover': {
      backgroundColor: 'oklch(66.6% 0.163 257.9 / 28%)',
    },
  },
  selectedIcon: {
    fill: semanticColor.accent,
  },
});
