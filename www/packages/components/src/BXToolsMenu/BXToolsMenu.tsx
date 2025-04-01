import * as stylex from '@stylexjs/stylex';

import { BXButton } from '../BXButton/BXButton';
import { BXCard } from '../BXCard/BXCard';
import { BXDivider } from '../BXDivider';
import { BXHeading } from '../BXHeading';
import {
  ArrowSquareOutIcon,
  CalendarIcon,
  CaretRightIcon,
  ClipboardTextIcon,
  ClockIcon,
  DiffIcon,
  HomeIcon,
  LinkSimpleIcon,
  MagnifyingGlassIcon,
} from '../BXIcon';
import FlameIcon from '../BXIcon/flame/FlameIcon';

interface BXToolsMenuProps {
  style?: stylex.StyleXStyles;
}

const BXToolsMenu = ({ style }: BXToolsMenuProps) => (
  <BXCard style={[bxToolMenuStyles.base, bxToolMenuStyles.gap, bxToolMenuStyles.card, style]}>
    <div {...stylex.props(bxToolMenuStyles.header)}>
      <BXHeading variant="h3">Tools</BXHeading>
    </div>
    <div {...stylex.props(bxToolMenuStyles.column)}>
      <BXButton
        startIcon={HomeIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        endContent={<></>}
        label="Home"
      />
      <BXButton
        startIcon={CalendarIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        endContent={<></>}
        label="Calendar"
      />
      <BXButton
        startIcon={MagnifyingGlassIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        endContent={<></>}
        label="Search"
      />
      <BXButton
        startIcon={ClipboardTextIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        endContent={<></>}
        label="Tasks"
      />
      <BXButton
        startIcon={DiffIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        endContent={<></>}
        label="Diffs"
      />
      <BXButton
        startIcon={FlameIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        endContent={<></>}
        label="SEVs"
      />
      <BXDivider style={bxToolMenuStyles.divider} />
      <BXButton
        startIcon={LinkSimpleIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        label="Create BXUrl"
        endContent={<></>}
      />
      <BXButton
        startIcon={ArrowSquareOutIcon}
        endIcon={CaretRightIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        label="Shortcuts"
        endContent={<></>}
      />
      <BXButton
        startIcon={ClockIcon}
        endIcon={CaretRightIcon}
        variant="flat"
        style={[bxToolMenuStyles.grow, bxToolMenuStyles.menuItem]}
        label="Recently opened"
        endContent={<></>}
      />
    </div>
  </BXCard>
);

const bxToolMenuStyles = stylex.create({
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
    width: '200px',
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

export { BXToolsMenu, bxToolMenuStyles };
export type { BXToolsMenuProps };
