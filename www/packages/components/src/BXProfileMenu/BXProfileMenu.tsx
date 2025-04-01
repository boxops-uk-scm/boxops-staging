import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import { BXAvatar } from '../BXAvatar/BXAvatar';
import { BXButton } from '../BXButton/BXButton';
import { BXButtonGroup } from '../BXButtonGroup';
import { BXCard } from '../BXCard/BXCard';
import { BXDivider } from '../BXDivider';
import {
  ArrowSquareOutIcon,
  BroadcastIcon,
  CaretRightIcon,
  ClockIcon,
  GearIcon,
  MoonIcon,
  ProhibitInsetIcon,
  UserCircleIcon,
} from '../BXIcon';
import PencilSimpleIcon from '../BXIcon/pencil-simple/PencilSimpleIcon';
import { BXStatusVariant } from '../BXStatus';
import { BXTextPair } from '../BXTextPair/BXTextPair';
import { BXToggleButton } from '../BXToggleButton/BXToggleButton';

interface BXProfileMenuProps {
  name: string;
  profilePictureSrc: string;
  statusMessage?: string;
}

enum BXProfileMenuStatus {
  Available = 'Available',
  Busy = 'Busy',
  Away = 'Away',
}

const BXProfileMenu = ({ name, profilePictureSrc, statusMessage, ...props }: BXProfileMenuProps) => {
  const [status, setStatus] = useState(BXProfileMenuStatus.Available);

  return (
    <BXCard style={[bxProfileMenuStyles.base, bxProfileMenuStyles.gap, bxProfileMenuStyles.card]} {...props}>
      <div {...stylex.props(bxProfileMenuStyles.column, bxProfileMenuStyles.gap, bxProfileMenuStyles.header)}>
        <div {...stylex.props(bxProfileMenuStyles.row, bxProfileMenuStyles.gap)}>
          <BXAvatar
            size="36"
            src={profilePictureSrc}
            status={getStatusVariant(status)}
            style={bxProfileMenuStyles.avatar}
          />
          <BXTextPair variant="h4" description={statusMessage ?? 'Add a status message'}>
            {name}
          </BXTextPair>
          <div {...stylex.props(bxProfileMenuStyles.grow)} />
          <BXButton compact variant="flat" startIcon={PencilSimpleIcon} />
        </div>
        <BXButtonGroup style={[bxProfileMenuStyles.buttons, bxProfileMenuStyles.grow]}>
          <BXToggleButton
            onSelectedChange={() => setStatus(BXProfileMenuStatus.Available)}
            selected={status === BXProfileMenuStatus.Available}
            label="Available"
            style={bxProfileMenuStyles.grow}
          />
          <BXToggleButton
            onSelectedChange={() => setStatus(BXProfileMenuStatus.Busy)}
            selected={status === BXProfileMenuStatus.Busy}
            label="Busy"
            style={bxProfileMenuStyles.grow}
          />
          <BXToggleButton
            onSelectedChange={() => setStatus(BXProfileMenuStatus.Away)}
            selected={status === BXProfileMenuStatus.Away}
            label="Away"
            style={bxProfileMenuStyles.grow}
          />
        </BXButtonGroup>
      </div>
      <div {...stylex.props(bxProfileMenuStyles.column)}>
        <BXButton
          startIcon={ClockIcon}
          endIcon={CaretRightIcon}
          variant="flat"
          style={[bxProfileMenuStyles.grow, bxProfileMenuStyles.menuItem]}
          label="Available until 5:00 pm"
          endContent={<></>}
        />
        <BXButton
          startIcon={BroadcastIcon}
          endIcon={ArrowSquareOutIcon}
          variant="flat"
          style={[bxProfileMenuStyles.grow, bxProfileMenuStyles.menuItem]}
          label="Status Tool"
          endContent={<></>}
        />
        <BXButton
          startIcon={UserCircleIcon}
          endIcon={ArrowSquareOutIcon}
          variant="flat"
          style={[bxProfileMenuStyles.grow, bxProfileMenuStyles.menuItem]}
          label="Intern Profile"
          endContent={<></>}
        />
        <BXButton
          startIcon={UserCircleIcon}
          endIcon={ArrowSquareOutIcon}
          variant="flat"
          style={[bxProfileMenuStyles.grow, bxProfileMenuStyles.menuItem]}
          label="Workplace Profile"
          endContent={<></>}
        />
        <BXButton
          endContent={<></>}
          startIcon={GearIcon}
          variant="flat"
          style={[bxProfileMenuStyles.grow, bxProfileMenuStyles.menuItem]}
          label="Status Settings"
        />
        <BXDivider style={bxProfileMenuStyles.divider} />
        <BXButton
          endContent={<></>}
          startIcon={MoonIcon}
          variant="flat"
          style={[bxProfileMenuStyles.grow, bxProfileMenuStyles.menuItem]}
          label="Dark Mode"
        />
        <BXButton
          endContent={<></>}
          startIcon={ProhibitInsetIcon}
          variant="flat"
          style={[bxProfileMenuStyles.grow, bxProfileMenuStyles.menuItem]}
          label="Do Not Disturb"
        />
      </div>
    </BXCard>
  );
};

function getStatusVariant(status: BXProfileMenuStatus): BXStatusVariant {
  switch (status) {
    case BXProfileMenuStatus.Available:
      return 'success';
    case BXProfileMenuStatus.Busy:
      return 'error';
    case BXProfileMenuStatus.Away:
      return 'warning';
    default:
      return 'default';
  }
}

const bxProfileMenuStyles = stylex.create({
  avatar: {
    pointerEvents: 'none',
  },
  card: {
    padding: '0px',
  },
  fullWidth: {
    width: '100%',
  },
  header: {
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '2px',
  },
  menuItem: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  base: {
    width: '280px',
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
  divider: {
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
    marginBottom: '8px',
  },
});

export { BXProfileMenu, BXProfileMenuStatus, bxProfileMenuStyles };
export type { BXProfileMenuProps };
