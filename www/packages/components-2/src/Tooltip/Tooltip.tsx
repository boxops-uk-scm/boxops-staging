import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { backgroundColor, textColor } from '../tokens.stylex';
import * as InternalTooltip from '@radix-ui/react-tooltip';
import Text from '../Text';

export interface Props {
  style?: stylex.StyleXStyles;
  label: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ label, children, style }) => (
  <InternalTooltip.Provider>
    <InternalTooltip.Root>
      <InternalTooltip.Trigger asChild>{children}</InternalTooltip.Trigger>
      <InternalTooltip.Portal>
        <InternalTooltip.Content sideOffset={5} {...stylex.props(styles.base, style)}>
          <Text style={styles.label}>{label}</Text>
        </InternalTooltip.Content>
      </InternalTooltip.Portal>
    </InternalTooltip.Root>
  </InternalTooltip.Provider>
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;

export const styles = stylex.create({
  base: {
    width: 'fit-content',
    borderRadius: '12px',
    padding: '4px 8px',
    backgroundColor: backgroundColor.tooltip,
    userSelect: 'none',
    zIndex: 200,
  },
  label: {
    fontSize: '15px',
    lineHeight: '1',
    color: textColor.tooltip,
  },
});
