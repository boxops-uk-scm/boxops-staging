import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Badge, Flexbox, SideNav } from '@boxops/components-2';
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
        <Example title="Flat pill">
          <Example.Demo>
            <Badge label="Badge" color="gray" />
            <Badge label="Badge" color="blue" />
            <Badge label="Badge" color="green" />
            <Badge label="Badge" color="yellow" />
            <Badge label="Badge" color="orange" />
            <Badge label="Badge" color="red" />
            <Badge label="Badge" color="magenta" />
            <Badge label="Badge" color="purple" />
            <Badge label="Badge" color="teal" />
            <Badge label="Badge" color="cyan" />
          </Example.Demo>
        </Example>
        <Example title="Flat pill with dot">
          <Example.Demo>
            <Badge startContent={<Badge.Dot />} label="Badge" color="gray" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="blue" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="green" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="yellow" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="orange" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="red" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="magenta" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="purple" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="teal" />
            <Badge startContent={<Badge.Dot />} label="Badge" color="cyan" />
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
