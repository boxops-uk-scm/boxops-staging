import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { DateTime, Flexbox, SideNav } from '@boxops/components-2';
import React from 'react';
import { semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';

const Page: React.FC<EmptyEntryPointProps> = () => {
  const morning = new Date();
  morning.setHours(8, 0, 0);

  const afternoon = new Date();
  afternoon.setHours(16, 0, 0);

  const now = new Date();

  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example title="Default" caption="EEE, MMM do yyyy, h:mm aa">
          <Example.Demo>
            <DateTime instant={now} />
          </Example.Demo>
        </Example>
        <Example title="12-hour time" caption="h:mm aa">
          <Example.Demo>
            <DateTime instant={morning} formatString="h:mm aa" />
            <DateTime instant={afternoon} formatString="h:mm aa" />
          </Example.Demo>
        </Example>
        <Example title="24-hour time" caption="HH:mm">
          <Example.Demo>
            <DateTime instant={morning} formatString="HH:mm" />
            <DateTime instant={afternoon} formatString="HH:mm" />
          </Example.Demo>
        </Example>
        <Example title="Date (long)" caption="dd/MM/yyyy">
          <Example.Demo>
            <DateTime instant={now} formatString="dd/MM/yyyy" />
          </Example.Demo>
        </Example>
        <Example title="US date (short)" caption="M/d/yy">
          <Example.Demo>
            <DateTime instant={now} formatString="M/d/yy" />
          </Example.Demo>
        </Example>
        <Example title="ISO Date" caption="yyyy-MM-dd">
          <Example.Demo>
            <DateTime instant={now} formatString="yyyy-MM-dd" />
          </Example.Demo>
        </Example>
        <Example title="ISO 8601 (local timezone)" caption="yyyy-MM-dd'T'HH:mm:ss">
          <Example.Demo>
            <DateTime instant={now} formatString="yyyy-MM-dd'T'HH:mm:ss" />
          </Example.Demo>
        </Example>
        <Example title="RFC 2822 (local timezone)" caption="EEE, d MMM yyyy HH:mm:ss">
          <Example.Demo>
            <DateTime instant={now} formatString="EEE, d MMM yyyy HH:mm:ss" />
          </Example.Demo>
        </Example>
        <div {...stylex.props(styles.footer)} />
      </Flexbox>
      <div />
    </div>
  );
};

export default Page;

const styles = stylex.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr 800px 1fr',
    minHeight: '100vh',
  },
  header: {
    paddingTop: '30px',
  },
  footer: {
    height: '200px',
  },
  brand: {
    color: semanticColor.accent,
  },
});
