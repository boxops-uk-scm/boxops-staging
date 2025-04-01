import {
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  BellIcon,
  BXAvatar,
  BXAvatarGroup,
  bxAvatarStyles,
  BXBadge,
  BXButton,
  BXButtonGroup,
  BXDiffHoverCard,
  BXEmployeeHoverCard,
  BXGlimmer,
  BXHeading,
  BXLink,
  BXLogo,
  BXMeetingMenu,
  BXMeetingMenuItem,
  BXNotification,
  BXNotificationMenu,
  BXProfileMenu,
  BXSitemap,
  BXSpinner,
  BXSplitButtonMenuItem,
  BXStatus,
  BXTaskHoverCard,
  BXText,
  BXTextPair,
  BXToast,
  BXToolsMenu,
  BXTooltip,
  BXUncontrolledBanner,
  BXUncontrolledSplitButton,
  BXUncontrolledToggleButton,
  CalendarIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CircleIcon,
  ClipboardIcon,
  ClipboardTextIcon,
  CodeIcon,
  CopyIcon,
  DiffIcon,
  DotsNineIcon,
  DownloadIcon,
  FlaskIcon,
  GraphIcon,
  HomeIcon,
  InfoIcon,
  LineSegmentIcon,
  MapPinIcon,
  PencilSimpleIcon,
  PolygonIcon,
  PuzzlePieceIcon,
  RectangleIcon,
  RobotIcon,
  StarIcon,
  SunHorizonIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TrashIcon,
  TreeStructureIcon,
  UserCircleIcon,
  XCircleIcon,
  XIcon,
} from '@boxops/components';
import { BXCard } from '@boxops/components/src/BXCard/BXCard';
import { backgroundColors, dividerColors, persistentColors } from '@boxops/components/src/colors.stylex';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import * as HoverCard from '@radix-ui/react-hover-card';
import stylex from '@stylexjs/stylex';
import { addMinutes, subMinutes } from 'date-fns';
import { useEffect } from 'react';

import person1 from './profile.jpeg';
import person2 from './profile2.jpeg';
import person3 from './profile3.jpeg';
import person4 from './profile4.jpeg';


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = SimpleEntryPointProps<{}>;

const initials = [
  'JM',
  'DW',
  'LB',
  'SC',
  'MP',
  'KB',
  'RT',
  'AR',
  'KC',
  'BS',
  'MH',
  'CD',
  'PN',
  'LS',
  'JK',
  'DE',
  'RW',
  'EB',
  'JF',
  'AS',
  'CH',
  'RH',
  'GD',
  'ST',
];

const TasksPage = (_: Props) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.typographyGrid)}>
        <div {...stylex.props(styles.gridCell)}>Name</div>
        <div {...stylex.props(styles.gridCell)}>Font family</div>
        <div {...stylex.props(styles.gridCell)}>Font weight</div>
        <div {...stylex.props(styles.gridCell)}>Font size</div>
        <div {...stylex.props(styles.gridCell)}>Line height</div>
        <div {...stylex.props(styles.gridCell)}>Letter spacing</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="h1">H1 Page Heading</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>SemiBold</div>
        <div {...stylex.props(styles.gridCell)}>20</div>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="h2">H2 Page Heading</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>SemiBold</div>
        <div {...stylex.props(styles.gridCell)}>18</div>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="h3">H3 Page Heading</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Bold</div>
        <div {...stylex.props(styles.gridCell)}>16</div>
        <div {...stylex.props(styles.gridCell)}>20</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="h4">H4 Page Heading</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Bold</div>
        <div {...stylex.props(styles.gridCell)}>14</div>
        <div {...stylex.props(styles.gridCell)}>20</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="title">Title</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>SemiBold</div>
        <div {...stylex.props(styles.gridCell)}>32</div>
        <div {...stylex.props(styles.gridCell)}>48</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="section">Section Heading</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>SemiBold</div>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>32</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="content">Content Heading</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Bold</div>
        <div {...stylex.props(styles.gridCell)}>20</div>
        <div {...stylex.props(styles.gridCell)}>28</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXHeading variant="group">Group Heading</BXHeading>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Bold</div>
        <div {...stylex.props(styles.gridCell)}>16</div>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
      </div>
      <div {...stylex.props(styles.typographyGrid)}>
        <div {...stylex.props(styles.gridCell)}>Name</div>
        <div {...stylex.props(styles.gridCell)}>Font family</div>
        <div {...stylex.props(styles.gridCell)}>Font weight</div>
        <div {...stylex.props(styles.gridCell)}>Font size</div>
        <div {...stylex.props(styles.gridCell)}>Line height</div>
        <div {...stylex.props(styles.gridCell)}>Letter spacing</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXText variant="largeEmphasized">Large Emphasized Text</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Bold</div>
        <div {...stylex.props(styles.gridCell)}>16</div>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>-0.24</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXText variant="largeBody">Large Body Text</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Normal</div>
        <div {...stylex.props(styles.gridCell)}>16</div>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXText variant="emphasized">Emphasized Text</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Bold</div>
        <div {...stylex.props(styles.gridCell)}>14</div>
        <div {...stylex.props(styles.gridCell)}>20</div>
        <div {...stylex.props(styles.gridCell)}>-0.24</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXText variant="body">Body Text</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Normal</div>
        <div {...stylex.props(styles.gridCell)}>14</div>
        <div {...stylex.props(styles.gridCell)}>20</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXText variant="code">Code</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>Fira Code</div>
        <div {...stylex.props(styles.gridCell)}>Normal</div>
        <div {...stylex.props(styles.gridCell)}>14</div>
        <div {...stylex.props(styles.gridCell)}>20</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXText variant="supporting">Supporting Text</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>Open Sans</div>
        <div {...stylex.props(styles.gridCell)}>Normal</div>
        <div {...stylex.props(styles.gridCell)}>12</div>
        <div {...stylex.props(styles.gridCell)}>16</div>
        <div {...stylex.props(styles.gridCell)}>0</div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}></div>
        <div {...stylex.props(styles.gridCell)}></div>
        <div {...stylex.props(styles.gridCell)}>H2</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXTextPair variant="h2" description="Description text.">
            H2 heading text.
          </BXTextPair>
        </div>
        <div {...stylex.props(styles.gridCell)}>H3</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXTextPair variant="h3" description="Description text.">
            H3 heading text.
          </BXTextPair>
        </div>
        <div {...stylex.props(styles.gridCell)}>H4</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXTextPair variant="h4" description="Description text.">
            H4 heading text.
          </BXTextPair>
        </div>
        <div {...stylex.props(styles.gridCell)}>Body</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXTextPair variant="body" description="Description text.">
            Body text.
          </BXTextPair>
        </div>
      </div>
      <div {...stylex.props(styles.sixColumnGrid)}>
        <div {...stylex.props(styles.gridCell)} />
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>Active</div>
        <div {...stylex.props(styles.gridCell)}>Positive</div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>Warning</div>
        <div {...stylex.props(styles.gridCell)}>Label</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="active" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="warning" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Number</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="1234" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="1234" variant="active" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="1234" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="1234" variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="1234" variant="warning" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Short Label</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="AA" />
          <BXBadge label="Aa" />
          <BXBadge label="A" />
          <BXBadge label="a" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="BB" variant="active" />
          <BXBadge label="Bb" variant="active" />
          <BXBadge label="B" variant="active" />
          <BXBadge label="b" variant="active" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="CC" variant="positive" />
          <BXBadge label="Cc" variant="positive" />
          <BXBadge label="C" variant="positive" />
          <BXBadge label="c" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="DD" variant="error" />
          <BXBadge label="Dd" variant="error" />
          <BXBadge label="D" variant="error" />
          <BXBadge label="d" variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="EE" variant="warning" />
          <BXBadge label="Ee" variant="warning" />
          <BXBadge label="E" variant="warning" />
          <BXBadge label="e" variant="warning" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Small Number</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" />
          <BXBadge label="9" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="active" />
          <BXBadge label="9" variant="active" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="positive" />
          <BXBadge label="9" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="error" />
          <BXBadge label="9" variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="warning" />
          <BXBadge label="9" variant="warning" />
        </div>
      </div>
      <div {...stylex.props(styles.elevenColumnGrid)}>
        <div {...stylex.props(styles.gridCell)} />
        <div {...stylex.props(styles.gridCell)}>Gray</div>
        <div {...stylex.props(styles.gridCell)}>Blue</div>
        <div {...stylex.props(styles.gridCell)}>Green</div>
        <div {...stylex.props(styles.gridCell)}>Yellow</div>
        <div {...stylex.props(styles.gridCell)}>Orange</div>
        <div {...stylex.props(styles.gridCell)}>Red</div>
        <div {...stylex.props(styles.gridCell)}>Magenta</div>
        <div {...stylex.props(styles.gridCell)}>Purple</div>
        <div {...stylex.props(styles.gridCell)}>Teal</div>
        <div {...stylex.props(styles.gridCell)}>Cyan</div>
        <div {...stylex.props(styles.gridCell)}>Label</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="gray" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="blue" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="green" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="yellow" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="orange" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="red" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="magenta" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="purple" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="teal" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="cyan" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Number</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="gray" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="blue" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="green" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="yellow" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="orange" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="red" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="magenta" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="purple" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="teal" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="cyan" />
        </div>
      </div>
      <div {...stylex.props(styles.fourColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Number</div>
        <div {...stylex.props(styles.gridCell)}>Icon and number</div>
        <div {...stylex.props(styles.gridCell)}>Label</div>
        <div {...stylex.props(styles.gridCell)}>Icon and label</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="99" variant="error" icon={BellIcon} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXBadge label="Label" variant="error" icon={TrashIcon} />
        </div>
      </div>
      <div {...stylex.props(styles.fourColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}></div>
        <div {...stylex.props(styles.gridCell)}>Small</div>
        <div {...stylex.props(styles.gridCell)}>Medium</div>
        <div {...stylex.props(styles.gridCell)}>Large</div>
        <div {...stylex.props(styles.gridCell)}>Dark</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXSpinner style={styles.spinner} size="small" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXSpinner style={styles.spinner} size="medium" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXSpinner style={styles.spinner} size="large" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Light</div>
        <div {...stylex.props(styles.gridCell, styles.dark)}>
          <BXSpinner style={styles.darkSpinner} size="small" variant="light" />
        </div>
        <div {...stylex.props(styles.gridCell, styles.dark)}>
          <BXSpinner style={styles.darkSpinner} size="medium" variant="light" />
        </div>
        <div {...stylex.props(styles.gridCell, styles.dark)}>
          <BXSpinner style={styles.darkSpinner} size="large" variant="light" />
        </div>
      </div>
      <div {...stylex.props(styles.iconGrid)}>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ArrowUpIcon variant="outline" />
            <ArrowUpIcon variant="solid" />
          </div>
          <BXText>arrow-up</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ArrowUpRightIcon variant="outline" />
            <ArrowUpRightIcon variant="solid" />
          </div>
          <BXText>arrow-up-right</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ArrowRightIcon variant="outline" />
            <ArrowRightIcon variant="solid" />
          </div>
          <BXText>arrow-right</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ArrowDownRightIcon variant="outline" />
            <ArrowDownRightIcon variant="solid" />
          </div>
          <BXText>arrow-down-right</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ArrowDownIcon variant="outline" />
            <ArrowDownIcon variant="solid" />
          </div>
          <BXText>arrow-down</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ArrowDownLeftIcon variant="outline" />
            <ArrowDownLeftIcon variant="solid" />
          </div>
          <BXText>arrow-left-right</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ArrowUpLeftIcon variant="outline" />
            <ArrowUpLeftIcon variant="solid" />
          </div>
          <BXText>arrow-up-left</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <CaretRightIcon variant="outline" />
            <CaretRightIcon variant="solid" />
          </div>
          <BXText>caret-right</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <CaretDownIcon variant="outline" />
            <CaretDownIcon variant="solid" />
          </div>
          <BXText>caret-down</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <CaretLeftIcon variant="outline" />
            <CaretLeftIcon variant="solid" />
          </div>
          <BXText>caret-left</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ClipboardIcon variant="outline" />
            <ClipboardIcon variant="solid" />
          </div>
          <BXText>clipboard</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <ClipboardTextIcon variant="outline" />
            <ClipboardTextIcon variant="solid" />
          </div>
          <BXText>clipboard-text</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <CodeIcon variant="outline" />
            <CodeIcon variant="solid" />
          </div>
          <BXText>code</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <CopyIcon variant="outline" />
            <CopyIcon variant="solid" />
          </div>
          <BXText>copy</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <DiffIcon variant="outline" />
            <DiffIcon variant="solid" />
          </div>
          <BXText>diff</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <FlaskIcon variant="outline" />
            <FlaskIcon variant="solid" />
          </div>
          <BXText>flask</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <GraphIcon variant="outline" />
            <GraphIcon variant="solid" />
          </div>
          <BXText>graph</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <HomeIcon variant="outline" />
            <HomeIcon variant="solid" />
          </div>
          <BXText>home</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <PuzzlePieceIcon variant="outline" />
            <PuzzlePieceIcon variant="solid" />
          </div>
          <BXText>puzzle-piece</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <UserCircleIcon variant="outline" />
            <UserCircleIcon variant="solid" />
          </div>
          <BXText>user-circle</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <PencilSimpleIcon variant="outline" />
            <PencilSimpleIcon variant="solid" />
          </div>
          <BXText>pencil</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <DownloadIcon variant="outline" />
            <DownloadIcon variant="solid" />
          </div>
          <BXText>download</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <XCircleIcon variant="outline" />
            <XCircleIcon variant="solid" />
          </div>
          <BXText>x-circle</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <TextAlignLeftIcon variant="outline" />
            <TextAlignLeftIcon variant="solid" />
          </div>
          <BXText>text-align-left</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <TextAlignCenterIcon variant="outline" />
            <TextAlignCenterIcon variant="solid" />
          </div>
          <BXText>text-align-center</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <TextAlignRightIcon variant="outline" />
            <TextAlignRightIcon variant="solid" />
          </div>
          <BXText>text-align-right</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <TextAlignJustifyIcon variant="outline" />
            <TextAlignJustifyIcon variant="solid" />
          </div>
          <BXText>text-align-justify</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <RectangleIcon variant="outline" />
            <RectangleIcon variant="solid" />
          </div>
          <BXText>rectangle</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <CircleIcon variant="outline" />
            <CircleIcon variant="solid" />
          </div>
          <BXText>circle</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <LineSegmentIcon variant="outline" />
            <LineSegmentIcon variant="solid" />
          </div>
          <BXText>line-segment</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <StarIcon variant="outline" />
            <StarIcon variant="solid" />
          </div>
          <BXText>star</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <PolygonIcon variant="outline" />
            <PolygonIcon variant="solid" />
          </div>
          <BXText>polygon</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <InfoIcon variant="outline" />
            <InfoIcon variant="solid" />
          </div>
          <BXText>info</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <XIcon variant="outline" />
            <XIcon variant="solid" />
          </div>
          <BXText>x</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <BellIcon variant="outline" />
            <BellIcon variant="solid" />
          </div>
          <BXText>bell</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <TrashIcon variant="outline" />
            <TrashIcon variant="solid" />
          </div>
          <BXText>trash</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <TreeStructureIcon variant="outline" />
            <TreeStructureIcon variant="solid" />
          </div>
          <BXText>tree-structure</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <MapPinIcon variant="outline" />
            <MapPinIcon variant="solid" />
          </div>
          <BXText>map-pin</BXText>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <div>
            <SunHorizonIcon variant="outline" />
            <SunHorizonIcon variant="solid" />
          </div>
          <BXText>sun-horizon</BXText>
        </div>
      </div>
      <div {...stylex.props(styles.threeColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}></div>
        <div {...stylex.props(styles.gridCell)}>Enabled</div>
        <div {...stylex.props(styles.gridCell)}>Disabled</div>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton disabled label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Flat</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton disabled label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Primary</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton disabled label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton disabled label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Positive</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton disabled label="Button" variant="positive" />
        </div>
      </div>
      <div {...stylex.props(styles.threeColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}></div>
        <div {...stylex.props(styles.gridCell)}>Enabled</div>
        <div {...stylex.props(styles.gridCell)}>Disabled</div>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact disabled label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Flat</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact disabled label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Primary</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact disabled label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact disabled label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Positive</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact disabled label="Button" variant="positive" />
        </div>
      </div>
      <div {...stylex.props(styles.sixColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}></div>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>Flat</div>
        <div {...stylex.props(styles.gridCell)}>Primary</div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>Positive</div>
        <div {...stylex.props(styles.gridCell)}>Label</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Icon only</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Label and start-icon</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton startIcon={DiffIcon} label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Label and end-icon</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton endIcon={DiffIcon} label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton endIcon={DiffIcon} label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton endIcon={DiffIcon} label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton endIcon={DiffIcon} label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton endIcon={DiffIcon} label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Badge</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="flat" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="primary" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="negative" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton label="Button" variant="positive" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>Loading</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton loading label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton loading label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton loading label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton loading label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton loading label="Button" variant="positive" />
        </div>
      </div>
      <div {...stylex.props(styles.sixColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}></div>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>Flat</div>
        <div {...stylex.props(styles.gridCell)}>Primary</div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>Positive</div>
        <div {...stylex.props(styles.gridCell)}>Label</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Icon only</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Label and start-icon</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact startIcon={DiffIcon} label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Label and end-icon</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact endIcon={DiffIcon} label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact endIcon={DiffIcon} label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact endIcon={DiffIcon} label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact endIcon={DiffIcon} label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact endIcon={DiffIcon} label="Button" variant="positive" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Badge</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="flat" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="primary" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="negative" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact label="Button" variant="positive" badge={<BXBadge label="99" />} />
        </div>
        <div {...stylex.props(styles.gridCell)}>Loading</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact loading label="Button" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact loading label="Button" variant="flat" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact loading label="Button" variant="primary" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact loading label="Button" variant="negative" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButton compact loading label="Button" variant="positive" />
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)} />
        <div {...stylex.props(styles.gridCell)}>1 button</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButtonGroup>
            <BXButton label="Button" />
          </BXButtonGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>2 buttons</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButtonGroup>
            <BXButton label="Cancel" />
            <BXButton label="Continue" variant="primary" />
          </BXButtonGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>3 or more buttons</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButtonGroup>
            <BXButton label="Edit" startIcon={PencilSimpleIcon} />
            <BXButton label="Duplicate" startIcon={CopyIcon} />
            <BXButton label="Delete" startIcon={XCircleIcon} variant="negative" />
            <BXButton loading label="Download" startIcon={DownloadIcon} />
          </BXButtonGroup>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Tooltip</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButtonGroup>
            <BXTooltip label="Left align (⌘+Shift+L)">
              <BXButton variant="flat" startIcon={TextAlignLeftIcon} />
            </BXTooltip>
            <BXTooltip label="Center align (⌘+Shift+E)">
              <BXButton variant="flat" startIcon={TextAlignCenterIcon} />
            </BXTooltip>
            <BXTooltip label="Right align (⌘+Shift+R)">
              <BXButton variant="flat" startIcon={TextAlignRightIcon} />
            </BXTooltip>
            <BXTooltip label="Justify (⌘+Shift+J)">
              <BXButton variant="flat" startIcon={TextAlignJustifyIcon} />
            </BXTooltip>
          </BXButtonGroup>
        </div>
      </div>
      <div {...stylex.props(styles.fourColumnGrid)}>
        <div {...stylex.props(styles.gridCell)} />
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>Primary</div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            variant="primary"
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            variant="positive"
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
      </div>
      <div {...stylex.props(styles.fourColumnGrid)}>
        <div {...stylex.props(styles.gridCell)} />
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>Primary</div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>Compact</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            compact
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            variant="primary"
            compact
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            variant="positive"
            compact
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
      </div>
      <div {...stylex.props(styles.fourColumnGrid)}>
        <div {...stylex.props(styles.gridCell)} />
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>Primary</div>
        <div {...stylex.props(styles.gridCell)}>Negative</div>
        <div {...stylex.props(styles.gridCell)}>Constrained</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            compact
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
            style={styles.wideSplitButton}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            variant="primary"
            compact
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            variant="positive"
            compact
            label="Main action"
            onClick={() => {
              console.log('Main action clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              label="Secondary action"
              onClick={() => {
                console.log('Secondary action clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Example</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledSplitButton
            startIcon={RectangleIcon}
            compact
            label="Rectangle"
            onClick={() => {
              console.log('Rectangle clicked.');
            }}
          >
            <BXSplitButtonMenuItem
              startIcon={CircleIcon}
              key={0}
              label="Ellipse"
              onClick={() => {
                console.log('Ellipse clicked.');
              }}
            />
            <BXSplitButtonMenuItem
              startIcon={PolygonIcon}
              key={1}
              label="Polygon"
              onClick={() => {
                console.log('Polygon clicked.');
              }}
            />
            <BXSplitButtonMenuItem
              startIcon={LineSegmentIcon}
              key={2}
              label="Line"
              onClick={() => {
                console.log('Line clicked.');
              }}
            />
            <BXSplitButtonMenuItem
              startIcon={ArrowUpRightIcon}
              key={3}
              label="Arrow"
              onClick={() => {
                console.log('Arrow clicked.');
              }}
            />
            <BXSplitButtonMenuItem
              startIcon={StarIcon}
              key={4}
              label="Star"
              onClick={() => {
                console.log('Star clicked.');
              }}
            />
          </BXUncontrolledSplitButton>
        </div>
      </div>
      <div {...stylex.props(styles.threeColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Card</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXCard style={styles.card} />
        </div>
        <div {...stylex.props(styles.gridCell, styles.white)}>
          <BXCard style={styles.card} />
        </div>
      </div>
      <div {...stylex.props(styles.threeColumnGrid)}>
        <div {...stylex.props(styles.gridCell)} />
        <div {...stylex.props(styles.gridCell)}>Enabled</div>
        <div {...stylex.props(styles.gridCell)}>Disabled</div>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledToggleButton label="Option A" startIcon={DiffIcon} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledToggleButton disabled label="Option B" startIcon={DiffIcon} />
        </div>
        <div {...stylex.props(styles.gridCell)}>Flat</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledToggleButton variant="flat" label="Option A" startIcon={DiffIcon} />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledToggleButton variant="flat" disabled label="Option B" startIcon={DiffIcon} />
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButtonGroup>
            <BXUncontrolledToggleButton label="Option A" startIcon={DiffIcon} />
            <BXUncontrolledToggleButton label="Option B" startIcon={FlaskIcon} />
            <BXUncontrolledToggleButton label="Option C" startIcon={GraphIcon} />
          </BXButtonGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>Flat</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXButtonGroup>
            <BXUncontrolledToggleButton variant="flat" label="Option A" startIcon={DiffIcon} />
            <BXUncontrolledToggleButton variant="flat" label="Option B" startIcon={FlaskIcon} />
            <BXUncontrolledToggleButton variant="flat" label="Option C" startIcon={GraphIcon} />
          </BXButtonGroup>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Glimmer</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXCard>
            <BXGlimmer style={styles.glimmer} />
          </BXCard>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="info"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          />
        </div>
        <div {...stylex.props(styles.gridCell)}>Collapsible</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="info"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          >
            <BXGlimmer style={styles.bannerPlaceholder} />
          </BXUncontrolledBanner>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="warning"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          />
        </div>
        <div {...stylex.props(styles.gridCell)}>Collapsible</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="warning"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          >
            <BXGlimmer style={styles.bannerPlaceholder} />
          </BXUncontrolledBanner>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="success"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          />
        </div>
        <div {...stylex.props(styles.gridCell)}>Collapsible</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="success"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          >
            <BXGlimmer style={styles.bannerPlaceholder} />
          </BXUncontrolledBanner>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="error"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          />
        </div>
        <div {...stylex.props(styles.gridCell)}>Collapsible</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXUncontrolledBanner
            variant="error"
            startIcon={InfoIcon}
            style={styles.banner}
            title="Title"
            description="Description"
          >
            <BXGlimmer style={styles.bannerPlaceholder} />
          </BXUncontrolledBanner>
        </div>
      </div>
      <div {...stylex.props(styles.fiveColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Default</div>
        <div {...stylex.props(styles.gridCell)}>Active</div>
        <div {...stylex.props(styles.gridCell)}>Success</div>
        <div {...stylex.props(styles.gridCell)}>Error</div>
        <div {...stylex.props(styles.gridCell)}>Warning</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXStatus />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXStatus variant="info" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXStatus variant="success" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXStatus variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXStatus variant="warning" />
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Sizes</div>
        <div {...stylex.props(styles.gridCell, styles.row)}>
          <BXStatus size="small" variant="success" />
          <BXStatus size="medium" variant="success" />
          <BXStatus size="large" variant="success" />
          <BXStatus size="xlarge" variant="success" />

          <BXStatus size="small" variant="error" />
          <BXStatus size="medium" variant="error" />
          <BXStatus size="large" variant="error" />
          <BXStatus size="xlarge" variant="error" />

          <BXStatus size="small" variant="warning" />
          <BXStatus size="medium" variant="warning" />
          <BXStatus size="large" variant="warning" />
          <BXStatus size="xlarge" variant="warning" />
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Profile Picture</div>
        <div {...stylex.props(styles.gridCell, styles.row)}>
          <BXAvatar src={person1} size="24" />
          <BXAvatar src={person1} size="32" />
          <BXAvatar src={person1} size="36" />
          <BXAvatar src={person1} size="40" />
          <BXAvatar src={person1} size="48" />
          <BXAvatar src={person1} size="60" />
          <BXAvatar src={person1} size="128" />
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Profile Picture with Status</div>
        <div {...stylex.props(styles.gridCell, styles.row)}>
          <BXAvatar src={person1} size="24" status="success" />
          <BXAvatar src={person1} size="32" status="success" />
          <BXAvatar src={person1} size="36" status="success" />
          <BXAvatar src={person1} size="40" status="success" />
          <BXAvatar src={person1} size="48" status="success" />
          <BXAvatar src={person1} size="60" status="success" />
          <BXAvatar src={person1} size="128" status="success" />
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Profile Picture with Initials</div>
        <div {...stylex.props(styles.gridCell, styles.row)}>
          <BXAvatar size="24" status="success">
            BH
          </BXAvatar>
          <BXAvatar size="32" status="success">
            AB
          </BXAvatar>
          <BXAvatar size="36" status="success">
            AC
          </BXAvatar>
          <BXAvatar size="40" status="success">
            NH
          </BXAvatar>
          <BXAvatar size="48" status="success">
            SM
          </BXAvatar>
          <BXAvatar size="60" status="success">
            PG
          </BXAvatar>
          <BXAvatar size="128" status="success">
            JV
          </BXAvatar>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Facepile Hidden Face Count</div>
        <div {...stylex.props(styles.gridCell, styles.row)}>
          <BXAvatar size="24" style={bxAvatarStyles.defaultColor}>
            +99
          </BXAvatar>
          <BXAvatar size="32" style={bxAvatarStyles.defaultColor}>
            +99
          </BXAvatar>
          <BXAvatar size="36" style={bxAvatarStyles.defaultColor}>
            +99
          </BXAvatar>
          <BXAvatar size="40" style={bxAvatarStyles.defaultColor}>
            +99
          </BXAvatar>
          <BXAvatar size="48" style={bxAvatarStyles.defaultColor}>
            +99
          </BXAvatar>
          <BXAvatar size="60" style={bxAvatarStyles.defaultColor}>
            +99
          </BXAvatar>
          <BXAvatar size="128" style={bxAvatarStyles.defaultColor}>
            +99
          </BXAvatar>
        </div>
      </div>
      <div {...stylex.props(styles.iconGrid)}>
        {initials.map((i, key) => {
          return (
            <div key={key} {...stylex.props(styles.gridCell)}>
              <BXAvatar size="32">{i}</BXAvatar>
            </div>
          );
        })}
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Facepile Hidden Face Count</div>
        <div {...stylex.props(styles.gridCell, styles.row)}>
          <BXAvatar size="24" style={bxAvatarStyles.defaultColor}>
            +1
          </BXAvatar>
          <BXAvatar size="32" style={bxAvatarStyles.defaultColor}>
            +2
          </BXAvatar>
          <BXAvatar size="36" style={bxAvatarStyles.defaultColor}>
            +3
          </BXAvatar>
          <BXAvatar size="40" style={bxAvatarStyles.defaultColor}>
            +4
          </BXAvatar>
          <BXAvatar size="48" style={bxAvatarStyles.defaultColor}>
            +5
          </BXAvatar>
          <BXAvatar size="60" style={bxAvatarStyles.defaultColor}>
            +6
          </BXAvatar>
          <BXAvatar size="128" style={bxAvatarStyles.defaultColor}>
            +7
          </BXAvatar>
        </div>
      </div>
      <div {...stylex.props(styles.threeColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="24">
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="24" maxAvatars={2}>
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>32</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="32">
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="32" maxAvatars={2}>
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>36</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="36">
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="36" maxAvatars={2}>
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>40</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="40">
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="40" maxAvatars={2}>
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>48</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="48">
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="48" maxAvatars={2}>
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>60</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="60">
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="60" maxAvatars={2}>
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>128</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="128">
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="128" maxAvatars={2}>
            <BXAvatar src={person1} status="success" />
            <BXAvatar src={person2} status="default" />
            <BXAvatar src={person3} status="success" />
            <BXAvatar src={person4} status="success" />
          </BXAvatarGroup>
        </div>
      </div>
      <div {...stylex.props(styles.threeColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>24</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="24">
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="24" maxAvatars={2}>
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>32</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="32">
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="32" maxAvatars={2}>
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>36</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="36">
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="36" maxAvatars={2}>
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>40</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="40">
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="40" maxAvatars={2}>
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>48</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="48">
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="48" maxAvatars={2}>
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>60</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="60">
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="60" maxAvatars={2}>
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>128</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="128">
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
        <div {...stylex.props(styles.gridCell)}>
          <BXAvatarGroup avatarSize="128" maxAvatars={2}>
            <BXAvatar icon={GraphIcon} status="success" />
            <BXAvatar icon={ClipboardTextIcon} status="default" />
            <BXAvatar icon={DiffIcon} status="success" />
            <BXAvatar icon={RobotIcon} status="success" />
          </BXAvatarGroup>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Link</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXLink href="https://www.google.com">
            <BXText>Link Text</BXText>
          </BXLink>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Employee Hover Card</div>
        <div {...stylex.props(styles.gridCell)}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <BXLink href="www.google.com">
                <BXText>Daniele Geménez</BXText>
              </BXLink>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                <BXEmployeeHoverCard
                  profilePictureSrc={person1}
                  status={'success'}
                  name="Daniele Geménez"
                  unixname="dgménez"
                  jobTitle="Product Designer on Instagram"
                  reportsTo="Bora Chan"
                  location="Menlo Park (Building 21.1Z8 - Metaway) (In Office)"
                  localTime="2:55 PM Pacific Time"
                />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Task Hover Card</div>
        <div {...stylex.props(styles.gridCell)}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <BXLink href="www.google.com">
                <BXText>T251642</BXText>
              </BXLink>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                <BXTaskHoverCard
                  taskName="Implement a Select component"
                  taskNumber="2516422"
                  taskStatus="Closed"
                  taskPriority="Wish"
                  taskTags={['oncall-team-design-systems', 'figma']}
                  owner={
                    <HoverCard.Root>
                      <HoverCard.Trigger asChild>
                        <span style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                          <BXAvatar src={person1} size="24" status="warning" />
                          <BXLink href="www.google.com">
                            <BXText>Daniele Geménez</BXText>
                          </BXLink>
                        </span>
                      </HoverCard.Trigger>
                      <HoverCard.Portal>
                        <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                          <BXEmployeeHoverCard
                            profilePictureSrc={person1}
                            status={'success'}
                            name="Daniele Geménez"
                            unixname="dgménez"
                            jobTitle="Product Designer on Instagram"
                            reportsTo="Bora Chan"
                            location="Menlo Park (Building 21.1Z8 - Metaway) (In Office)"
                            localTime="2:55 PM Pacific Time"
                          />
                        </HoverCard.Content>
                      </HoverCard.Portal>
                    </HoverCard.Root>
                  }
                />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Diff Hover Card</div>
        <div {...stylex.props(styles.gridCell)}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <BXLink href="www.google.com">
                <BXText>D123456</BXText>
              </BXLink>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                <BXDiffHoverCard
                  diffStatus="Accepted"
                  diffNumber="123456"
                  diffTitle="Export styles for standard layouts"
                  commitedOn="July 15, 2024, 9:55 PM"
                  owner={
                    <HoverCard.Root>
                      <HoverCard.Trigger asChild>
                        <span
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '4px',
                            alignItems: 'center',
                          }}
                        >
                          <BXAvatar src={person1} size="24" status="warning" />
                          <BXLink href="www.google.com">
                            <BXText>Daniele Geménez</BXText>
                          </BXLink>
                        </span>
                      </HoverCard.Trigger>
                      <HoverCard.Portal>
                        <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                          <BXEmployeeHoverCard
                            profilePictureSrc={person1}
                            status={'success'}
                            name="Daniele Geménez"
                            unixname="dgménez"
                            jobTitle="Product Designer on Instagram"
                            reportsTo="Bora Chan"
                            location="Menlo Park (Building 21.1Z8 - Metaway) (In Office)"
                            localTime="2:55 PM Pacific Time"
                          />
                        </HoverCard.Content>
                      </HoverCard.Portal>
                    </HoverCard.Root>
                  }
                  commentCount={57}
                  significantLinesChanged={964}
                  affectedProjects={['BXDS', 'WWW']}
                />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Profile Menu</div>
        <div {...stylex.props(styles.gridCell)}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <BXAvatar src={person2} size="32" status="warning" />
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content side="bottom" sideOffset={5} {...stylex.props(styles.popover)}>
                <BXProfileMenu name="Tsz Kai Ho" profilePictureSrc={person2} />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Sitemap</div>
        <div {...stylex.props(styles.gridCell)}>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <BXLogo icon={ClipboardTextIcon} />
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content align="start" side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                <BXSitemap />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Notification</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXNotification avatar={<BXAvatar icon={RobotIcon} size="48" style={styles.avatar} />}>
            <p>
              <BXText variant="emphasized">Design Community</BXText>
              &thinsp;
              <BXText>invites you to join the event</BXText>
              &thinsp;
              <BXText variant="emphasized">Design at Meta All Hands - Q1 2022</BXText>
              &thinsp;
              <BXText>(Mon, Feb 28th, 2022)</BXText>
            </p>
          </BXNotification>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Notification</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXMeetingMenuItem
            meetingName="Daily Standup"
            meetingRoom="MPK 250.19"
            meetingStartTime={subMinutes(new Date(), 5)}
            meetingEndTime={addMinutes(new Date(), 25)}
            participants={
              <BXAvatarGroup avatarSize="24" maxAvatars={4}>
                <BXAvatar src={person1} status="success" />
                <BXAvatar src={person2} status="default" />
                <BXAvatar src={person3} status="success" />
                <BXAvatar src={person4} status="success" />
                <BXAvatar src={person1} status="success" />
                <BXAvatar src={person1} status="success" />
                <BXAvatar src={person1} status="success" />
              </BXAvatarGroup>
            }
          />
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Notification Menu</div>
        <div {...stylex.props(styles.gridCell, styles.row)}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <BXAvatar src={person2} size="24" status="warning" />
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content side="bottom" sideOffset={5} {...stylex.props(styles.popover)}>
                <BXProfileMenu name="Tsz Kai Ho" profilePictureSrc={person2} />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
          <BXButtonGroup>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <BXButton variant="flat" startIcon={BellIcon} style={styles.iconButton} />
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content side="top" align="center" sideOffset={5} {...stylex.props(styles.popover)}>
                  <BXNotificationMenu>
                    <BXNotification avatar={<BXAvatar icon={RobotIcon} size="48" style={styles.avatar} />}>
                      <p>
                        <BXText variant="emphasized">Design Community</BXText>
                        &thinsp;
                        <BXText>invites you to join the event</BXText>
                        &thinsp;
                        <BXText variant="emphasized">Design at Meta All Hands - Q1 2022</BXText>
                        &thinsp;
                        <BXText>(Mon, Feb 28th, 2022)</BXText>
                      </p>
                    </BXNotification>
                    <BXNotification
                      avatar={
                        <HoverCard.Root>
                          <HoverCard.Trigger asChild>
                            <BXAvatar src={'http://localhost:8123/src/pages/profile.jpeg'} status="warning" size="48" />
                          </HoverCard.Trigger>
                          <HoverCard.Portal>
                            <HoverCard.Content sideOffset={5} {...stylex.props(styles.popover)}>
                              <BXEmployeeHoverCard
                                profilePictureSrc={person1}
                                status={'success'}
                                name="Daniele Geménez"
                                unixname="dgménez"
                                jobTitle="Product Designer on Instagram"
                                reportsTo="Bora Chan"
                                location="Menlo Park (Building 21.1Z8 - Metaway) (In Office)"
                                localTime="2:55 PM Pacific Time"
                              />
                            </HoverCard.Content>
                          </HoverCard.Portal>
                        </HoverCard.Root>
                      }
                    >
                      <p>
                        <BXText variant="emphasized">Alice Johnson</BXText>
                        &thinsp;
                        <BXText>invites you to join</BXText>
                        &thinsp;
                        <BXText variant="emphasized">Monthly Engineering Meetup</BXText>
                        &thinsp;
                        <BXText>(Tue, Mar 12th, 2022 at 6:00 PM)</BXText>
                      </p>
                    </BXNotification>
                    <BXNotification avatar={<BXAvatar src={person2} status="success" size="48" />}>
                      <p>
                        <BXText variant="emphasized">Robert Brown</BXText>
                        &thinsp;
                        <BXText>assigned you the task</BXText>
                        &thinsp;
                        <HoverCard.Root>
                          <HoverCard.Trigger asChild>
                            <BXLink href="www.google.com">
                              <BXText>T251642</BXText>
                            </BXLink>
                          </HoverCard.Trigger>
                          <HoverCard.Portal>
                            <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                              <BXTaskHoverCard
                                taskName="Implement a Select component"
                                taskNumber="2516422"
                                taskStatus="Closed"
                                taskPriority="Wish"
                                taskTags={['oncall-team-design-systems', 'figma']}
                                owner={
                                  <HoverCard.Root>
                                    <HoverCard.Trigger asChild>
                                      <span
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          gap: '4px',
                                          alignItems: 'center',
                                        }}
                                      >
                                        <BXAvatar src={person1} size="24" status="warning" />
                                        <BXLink href="www.google.com">
                                          <BXText>Daniele Geménez</BXText>
                                        </BXLink>
                                      </span>
                                    </HoverCard.Trigger>
                                    <HoverCard.Portal>
                                      <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                                        <BXEmployeeHoverCard
                                          profilePictureSrc={person1}
                                          status={'success'}
                                          name="Daniele Geménez"
                                          unixname="dgménez"
                                          jobTitle="Product Designer on Instagram"
                                          reportsTo="Bora Chan"
                                          location="Menlo Park (Building 21.1Z8 - Metaway) (In Office)"
                                          localTime="2:55 PM Pacific Time"
                                        />
                                      </HoverCard.Content>
                                    </HoverCard.Portal>
                                  </HoverCard.Root>
                                }
                              />
                            </HoverCard.Content>
                          </HoverCard.Portal>
                        </HoverCard.Root>
                        <BXText>: Implement a Select component</BXText>
                      </p>
                    </BXNotification>
                    <BXNotification avatar={<BXAvatar icon={RobotIcon} size="48" style={styles.avatar} />}>
                      <p>
                        <BXText variant="emphasized">Tech Guild</BXText>
                        &thinsp;
                        <BXText>invites you to join</BXText>
                        &thinsp;
                        <BXText variant="emphasized">Quarterly Innovation Workshop</BXText>
                        &thinsp;
                        <BXText>(Wed, Apr 5th, 2022 at 2:00 PM)</BXText>
                      </p>
                    </BXNotification>
                    <BXNotification avatar={<BXAvatar src={person2} status="success" size="48" />}>
                      <p>
                        <BXText variant="emphasized">Robert Brown</BXText>
                        &thinsp;
                        <BXText>invites you to join</BXText>
                        &thinsp;
                        <BXText variant="emphasized">Coffee Chat with the Design Team</BXText>
                        &thinsp;
                        <BXText>(Fri, Mar 18th, 2022 at 10:00 AM)</BXText>
                      </p>
                    </BXNotification>
                    <BXNotification avatar={<BXAvatar src={person4} status="success" size="48" />}>
                      <p>
                        <BXText variant="emphasized">Diana Miller</BXText>
                        &thinsp;
                        <BXText>accepted your diff</BXText>
                        &thinsp;
                        <HoverCard.Root>
                          <HoverCard.Trigger asChild>
                            <BXLink href="www.google.com">
                              <BXText>D123456</BXText>
                            </BXLink>
                          </HoverCard.Trigger>
                          <HoverCard.Portal>
                            <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                              <BXDiffHoverCard
                                diffStatus="Accepted"
                                diffNumber="123456"
                                diffTitle="Export styles for standard layouts"
                                commitedOn="July 15, 2024, 9:55 PM"
                                owner={
                                  <HoverCard.Root>
                                    <HoverCard.Trigger asChild>
                                      <span
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          gap: '4px',
                                          alignItems: 'center',
                                        }}
                                      >
                                        <BXAvatar src={person1} size="24" status="warning" />
                                        <BXLink href="www.google.com">
                                          <BXText>Daniele Geménez</BXText>
                                        </BXLink>
                                      </span>
                                    </HoverCard.Trigger>
                                    <HoverCard.Portal>
                                      <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
                                        <BXEmployeeHoverCard
                                          profilePictureSrc={person1}
                                          status={'success'}
                                          name="Daniele Geménez"
                                          unixname="dgménez"
                                          jobTitle="Product Designer on Instagram"
                                          reportsTo="Bora Chan"
                                          location="Menlo Park (Building 21.1Z8 - Metaway) (In Office)"
                                          localTime="2:55 PM Pacific Time"
                                        />
                                      </HoverCard.Content>
                                    </HoverCard.Portal>
                                  </HoverCard.Root>
                                }
                                commentCount={57}
                                significantLinesChanged={964}
                                affectedProjects={['BXDS', 'WWW']}
                              />
                            </HoverCard.Content>
                          </HoverCard.Portal>
                        </HoverCard.Root>
                        <BXText>: Export styles for standard layouts</BXText>
                      </p>
                    </BXNotification>
                    <BXNotification avatar={<BXAvatar src={person3} status="error" size="48" />}>
                      <p>
                        <BXText variant="emphasized">Charles Garcia</BXText>
                        &thinsp;
                        <BXText>invites you to join</BXText>
                        &thinsp;
                        <BXText variant="emphasized">Project Brainstorm Session</BXText>
                        &thinsp;
                        <BXText>(Mon, Mar 21st, 2022 at 1:00 PM)</BXText>
                      </p>
                    </BXNotification>
                    <BXNotification avatar={<BXAvatar src={person4} status="success" size="48" />}>
                      <p>
                        <BXText variant="emphasized">Diana Miller</BXText>
                        &thinsp;
                        <BXText>invites you to join</BXText>
                        &thinsp;
                        <BXText variant="emphasized">Virtual Game Night</BXText>
                        &thinsp;
                        <BXText>(Sat, Mar 26th, 2022 at 8:00 PM)</BXText>
                      </p>
                    </BXNotification>
                  </BXNotificationMenu>
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
            <HoverCard.Root>
              <HoverCard.Trigger asChild>
                <BXButton variant="flat" startIcon={CalendarIcon} style={styles.iconButton} />
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content side="bottom" sideOffset={5} {...stylex.props(styles.popover)}>
                  <BXMeetingMenu
                    inProgress={[
                      <BXMeetingMenuItem
                        key={0}
                        meetingName="Daily Standup"
                        meetingRoom="MPK 250.19"
                        meetingStartTime={subMinutes(new Date(), 5)}
                        meetingEndTime={addMinutes(new Date(), 25)}
                        participants={
                          <BXAvatarGroup avatarSize="24" maxAvatars={4}>
                            <BXAvatar src={person1} status="success" />
                            <BXAvatar src={person2} status="default" />
                            <BXAvatar src={person3} status="success" />
                            <BXAvatar src={person4} status="success" />
                            <BXAvatar src={person1} status="success" />
                            <BXAvatar src={person1} status="success" />
                            <BXAvatar src={person1} status="success" />
                          </BXAvatarGroup>
                        }
                      />,
                    ]}
                    upcoming={[
                      <BXMeetingMenuItem
                        key={0}
                        meetingName="Sprint Planning"
                        meetingRoom="MPK 101.02"
                        meetingStartTime={addMinutes(new Date(), 30)}
                        meetingEndTime={addMinutes(new Date(), 90)}
                        participants={
                          <BXAvatarGroup avatarSize="24" maxAvatars={4}>
                            <BXAvatar src={person2} status="success" />
                            <BXAvatar src={person3} status="success" />
                            <BXAvatar src={person4} status="default" />
                            <BXAvatar src={person1} status="success" />
                          </BXAvatarGroup>
                        }
                      />,
                      <BXMeetingMenuItem
                        key={1}
                        meetingName="Client Update"
                        meetingRoom="MPK 203.15"
                        meetingStartTime={addMinutes(new Date(), 100)}
                        meetingEndTime={addMinutes(new Date(), 160)}
                        participants={
                          <BXAvatarGroup avatarSize="24" maxAvatars={4}>
                            <BXAvatar src={person3} status="success" />
                            <BXAvatar src={person1} status="default" />
                            <BXAvatar src={person4} status="success" />
                          </BXAvatarGroup>
                        }
                      />,
                      <BXMeetingMenuItem
                        key={2}
                        meetingName="Team Retrospective"
                        meetingRoom="MPK 404.22"
                        meetingStartTime={addMinutes(new Date(), 200)}
                        meetingEndTime={addMinutes(new Date(), 260)}
                        participants={
                          <BXAvatarGroup avatarSize="24" maxAvatars={4}>
                            <BXAvatar src={person4} status="success" />
                            <BXAvatar src={person2} status="success" />
                            <BXAvatar src={person1} status="success" />
                            <BXAvatar src={person3} status="default" />
                            <BXAvatar src={person4} status="success" />
                          </BXAvatarGroup>
                        }
                      />,
                    ]}
                  />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
            <HoverCard.Root>
              <HoverCard.Trigger asChild>
                <BXButton variant="flat" startIcon={DotsNineIcon} style={styles.iconButton} />
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content side="bottom" sideOffset={5} {...stylex.props(styles.popover)}>
                  <BXToolsMenu />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          </BXButtonGroup>
        </div>
      </div>
      <div {...stylex.props(styles.twoColumnGrid)}>
        <div {...stylex.props(styles.gridCell)}>Toast</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXToast />
        </div>
        <div {...stylex.props(styles.gridCell)}>Error Toast</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXToast variant="error" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Success Toast</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXToast variant="success" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Warning Toast</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXToast variant="warning" />
        </div>
        <div {...stylex.props(styles.gridCell)}>Info Toast</div>
        <div {...stylex.props(styles.gridCell)}>
          <BXToast variant="info" />
        </div>
      </div>
    </div>
  );
};

const styles = stylex.create({
  iconButton: {
    padding: '4px',
  },
  avatar: {
    pointerEvents: 'none',
  },
  test: {
    width: '26px',
    overflow: 'visible',
  },
  grow: {
    flexGrow: 1,
  },
  footer: {
    height: '300px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: backgroundColors.surface,
  },
  card: {
    width: '200px',
    height: '200px',
  },
  fiveColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
  threeColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  iconGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
  },
  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 8fr',
  },
  sixColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
  elevenColumnGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr repeat(10, 1fr)',
  },
  fourColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  typographyGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr repeat(5, 1fr)',
  },
  gridCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    backgroundColor: backgroundColors.secondary,
    padding: '8px',
  },
  row: {
    flexDirection: 'row',
  },
  white: {
    backgroundColor: 'white',
    border: `1px dashed ${dividerColors.strong}`,
  },
  dark: {
    backgroundColor: '#152127',
  },
  spinner: {
    fill: persistentColors.accent,
  },
  darkSpinner: {
    fill: 'white',
  },
  wideSplitButton: {
    width: '200px',
    justifyContent: 'start',
  },
  glimmer: {
    width: '300px',
    height: '100px',
  },
  banner: {
    width: '600px',
  },
  bannerPlaceholder: {
    width: '100%',
    height: '200px',
  },
  popover: {
    zIndex: 100,
  },
});

export default TasksPage;
