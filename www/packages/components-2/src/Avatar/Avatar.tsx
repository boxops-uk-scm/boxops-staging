import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import StatusDot from '../StatusDot';
import { vars } from './vars.stylex.js';
import { backgroundColor } from '../tokens.stylex';
import Flexbox from '../Flexbox';

export interface Props {
  style?: stylex.StyleXStyles;
  children?: React.ReactNode;
  status?: Status;
  size?: keyof typeof sizes;
  hasVignette?: boolean;
  darkenOnHover?: boolean;
}

export type Status = 'available' | 'away' | 'busy' | 'offline';

const Avatar = React.forwardRef<HTMLDivElement, Props>(
  ({ style, size = 'XS', hasVignette, darkenOnHover, children, status, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        {...stylex.props(
          styles.base,
          size && sizes[size],
          hasVignette && styles.vinette,
          darkenOnHover && styles.darkenOnHover,
          style,
        )}
      >
        <Flexbox style={[styles.container, size && sizes[size]]}>{children}</Flexbox>
        {status && (
          <StatusDot style={styles.status} variant={getStatusDotVariant(status)} size={getStatusDotSize(size)} />
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';

export default Avatar;

export const styles = stylex.create({
  base: {
    display: 'inline-block',
    position: 'relative',
    borderRadius: '50%',
    outline: '2px solid white',
    '::before': {
      content: '""',
      position: 'absolute',
      left: '0px',
      right: '0px',
      top: '0px',
      bottom: '0px',
      pointerEvents: 'none',
      borderRadius: '50%',

      backgroundColor: vars.overlayColor,
    },
  },
  container: {
    borderRadius: '50%',
  },
  vinette: {
    '::before': {
      border: `2px solid ${backgroundColor.overlay}`,
    },
  },
  darkenOnHover: {
    ':hover': {
      [vars.overlayColor]: backgroundColor.overlay,
    },
  },
  status: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
  },
});

export type Size = keyof typeof sizes;

export const sizes = stylex.create({
  XS: {
    width: '24px',
    height: '24px',
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '14px',
    outlineWidth: '2px',
    [vars.iconSize]: '16px',
  },
  S: {
    width: '32px',
    height: '32px',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',
    outlineWidth: '2px',
    [vars.iconSize]: '16px',
  },
  M: {
    width: '36px',
    height: '36px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    outlineWidth: '2px',
    [vars.iconSize]: '20px',
  },
  L: {
    width: '40px',
    height: '40px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    outlineWidth: '2px',
    [vars.iconSize]: '24px',
  },
  XL: {
    width: '48px',
    height: '48px',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
    outlineWidth: '3px',
    [vars.iconSize]: '24px',
  },
  XXL: {
    width: '60px',
    height: '60px',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
    outlineWidth: '3px',
    [vars.iconSize]: '32px',
  },
  XXXL: {
    width: '128px',
    height: '128px',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 700,
    outlineWidth: '4px',
    [vars.iconSize]: '64px',
  },
});

function getStatusDotVariant(status: Status): StatusDot.Props['variant'] {
  switch (status) {
    case 'available':
      return 'success';
    case 'away':
      return 'warning';
    case 'busy':
      return 'error';
    case 'offline':
      return undefined;
  }
}

function getStatusDotSize(size: keyof typeof sizes): StatusDot.Props['size'] {
  switch (size) {
    case 'XS':
    case 'S':
    case 'M':
      return 'S';
    case 'L':
      return 'M';
    case 'XL':
    case 'XXL':
      return 'L';
    case 'XXXL':
      return 'XL';
  }
}
