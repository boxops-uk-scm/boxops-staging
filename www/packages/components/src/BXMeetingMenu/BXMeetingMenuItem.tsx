import * as stylex from '@stylexjs/stylex';
import { formatDistanceToNow, isBefore, lightFormat } from 'date-fns';
import { forwardRef, ReactNode } from 'react';

import { BXButton } from '../BXButton';
import { BXHeading } from '../BXHeading';
import { VideoCameraIcon } from '../BXIcon';
import { BXTextPair } from '../BXTextPair';

interface BXMeetingMenuItemProps {
  meetingName: string;
  meetingRoom: string;
  meetingStartTime: Date;
  meetingEndTime: Date;
  participants: ReactNode;
  style?: stylex.StyleXStyles;
}

const BXMeetingMenuItem = forwardRef<HTMLDivElement, BXMeetingMenuItemProps>(
  ({ meetingName, meetingRoom, meetingStartTime, meetingEndTime, participants, style }, ref) => (
    <div ref={ref} {...stylex.props(bxMeetingMenuItemStyles.base, style)}>
      <BXHeading variant="h4">{meetingName}</BXHeading>
      <BXTextPair
        description={`${lightFormat(meetingStartTime, 'h:mm a')} - ${lightFormat(meetingEndTime, 'h:mm a')} | ${formatStartTime(meetingStartTime)}`}
      >
        {meetingRoom}
      </BXTextPair>
      <div {...stylex.props(bxMeetingMenuItemStyles.row)}>
        {participants}
        <div {...stylex.props(bxMeetingMenuItemStyles.grow)} />
        <BXButton variant="flat" startIcon={VideoCameraIcon} />
      </div>
    </div>
  ),
);

function formatStartTime(meetingStartTime: Date) {
  if (isBefore(meetingStartTime, new Date())) {
    return `Started ${formatDistanceToNow(meetingStartTime)} ago`;
  }

  return `Starts in ${formatDistanceToNow(meetingStartTime)}`;
}

BXMeetingMenuItem.displayName = 'BXMeetingMenuItem';

const bxMeetingMenuItemStyles = stylex.create({
  base: {
    minWidth: '350px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '4px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  grow: {
    flexGrow: 1,
  },
});

export { BXMeetingMenuItem, bxMeetingMenuItemStyles };
export type { BXMeetingMenuItemProps };
