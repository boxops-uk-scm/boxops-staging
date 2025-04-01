import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Card, Flexbox, SideNav } from '@boxops/components-2';
import React from 'react';
import { semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import Slot from '../../components/Slot';
import Icon from '@boxops/components-2/src/Icon';
import Button from '@boxops/components-2/src/Button';
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
            <Card>
              <Slot style={styles.slot} />
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Header (title)">
          <Example.Demo>
            <Card>
              <Card.Header title="Card title" />
              <Slot style={styles.slot} />
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Header (subtitle)">
          <Example.Demo>
            <Card>
              <Card.Header title="Card header" subtitle="Support details" />
              <Slot style={styles.slot} />
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Header (icon)">
          <Example.Demo>
            <Card>
              <Card.Header
                title="Card header"
                subtitle="Support details"
                icon={({ iconProps }) => <Icon.Diff {...iconProps} />}
              />
              <Slot style={styles.slot} />
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Header (button group)">
          <Example.Demo>
            <Card>
              <Card.Header
                title="Card header"
                subtitle="Support details"
                icon={({ iconProps }) => <Icon.Diff {...iconProps} />}
                buttons={[
                  <Button key={0} startContent={<Icon.LinkSimple />} />,
                  <Button key={1} startContent={<Icon.Copy />} />,
                  <Button key={2} startContent={<Icon.PencilSimple />} />,
                  <Button key={3} startContent={<Icon.DotsThree />} />,
                ]}
              />
              <Slot style={styles.slot} />
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Footer (primary buttons)">
          <Example.Demo>
            <Card>
              <Card.Header
                title="Card header"
                subtitle="Support details"
                icon={({ iconProps }) => <Icon.Diff {...iconProps} />}
                buttons={[
                  <Button key={0} startContent={<Icon.LinkSimple />} />,
                  <Button key={1} startContent={<Icon.Copy />} />,
                  <Button key={2} startContent={<Icon.PencilSimple />} />,
                  <Button key={3} startContent={<Icon.DotsThree />} />,
                ]}
              />
              <Slot style={styles.slot} />
              <Card.Footer
                cancelButton={<Button label="Cancel" />}
                confirmButton={({ buttonProps }) => <Button {...buttonProps} label="Confirm" />}
              />
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Footer (start content)">
          <Example.Demo>
            <Card>
              <Card.Header
                title="Card header"
                subtitle="Support details"
                icon={({ iconProps }) => <Icon.Diff {...iconProps} />}
                buttons={[
                  <Button key={0} startContent={<Icon.LinkSimple />} />,
                  <Button key={1} startContent={<Icon.Copy />} />,
                  <Button key={2} startContent={<Icon.PencilSimple />} />,
                  <Button key={3} startContent={<Icon.DotsThree />} />,
                ]}
              />
              <Slot style={styles.slot} />
              <Card.Footer
                startContent={<Button label="Learn more" />}
                cancelButton={<Button label="Cancel" />}
                confirmButton={({ buttonProps }) => <Button {...buttonProps} label="Confirm" />}
              />
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Footer (full-width buttons)">
          <Example.Demo>
            <Card>
              <Card.Header
                title="Card header"
                subtitle="Support details"
                icon={({ iconProps }) => <Icon.Diff {...iconProps} />}
                buttons={[
                  <Button key={0} startContent={<Icon.LinkSimple />} />,
                  <Button key={1} startContent={<Icon.Copy />} />,
                  <Button key={2} startContent={<Icon.PencilSimple />} />,
                  <Button key={3} startContent={<Icon.DotsThree />} />,
                ]}
              />
              <Slot style={styles.slot} />
              <Card.Footer
                fullWidthButtons
                confirmButton={({ buttonProps }) => <Button {...buttonProps} label="Confirm" />}
              />
            </Card>
          </Example.Demo>
        </Example>
        <Example>
          <Example.Demo>
            <Card>
              <Card.Header
                title="Card header"
                subtitle="Support details"
                icon={({ iconProps }) => <Icon.Diff {...iconProps} />}
                buttons={[
                  <Button key={0} startContent={<Icon.LinkSimple />} />,
                  <Button key={1} startContent={<Icon.Copy />} />,
                  <Button key={2} startContent={<Icon.PencilSimple />} />,
                  <Button key={3} startContent={<Icon.DotsThree />} />,
                ]}
              />
              <Slot style={styles.slot} />
              <Card.Footer
                fullWidthButtons
                cancelButton={({ buttonProps }) => <Button {...buttonProps} label="Cancel" />}
                confirmButton={({ buttonProps }) => <Button {...buttonProps} label="Confirm" />}
              />
            </Card>
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
  slot: {
    minWidth: '600px',
    minHeight: '300px',
  },
});
