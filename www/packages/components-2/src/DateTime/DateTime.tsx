import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Flexbox from '../Flexbox';
import Text from '../Text';
import Icon from '../Icon';
import * as HoverCard from '@radix-ui/react-hover-card';
import Card from '../Card';
import { formatInTimeZone } from 'date-fns-tz';
import { vars } from './vars.stylex.js';
import MetadataList from '../MetadataList';
import CopyButton from '../CopyButton';

export interface Props {
  instant: Date;
  formatString?: string;
  style?: stylex.StyleXStyles;
}

const DEFAULT_FORMAT_STRING = 'EEE, MMM do yyyy, h:mm aa';
const DEFAULT_FORMAT_STRING_OFFSET = 'EEE, MMM do yyyy, h:mm aa (xx)';

const DateTime = React.forwardRef<HTMLDivElement, Props>(({ instant, formatString, style, ...props }, ref) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();

  formatString = formatString || (now.getTimezoneOffset() === 0 ? DEFAULT_FORMAT_STRING : DEFAULT_FORMAT_STRING_OFFSET);

  const europeLondon = formatInTimeZone(instant, 'Europe/London', DEFAULT_FORMAT_STRING);
  const usPacific = formatInTimeZone(instant, 'US/Pacific', DEFAULT_FORMAT_STRING);
  const usEastern = formatInTimeZone(instant, 'US/Eastern', DEFAULT_FORMAT_STRING);
  const iso8601 = instant.toISOString();

  return (
    <HoverCard.Root>
      <HoverCard.Trigger {...stylex.props(styles.trigger)}>
        <Flexbox ref={ref} gap="S" alignItems="center" style={[styles.base, style]} {...props}>
          <Icon.Clock size="S" />
          <Text style={styles.field}>{formatInTimeZone(instant, timezone, formatString)}</Text>
        </Flexbox>
      </HoverCard.Trigger>
      <HoverCard.Content side="top" sideOffset={8}>
        <Card>
          <MetadataList>
            <MetadataList.Label>Europe/London</MetadataList.Label>
            <Flexbox gap="XS" alignItems="center">
              <Text>{europeLondon}</Text>
              <CopyButton variant="flat" clipboardValue={europeLondon} />
            </Flexbox>
            <MetadataList.Label>US/Pacific</MetadataList.Label>
            <Flexbox gap="XS" alignItems="center">
              <Text>{usPacific}</Text>
              <CopyButton variant="flat" clipboardValue={usPacific} />
            </Flexbox>
            <MetadataList.Label>US/Eastern</MetadataList.Label>
            <Flexbox gap="XS" alignItems="center">
              <Text>{usEastern}</Text>
              <CopyButton variant="flat" clipboardValue={usEastern} />
            </Flexbox>
            <MetadataList.Label>Timestamp</MetadataList.Label>
            <Flexbox gap="XS" alignItems="center">
              <Text>{iso8601}</Text>
              <CopyButton variant="flat" clipboardValue={iso8601} tooltip="Copy timestamp to clipboard" />
            </Flexbox>
          </MetadataList>
        </Card>
      </HoverCard.Content>
    </HoverCard.Root>
  );
});

DateTime.displayName = 'DateTime';

export default DateTime;

export const styles = stylex.create({
  trigger: {
    ':hover': {
      [vars.textDecoration]: 'underline',
    },
  },
  field: {
    textDecoration: vars.textDecoration,
  },
  base: {
    cursor: 'pointer',
  },
  label: {
    fontWeight: '500',
  },
});
