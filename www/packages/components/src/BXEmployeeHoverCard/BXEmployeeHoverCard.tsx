import * as stylex from '@stylexjs/stylex';

import { BXAvatar } from '../BXAvatar/BXAvatar';
import { BXButton } from '../BXButton/BXButton';
import { BXCard } from '../BXCard/BXCard';
import CalendarIcon from '../BXIcon/calendar/CalendarIcon';
import ChatCircleIcon from '../BXIcon/chat-circle/ChatCircleIcon';
import EnvelopeIcon from '../BXIcon/envelope/EnvelopeIcon';
import GraphIcon from '../BXIcon/graph/GraphIcon';
import MapPinIcon from '../BXIcon/map-pin/MapPinIcon';
import SunHorizonIcon from '../BXIcon/sun-horizon/SunHorizonIcon';
import TreeStructureIcon from '../BXIcon/tree-structure/TreeStructureIcon';
import VideoCameraIcon from '../BXIcon/video-camera/VideoCameraIcon';
import { BXLink } from '../BXLink/BXLink';
import { BXText } from '../BXText/BXText';
import { BXTextPair } from '../BXTextPair';
import { BXTooltip } from '../BXTooltip/BXTooltip';
import { BXStatusVariant } from '../BXStatus/BXStatus';

interface BXEmployeeHoverCardProps {
  name: string;
  unixname: string;
  profilePictureSrc: string;
  status?: BXStatusVariant;
  style?: stylex.StyleXStyles;
  jobTitle: string;
  reportsTo: string;
  location: string;
  localTime: string;
}

const BXEmployeeHoverCard = ({
  profilePictureSrc,
  status,
  name,
  unixname,
  jobTitle,
  reportsTo,
  location,
  localTime,
  style,
  ...props
}: BXEmployeeHoverCardProps) => {
  return (
    <BXCard style={bxEmployeeHoverCardStyles.base} {...props}>
      <div {...stylex.props(bxEmployeeHoverCardStyles.row, bxEmployeeHoverCardStyles.gap, style)}>
        <div
          {...stylex.props(
            bxEmployeeHoverCardStyles.column,
            bxEmployeeHoverCardStyles.grow,
            bxEmployeeHoverCardStyles.gap,
          )}
        >
          <div {...stylex.props(bxEmployeeHoverCardStyles.column)}>
            <BXTextPair variant="h2" description={unixname}>
              <BXLink href="https://www.google.com">{name}</BXLink>
            </BXTextPair>
          </div>
          <table style={{ tableLayout: 'auto' }}>
            <tr>
              <td>
                <GraphIcon variant="outline" />
              </td>
              <td>
                <BXText>{jobTitle}</BXText>
              </td>
            </tr>
            <tr>
              <td>
                <TreeStructureIcon variant="outline" />
              </td>
              <td>
                <div {...stylex.props(bxEmployeeHoverCardStyles.column)}>
                  <BXText>
                    Reports to{' '}
                    <BXLink href="https://www.google.com">
                      <BXText>{reportsTo}</BXText>
                    </BXLink>
                  </BXText>
                  <BXLink href="https://www.google.com">
                    <BXText>View {reportsTo}&apos; s team</BXText>
                  </BXLink>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <MapPinIcon variant="outline" />
              </td>
              <td>
                <BXLink href="https://www.google.com">
                  <BXText>{location}</BXText>
                </BXLink>
              </td>
            </tr>
            <tr>
              <td>
                <SunHorizonIcon variant="outline" />
              </td>
              <td>
                <BXText>{localTime}</BXText>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <BXAvatar src={profilePictureSrc} size="128" status={status} style={bxEmployeeHoverCardStyles.avatar} />
        </div>
      </div>
      <div {...stylex.props(bxEmployeeHoverCardStyles.row, bxEmployeeHoverCardStyles.gap)}>
        <BXButton startIcon={ChatCircleIcon} label="Message" style={bxEmployeeHoverCardStyles.grow} />
        <BXTooltip label="Send an email">
          <BXButton startIcon={EnvelopeIcon} />
        </BXTooltip>
        <BXTooltip label="Start a video call">
          <BXButton startIcon={VideoCameraIcon} />
        </BXTooltip>
        <BXTooltip label="Schedule a meeting">
          <BXButton startIcon={CalendarIcon} />
        </BXTooltip>
      </div>
    </BXCard>
  );
};

const bxEmployeeHoverCardStyles = stylex.create({
  base: {
    maxWidth: '400px',
    gap: '16px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  gap: {
    gap: '8px',
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    pointerEvents: 'none',
  },
});

export { BXEmployeeHoverCard, bxEmployeeHoverCardStyles };
export type { BXEmployeeHoverCardProps };
