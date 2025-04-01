import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { backgroundColor, iconColor, semanticColor } from '../tokens.stylex';
import Flexbox from '../Flexbox';
import Text from '../Text';
import Icon from '../Icon';
import Heading from '../Heading';
import Spinner from '../Spinner';

export interface Props {
  status: Status;
  value: number;
  label?: React.ReactNode;
  style?: stylex.StyleXStyles;
}

export type Status = 'indeterminate' | 'in-progress' | 'paused' | 'error' | 'complete';

const Meter = React.forwardRef<HTMLDivElement, Props>(({ status, value, label, style, ...props }, ref) => {
  const percent = Math.round(100 * Math.max(0, Math.min(1, value)));
  const StatusIcon = getIcon(status);

  const containerProps: Partial<Flexbox.Props> = label
    ? {
        gap: 'XS',
        direction: 'column',
      }
    : {
        gap: 'S',
        direction: 'row',
        alignItems: 'center',
      };

  return (
    <Flexbox style={[styles.base]} {...containerProps}>
      <div
        ref={ref}
        {...props}
        {...stylex.props(styles.background, status === 'indeterminate' && styles.indeterminate, style)}
      >
        <div {...stylex.props(styles.bar(percent), status !== 'indeterminate' && barVariants[status])} />
      </div>
      <Flexbox alignItems="center" gap="S">
        {StatusIcon}
        {status !== 'indeterminate' && <Heading as="h4">{percent}%</Heading>}
        {label && (
          <>
            {status !== 'indeterminate' && <Text style={styles.label}>-</Text>}
            <Text as="small" variant="subtle" style={styles.label}>
              {label}
            </Text>
          </>
        )}
      </Flexbox>
    </Flexbox>
  );
});

function getIcon(status: Status): React.ReactNode | undefined {
  switch (status) {
    case 'error':
      return <Icon.Warning size="S" variant="solid" style={iconVariants[status]} />;
    case 'complete':
      return <Icon.CheckCircle size="S" variant="solid" style={iconVariants[status]} />;
    case 'paused':
      return <Icon.PauseCircle size="S" variant="solid" style={iconVariants[status]} />;
    case 'in-progress':
      return <Spinner size="S" variant="accent" />;
    default:
      return undefined;
  }
}

Meter.displayName = 'Meter';

export default Meter;

const indeterminate = stylex.keyframes({
  from: {
    left: '-30%',
    right: '110%',
  },
  to: {
    left: '110%',
    right: '-30%',
  },
});

export const styles = stylex.create({
  base: {
    width: '100%',
  },
  background: {
    position: 'relative',
    height: '8px',
    borderRadius: '4px',
    flexGrow: 1,
    backgroundColor: backgroundColor.overlay,
  },
  indeterminate: {
    overflow: 'hidden',
    '::after': {
      height: '8px',
      borderRadius: '4px',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: semanticColor.accent,
      animation: `${indeterminate} 3s infinite`,
    },
  },
  bar: (percent: number) => ({
    width: `${percent}%`,
    height: '8px',
    borderRadius: '4px',
  }),
  label: {
    lineHeight: '20px',
  },
});

export const barVariants = stylex.create({
  'in-progress': {
    backgroundColor: semanticColor.accent,
  },
  paused: {
    backgroundColor: iconColor.secondary,
    fill: iconColor.secondary,
  },
  error: {
    backgroundColor: semanticColor.negative,
    fill: semanticColor.negative,
  },
  complete: {
    backgroundColor: semanticColor.positive,
    fill: semanticColor.positive,
  },
});

export const iconVariants = stylex.create({
  indeterminate: {},
  'in-progress': {},
  paused: {
    fill: iconColor.secondary,
  },
  error: {
    fill: semanticColor.negative,
  },
  complete: {
    fill: semanticColor.positive,
  },
});
