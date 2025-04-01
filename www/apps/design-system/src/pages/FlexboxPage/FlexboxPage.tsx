import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Flexbox, Heading, SideNav, Text } from '@boxops/components-2';
import React from 'react';
import { gap, semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import Box from '../../components/Box/Box';
import PageTitle from '../../components/PageTitle';

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Flexbox direction="column">
          <Heading>justify-content</Heading>
          <Text as="small">
            Controls how items are spaced along the <Text as="i">main</Text> axis.
          </Text>
        </Flexbox>
        <div {...stylex.props(styles.examples)}>
          <Example caption="start">
            <Example.Demo style={styles.example} alignItems="start" justifyContent="start" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="center">
            <Example.Demo style={styles.example} alignItems="center" justifyContent="start" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="end">
            <Example.Demo style={styles.example} alignItems="end" justifyContent="start" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="baseline">
            <Example.Demo style={styles.example} alignItems="baseline" justifyContent="start" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="stretch">
            <Example.Demo style={styles.example} alignItems="stretch" justifyContent="start" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
        </div>
        <Flexbox direction="column">
          <Heading>align-items</Heading>
          <Text as="small">
            Controls how items are positioned on the <Text as="i">cross</Text> axis.
          </Text>
        </Flexbox>
        <div {...stylex.props(styles.examples)}>
          <Example caption="start">
            <Example.Demo style={styles.example} alignItems="start" justifyContent="start" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="center">
            <Example.Demo style={styles.example} alignItems="start" justifyContent="center" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="end">
            <Example.Demo style={styles.example} alignItems="start" justifyContent="end" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="spaceBetween">
            <Example.Demo style={styles.example} alignItems="start" justifyContent="spaceBetween" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="spaceEvenly">
            <Example.Demo style={styles.example} alignItems="start" justifyContent="spaceEvenly" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
            </Example.Demo>
          </Example>
          <Example caption="spaceAround">
            <Example.Demo style={styles.example} alignItems="start" justifyContent="spaceAround" gap="S">
              <Box size="S" />
              <Box size="M" />
              <Box size="M" />
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
  example: {
    minHeight: '100px',
  },
  examples: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: gap.M,
  },
});
