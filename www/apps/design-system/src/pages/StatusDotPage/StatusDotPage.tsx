import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Flexbox, SideNav, StatusDot } from '@boxops/components-2';
import React from 'react';
import { semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example title="Variants">
          <Example.Demo>
            <StatusDot />
            <StatusDot variant="info" />
            <StatusDot variant="success" />
            <StatusDot variant="warning" />
            <StatusDot variant="error" />
          </Example.Demo>
        </Example>
        <Example title="Sizes">
          <Example.Demo>
            <StatusDot variant="success" size="S" />
            <StatusDot variant="success" size="M" />
            <StatusDot variant="success" size="L" />
            <StatusDot variant="success" size="XL" />
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
