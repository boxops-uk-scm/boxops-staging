import stylex from '@stylexjs/stylex';
import { Children, cloneElement, isValidElement } from 'react';

import { BXAvatar, BXAvatarProps, BXAvatarSize, bxAvatarStyles } from '../BXAvatar/BXAvatar';

interface BXAvatarGroupProps {
  avatarSize?: BXAvatarSize;
  maxAvatars?: number;
  children?: React.ReactNode;
}

const BXAvatarGroup = ({ children, avatarSize = '24', maxAvatars = 4 }: BXAvatarGroupProps) => {
  return (
    <span {...stylex.props(bxAvatarGroupStyles.base)}>
      {Children.toArray(children)
        .slice(0, maxAvatars)
        .map((child, i) => {
          if (isValidElement<BXAvatarProps>(child)) {
            return (
              <span key={i} {...stylex.props(borderBoxSize[avatarSize])}>
                {cloneElement(child, { size: avatarSize })}
              </span>
            );
          }

          return child;
        })}
      {Children.count(children) > maxAvatars && (
        <BXAvatar style={bxAvatarStyles.defaultColor} size={avatarSize}>
          {`+${Children.count(children) - maxAvatars}`}
        </BXAvatar>
      )}
      <span {...stylex.props(overlapSize[avatarSize])} />
    </span>
  );
};

const bxAvatarGroupStyles = stylex.create({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  overlaps: {
    overflow: 'visible',
  },
});

const borderBoxSize = stylex.create({
  '24': {
    width: '23px',
  },
  '32': {
    width: '30px',
  },
  '36': {
    width: '32px',
  },
  '40': {
    width: '36px',
  },
  '48': {
    width: '44px',
  },
  '60': {
    width: '52px',
  },
  '128': {
    width: '110px',
  },
});

const overlapSize = stylex.create({
  '24': {
    width: '1px',
  },
  '32': {
    width: '2px',
  },
  '36': {
    width: '4px',
  },
  '40': {
    width: '4px',
  },
  '48': {
    width: '4px',
  },
  '60': {
    width: '8px',
  },
  '128': {
    width: '18px',
  },
});

export { BXAvatarGroup };
export type { BXAvatarGroupProps };
