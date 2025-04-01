import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Flexbox, SideNav, Text } from '@boxops/components-2';
import React from 'react';
import { gap, semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example title="Span (default)">
          <Example.Demo>
            <Text as="span">Lorem ipsum doler sit amet</Text>
          </Example.Demo>
        </Example>
        <Example title="Paragraph">
          <Example.Demo>
            <Text as="p">Lorem ipsum doler sit amet</Text>
          </Example.Demo>
        </Example>
        <Example title="Small">
          <Example.Demo>
            <Text as="small">Lorem ipsum doler sit amet</Text>
          </Example.Demo>
        </Example>
        <Example title="Strong/Bold">
          <Example.Demo>
            <Text as="b">Lorem ipsum doler sit amet</Text>
          </Example.Demo>
        </Example>
        <Example title="Emphasized/Italic">
          <Example.Demo>
            <Text as="i">Lorem ipsum doler sit amet</Text>
          </Example.Demo>
        </Example>
        <Example title="Underline">
          <Example.Demo>
            <Text as="u">Lorem ipsum doler sit amet</Text>
          </Example.Demo>
        </Example>
        <Example title="Strike-through">
          <Example.Demo>
            <Text as="s">Lorem ipsum doler sit amet</Text>
          </Example.Demo>
        </Example>
        <Example title="Code">
          <Example.Demo>
            <Text as="code">Lorem ipsum doler sit amet</Text>
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
  examples: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: gap.M,
  },
});
