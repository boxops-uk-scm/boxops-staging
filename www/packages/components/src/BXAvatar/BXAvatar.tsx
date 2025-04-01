import * as stylex from '@stylexjs/stylex';
import { Children, FC, forwardRef, Suspense } from 'react';

import { BXStatus, BXStatusSize, BXStatusVariant } from '../BXStatus/BXStatus';
import { internalColors, nonsemanticBackgroundColors } from '../colors.stylex';
import { bxAvatarVars } from './vars.stylex';
import { BXGlimmer } from '../BXGlimmer';
import { BXIconProps, BXIconSize } from '../BXIcon';

type BXAvatarProps = {
  size?: BXAvatarSize;
  status?: BXStatusVariant;
  style?: stylex.StyleXStyles;
} & ({ src: string } | { children: string | string[] } | { icon: FC<BXIconProps> });

const BXAvatar = forwardRef<HTMLSpanElement, BXAvatarProps>(
  ({ size = '24', status, style, ...props }: BXAvatarProps, ref) => {
    if ('src' in props) {
      return (
        <span
          ref={ref}
          {...stylex.props(
            bxAvatarStyles.container,
            bxAvatarStyles.overlay,
            bxAvatarStyles.vignette,
            bxAvatarSizes[size],
            style,
          )}
        >
          <Suspense fallback={<BXGlimmer style={bxAvatarStyles.base} />}>
            {'src' in props && (
              <img loading="lazy" {...stylex.props(bxAvatarStyles.base, bxAvatarSizes[size])} {...props} />
            )}
            {status && <BXStatus variant={status} size={getStatusSize(size)} style={bxAvatarStyles.status} />}
          </Suspense>
        </span>
      );
    }

    if ('children' in props) {
      return (
        <span ref={ref} {...stylex.props(bxAvatarStyles.container, bxAvatarStyles.overlay, bxAvatarSizes[size])}>
          {'children' in props && (
            <span
              {...stylex.props(
                bxAvatarStyles.base,
                bxAvatarSizes[size],
                bxAvatarVariants[getVariant(Children.toArray(props.children).join(''))],
                style,
              )}
            >
              {props.children}
            </span>
          )}
          {status && <BXStatus variant={status} size={getStatusSize(size)} style={bxAvatarStyles.status} />}
        </span>
      );
    }

    if ('icon' in props) {
      return (
        <span ref={ref} {...stylex.props(bxAvatarStyles.container, bxAvatarStyles.overlay, bxAvatarSizes[size], style)}>
          {'icon' in props && (
            <span
              {...stylex.props(bxAvatarStyles.base, bxAvatarSizes[size], bxAvatarVariants[getVariant(props.icon.name)])}
            >
              <props.icon size={getIconSize(size)} />
            </span>
          )}
          {status && <BXStatus variant={status} size={getStatusSize(size)} style={bxAvatarStyles.status} />}
        </span>
      );
    }

    return <></>;
  },
);

BXAvatar.displayName = 'BXAvatar';

function getStatusSize(size: BXAvatarSize): BXStatusSize {
  switch (size) {
    case '24':
    case '32':
    case '36':
      return 'small';
    case '40':
      return 'medium';
    case '48':
    case '60':
      return 'large';
    case '128':
      return 'xlarge';
  }
}

function getIconSize(size: BXAvatarSize): BXIconSize {
  switch (size) {
    case '24':
    case '32':
    case '36':
      return 'small';
    case '40':
      return 'medium';
    case '48':
      return 'large';
    case '60':
      return 'xlarge';
    case '128':
      return 'huge';
  }
}

function getHash(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function getVariant(name: string): BXAvatarVariant {
  const hash = getHash(name);
  const index = Math.abs(hash) % Object.keys(bxAvatarVariants).length;
  return Object.keys(bxAvatarVariants)[index] as BXAvatarVariant;
}

type BXAvatarSize = keyof typeof bxAvatarSizes;

const bxAvatarSizes = stylex.create({
  '24': {
    width: '24px',
    height: '24px',
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '14px',
    outlineWidth: '2px',
  },
  '32': {
    width: '32px',
    height: '32px',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',
    outlineWidth: '2px',
  },
  '36': {
    width: '36px',
    height: '36px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    outlineWidth: '2px',
  },
  '40': {
    width: '40px',
    height: '40px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    outlineWidth: '2px',
  },
  '48': {
    width: '48px',
    height: '48px',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
    outlineWidth: '3px',
  },
  '60': {
    width: '60px',
    height: '60px',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
    outlineWidth: '3px',
  },
  '128': {
    width: '128px',
    height: '128px',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 700,
    outlineWidth: '4px',
  },
});

const bxAvatarStyles = stylex.create({
  glimmer: {
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
  },
  base: {
    userSelect: 'none',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: '0px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    letterSpacing: '-0.24px',
    outline: '2px solid white',
    '::before': {
      content: '""',
      position: 'absolute',
      left: '0px',
      right: '0px',
      top: '0px',
      bottom: '0px',
      borderRadius: '50%',
      backgroundColor: 'white',
      zIndex: -1,
    },
  },
  container: {
    isolation: 'isolate',
    display: 'inline-block',
    position: 'relative',
    ':hover': {
      [bxAvatarVars.overlayColor]: 'rgba(0,0,0,0.1)',
    },
  },
  overlay: {
    '::before': {
      content: '""',
      position: 'absolute',
      left: '0px',
      right: '0px',
      top: '0px',
      bottom: '0px',
      pointerEvents: 'none',
      borderRadius: '50%',
      backgroundColor: bxAvatarVars.overlayColor,
    },
  },
  vignette: {
    '::before': {
      border: '2px solid rgba(0,0,0,0.1)',
    },
  },
  status: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
  },
  defaultColor: {
    backgroundColor: internalColors.secondaryButton,
  },
});

type BXAvatarVariant = keyof typeof bxAvatarVariants;

const bxAvatarVariants = stylex.create({
  gray: {
    backgroundColor: nonsemanticBackgroundColors.gray,
  },
  blue: {
    backgroundColor: nonsemanticBackgroundColors.blue,
  },
  green: {
    backgroundColor: nonsemanticBackgroundColors.green,
  },
  yellow: {
    backgroundColor: nonsemanticBackgroundColors.yellow,
  },
  red: {
    backgroundColor: nonsemanticBackgroundColors.red,
  },
  pink: {
    backgroundColor: nonsemanticBackgroundColors.pink,
  },
  purple: {
    backgroundColor: nonsemanticBackgroundColors.purple,
  },
  teal: {
    backgroundColor: nonsemanticBackgroundColors.teal,
  },
  cyan: {
    backgroundColor: nonsemanticBackgroundColors.cyan,
  },
});

export { BXAvatar, bxAvatarStyles, bxAvatarVariants, bxAvatarSizes };
export type { BXAvatarProps, BXAvatarVariant, BXAvatarSize };
