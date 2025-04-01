import * as stylex from '@stylexjs/stylex';
import { ReactNode } from 'react';

import { BXStatus } from '../BXStatus';

interface BXNotificationProps {
  avatar: ReactNode;
  seen?: boolean;
  children?: ReactNode;
}

const BXNotification = ({ avatar, seen = false, children }: BXNotificationProps) => {
  return (
    <div {...stylex.props(bxNotificationStyles.base)}>
      {!seen && <BXStatus variant="info" />}
      {avatar}
      <span {...stylex.props(bxNotificationStyles.message)}>{children}</span>
    </div>
  );
};

const bxNotificationStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
  },
  message: {
    maxWidth: '240px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
});

export type { BXNotificationProps };
export { BXNotification, bxNotificationStyles };
