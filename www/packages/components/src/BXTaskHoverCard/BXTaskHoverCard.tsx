import * as stylex from '@stylexjs/stylex';
import { forwardRef, ReactNode } from 'react';

import { BXBadge } from '../BXBadge';
import { BXCard } from '../BXCard';
import { BXHeading } from '../BXHeading';
import CheckSquareIcon from '../BXIcon/check-square/CheckSquareIcon';
import SignpostIcon from '../BXIcon/signpost/SignpostIcon';
import TagIcon from '../BXIcon/tag/TagIcon';
import UsersThreeIcon from '../BXIcon/users-three/UsersThreeIcon';
import { BXLink } from '../BXLink';
import { BXText } from '../BXText';

interface BXTaskHoverCardProps {
  taskName: string;
  taskNumber: string;
  taskStatus: string;
  taskPriority: string;
  taskTags?: string[];
  owner: ReactNode;
  style?: stylex.StyleXStyles;
}

const BXTaskHoverCard = forwardRef<HTMLDivElement, BXTaskHoverCardProps>(
  ({ taskStatus, taskPriority, taskName, taskNumber, taskTags = [], owner, style }, ref) => (
    <BXCard style={[bxTaskHoverCardStyles.base, style]} ref={ref}>
      <div {...stylex.props(bxTaskHoverCardStyles.column)}>
        <div {...stylex.props(bxTaskHoverCardStyles.row, bxTaskHoverCardStyles.smallGap)}>
          <CheckSquareIcon size="small" />
          <BXLink href="https://www.google.com">
            <BXText variant="supporting">T{taskNumber}</BXText>
          </BXLink>
        </div>
        <BXHeading variant="h2">{taskName}</BXHeading>
      </div>
      <div {...stylex.props(bxTaskHoverCardStyles.row, bxTaskHoverCardStyles.gap)}>
        <table>
          <tr>
            <td>
              <SignpostIcon variant="outline" />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
              <BXBadge label={taskStatus} />
              <BXBadge variant="yellow" label={taskPriority} />
            </td>
          </tr>
          <tr>
            <td>
              <UsersThreeIcon variant="outline" />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
              <BXText>Owned by </BXText>
              {owner}
            </td>
          </tr>
          <tr>
            <td>
              <TagIcon variant="outline" />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
              {taskTags.map((tag, i) => (
                <BXBadge key={i} label={tag} />
              ))}
            </td>
          </tr>
        </table>
      </div>
    </BXCard>
  ),
);

BXTaskHoverCard.displayName = 'BXTaskHoverCard';

const bxTaskHoverCardStyles = stylex.create({
  base: {
    minWidth: '400px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  smallGap: {
    gap: '4px',
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

export { BXTaskHoverCard, bxTaskHoverCardStyles };
export type { BXTaskHoverCardProps };
