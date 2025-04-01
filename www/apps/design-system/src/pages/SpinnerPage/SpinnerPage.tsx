import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Flexbox, SideNav, Spinner } from '@boxops/components-2';
import React from 'react';
import { backgroundColor, gap, semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example>
          <Example.Demo>
            <Spinner variant="on-light-media" />
            <Spinner variant="on-dark-media" />
            <Spinner variant="accent" />
          </Example.Demo>
        </Example>
        <div {...stylex.props(styles.examples)}>
          <Example title="On light media">
            <Example.Demo style={styles.lightMedia}>
              <Spinner variant="on-light-media" />
            </Example.Demo>
          </Example>
          <Example title="On dark media">
            <Example.Demo style={styles.darkMedia}>
              <Spinner variant="on-dark-media" />
            </Example.Demo>
          </Example>
          <Example title="Accent (on light media)">
            <Example.Demo>
              <Spinner variant="accent" />
            </Example.Demo>
          </Example>
        </div>
        <div {...stylex.props(styles.footer)} />
      </Flexbox>
      <div />
    </div>
  );
};

export default Page;

export const styles = stylex.create({
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
  examples: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: gap.M,
  },
  lightMedia: {
    backgroundColor: backgroundColor.card,
    backgroundImage: null,
  },
  darkMedia: {
    backgroundColor: 'oklch(27.93% 0.025 232.09)',
    backgroundImage: null,
    borderWidth: '0px',
  },
});
