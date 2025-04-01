import * as stylex from '@stylexjs/stylex';
import { ReactNode } from 'react';

import { BXBadge } from '../BXBadge/BXBadge';
import { BXCard } from '../BXCard/BXCard';
import { BXHeading } from '../BXHeading';
import { ChatDotsIcon, DiffIcon, PackageIcon, UsersThreeIcon } from '../BXIcon';
import ListNumbers from '../BXIcon/list-numbers/ListNumbersIcon';
import SignpostIcon from '../BXIcon/signpost/SignpostIcon';
import { BXLink } from '../BXLink/BXLink';
import { BXText } from '../BXText/BXText';

interface BXDiffHoverCardProps {
  diffNumber: string;
  diffTitle: string;
  diffStatus: string;
  commitedOn: string;
  owner: ReactNode;
  commentCount: number;
  significantLinesChanged: number;
  affectedProjects?: string[];
  style?: stylex.StyleXStyles;
}

const BXDiffHoverCard = ({
  diffNumber,
  diffTitle,
  diffStatus,
  commitedOn,
  owner,
  commentCount,
  significantLinesChanged,
  affectedProjects,
  style,
  ...props
}: BXDiffHoverCardProps) => {
  return (
    <BXCard style={[bxDiffHoverCardStyles.base, style]} {...props}>
      <div {...stylex.props(bxDiffHoverCardStyles.column)}>
        <div {...stylex.props(bxDiffHoverCardStyles.row, bxDiffHoverCardStyles.smallGap)}>
          <DiffIcon size="small" />
          <BXLink href="https://www.google.com">
            <BXText variant="supporting">D{diffNumber}</BXText>
          </BXLink>
        </div>
        <div {...stylex.props(bxDiffHoverCardStyles.column)}>
          <BXHeading variant="h2">{diffTitle}</BXHeading>
          <BXText variant="supporting">Commited on {commitedOn}</BXText>
        </div>
      </div>
      <div {...stylex.props(bxDiffHoverCardStyles.row, bxDiffHoverCardStyles.gap, style)}>
        <table style={{ tableLayout: 'auto' }}>
          <tr>
            <td>
              <SignpostIcon variant="outline" />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
              <BXBadge label={diffStatus} variant="green" />
              <BXBadge label="oncall-design-systems" />
              <BXBadge label="figma" />
            </td>
          </tr>
          <tr>
            <td>
              <UsersThreeIcon />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
              <BXText>Owned by </BXText>
              {owner}
            </td>
          </tr>
          <tr>
            <td>
              <ChatDotsIcon />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
              <BXText>{commentCount} comments</BXText>
            </td>
          </tr>
          <tr>
            <td>
              <ListNumbers />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
              <BXText>{significantLinesChanged} significant lines</BXText>
            </td>
          </tr>
          <tr>
            <td>
              <PackageIcon />
            </td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
              <BXText>
                Affects{' '}
                {formatAffectedProjects(
                  affectedProjects?.map((project, i) => (
                    <BXLink key={i} href="https://www.google.com">
                      {project}
                    </BXLink>
                  )),
                )}
              </BXText>
            </td>
          </tr>
        </table>
      </div>
    </BXCard>
  );
};

function formatAffectedProjects(projects?: ReactNode[]) {
  if (!projects || projects.length === 0) return null;
  if (projects.length === 1) return projects[0];
  if (projects.length === 2) return [projects[0], ' and ', projects[1]];

  const result = [];
  for (let i = 0; i < projects.length; i++) {
    result.push(projects[i]);
    if (i < projects.length - 2) {
      result.push(', ');
    } else if (i === projects.length - 2) {
      result.push(' and ');
    }
  }
  return result;
}

const bxDiffHoverCardStyles = stylex.create({
  base: {
    minWidth: '400px',
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
  smallGap: {
    gap: '4px',
  },
});

export { BXDiffHoverCard, bxDiffHoverCardStyles };
export type { BXDiffHoverCardProps };
