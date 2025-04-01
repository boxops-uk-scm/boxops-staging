import '../../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Text from '../../Text';
import { textColor } from '../../tokens.stylex';
import Tooltip from '../../Tooltip';
import Icon from '../../Icon';
import Flexbox from '../../Flexbox';

export interface Props extends Text.Props {
  helpMessage?: React.ReactNode;
}

const Label = React.forwardRef<HTMLDivElement, Props>(({ style, children, helpMessage, ...props }, ref) => {
  return (
    <Flexbox alignItems="center" gap="S" ref={ref} style={style}>
      <Text ref={ref} {...props} style={styles.base}>
        {children}
      </Text>
      {helpMessage && (
        <Tooltip label={helpMessage}>
          <Icon.Info size="inline" variant="solid" style={styles.icon} />
        </Tooltip>
      )}
    </Flexbox>
  );
});

Label.displayName = 'Label';

export default Label;

export const styles = stylex.create({
  base: {
    color: `oklch(from ${textColor.subtle} l c h / 60%)`,
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  icon: {
    fill: `oklch(from ${textColor.subtle} l c h / 60%)`,
  },
});
