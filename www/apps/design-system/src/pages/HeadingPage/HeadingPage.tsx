import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Flexbox, Heading, SideNav } from '@boxops/components-2';
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
        <Example caption="Used for interface elements.">
          <Example.Demo>
            <Heading as="h1">H1</Heading>
            <Heading as="h2">H2</Heading>
            <Heading as="h3">H3</Heading>
            <Heading as="h4">H4</Heading>
          </Example.Demo>
        </Example>
        <Example title="Content" caption="Used within content, e.g. a blog post or article.">
          <Example.Demo>
            <Heading as="h1" isContent>
              Title
            </Heading>
            <Heading as="h2" isContent>
              Section heading
            </Heading>
            <Heading as="h3" isContent>
              Content heading
            </Heading>
            <Heading as="h4" isContent>
              Group heading
            </Heading>
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
