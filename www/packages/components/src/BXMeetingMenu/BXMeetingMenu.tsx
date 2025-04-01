import * as stylex from '@stylexjs/stylex';
import { formatDate } from 'date-fns';
import { forwardRef } from 'react';

import { BXButton } from '../BXButton/BXButton';
import { BXCard } from '../BXCard/BXCard';
import { BXHeading } from '../BXHeading';
import { BXText } from '../BXText';
import { textColors } from '../colors.stylex';

interface BXMeetingMenuProps {
  inProgress: React.ReactNode;
  upcoming: React.ReactNode;
  style?: stylex.StyleXStyles;
}

const BXMeetingMenu = forwardRef<HTMLDivElement, BXMeetingMenuProps>(({ inProgress, upcoming, style }, ref) => (
  <BXCard ref={ref} style={style}>
    <div {...stylex.props(bxMeetingMenuStyles.header)}>
      <BXHeading variant="h2">{formatDate(new Date(), 'EEEE, LLLL dd')}</BXHeading>
    </div>
    <BXText variant="emphasized" style={bxMeetingMenuStyles.heading}>
      In progress
    </BXText>
    <div {...stylex.props(bxMeetingMenuStyles.meetings)}>{inProgress}</div>
    <BXText variant="emphasized" style={bxMeetingMenuStyles.heading}>
      Up coming
    </BXText>
    <div {...stylex.props(bxMeetingMenuStyles.meetings)}>{upcoming}</div>
    <div {...stylex.props(bxMeetingMenuStyles.footer)}>
      <BXButton compact variant="flat" label="See all in calendar" />
    </div>
  </BXCard>
));

BXMeetingMenu.displayName = 'BXMeetingMenu';

const bxMeetingMenuStyles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  heading: {
    color: textColors.secondary,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  meetings: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    maxHeight: '200px',
    overflowY: 'scroll',
  },
  spacer: {
    flexGrow: 1,
  },
});

export { BXMeetingMenu, bxMeetingMenuStyles };
export type { BXMeetingMenuProps };
