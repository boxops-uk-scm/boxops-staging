import * as stylex from '@stylexjs/stylex';

import { BXButton } from '../BXButton';
import { BXCard } from '../BXCard/BXCard';
import { BXHeading } from '../BXHeading/BXHeading';
import { ArrowRightIcon, MoonIcon, TrayIcon } from '../BXIcon';
import { BXSplitButtonMenuItem, BXUncontrolledSplitButton } from '../BXSplitButton';

interface BXNotificationMenuProps {
  children?: React.ReactNode;
}

const BXNotificationMenu = ({ children, ...props }: BXNotificationMenuProps) => {
  return (
    <BXCard {...props}>
      <div {...stylex.props(bxNotificationMenuStyles.header)}>
        <BXHeading variant="h3">Notifications</BXHeading>
        <BXUncontrolledSplitButton compact variant="flat" label="Unread">
          <BXSplitButtonMenuItem label="Urgent" />
          <BXSplitButtonMenuItem label="Read" />
        </BXUncontrolledSplitButton>
        <span {...stylex.props(bxNotificationMenuStyles.spacer)} />
        <BXButton variant="flat" startIcon={MoonIcon} />
      </div>
      <div {...stylex.props(bxNotificationMenuStyles.notifications)}>{children}</div>
      <div {...stylex.props(bxNotificationMenuStyles.footer)}>
        <BXButton compact variant="flat" startIcon={TrayIcon} label="View all" endIcon={ArrowRightIcon} />
      </div>
    </BXCard>
  );
};

const bxNotificationMenuStyles = stylex.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  notifications: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxHeight: '300px',
    overflow: 'auto',
  },
  spacer: {
    flexGrow: 1,
  },
});

export { BXNotificationMenu, bxNotificationMenuStyles };
export type { BXNotificationMenuProps };
