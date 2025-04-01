import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Icon, Button, Flexbox, SideNav, Text, Badge } from '@boxops/components-2';
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
            <Flexbox direction="column" alignItems="center" gap="S">
              <Button label="Button" variant="default" />
              <Text>
                <Text as="small">Default</Text>
              </Text>
            </Flexbox>
            <Flexbox direction="column" alignItems="center" gap="S">
              <Button label="Button" variant="flat" />
              <Text>
                <Text as="small">Flat</Text>
              </Text>
            </Flexbox>
            <Flexbox direction="column" alignItems="center" gap="S">
              <Button label="Button" variant="primary" />
              <Text>
                <Text as="small">Primary</Text>
              </Text>
            </Flexbox>
            <Flexbox direction="column" alignItems="center" gap="S">
              <Button label="Button" variant="negative" />
              <Text>
                <Text as="small">Negative</Text>
              </Text>
            </Flexbox>
            <Flexbox direction="column" alignItems="center" gap="S">
              <Button label="Button" variant="positive" />
              <Text>
                <Text as="small">Positive</Text>
              </Text>
            </Flexbox>
          </Example.Demo>
        </Example>
        <Example title="Compact">
          <Example.Demo>
            <Button label="Button" compact variant="default" />
            <Button label="Button" compact variant="flat" />
            <Button label="Button" compact variant="primary" />
            <Button label="Button" compact variant="negative" />
            <Button label="Button" compact variant="positive" />
          </Example.Demo>
        </Example>
        <Example title="Disabled">
          <Example.Demo>
            <Button label="Button" disabled variant="default" />
            <Button label="Button" disabled variant="flat" />
            <Button label="Button" disabled variant="primary" />
            <Button label="Button" disabled variant="negative" />
            <Button label="Button" disabled variant="positive" />
          </Example.Demo>
        </Example>
        <Example title="Icon only">
          <Example.Demo>
            <Button startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />} variant="default" />
            <Button startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />} variant="flat" />
            <Button startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />} variant="primary" />
            <Button startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />} variant="negative" />
            <Button startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />} variant="positive" />
          </Example.Demo>
        </Example>
        <Example title="Icon only (compact)">
          <Example.Demo>
            <Button compact startContent={({ iconProps }) => <Icon.Copy {...iconProps} />} variant="default" />
            <Button compact startContent={({ iconProps }) => <Icon.Copy {...iconProps} />} variant="flat" />
            <Button compact startContent={({ iconProps }) => <Icon.Copy {...iconProps} />} variant="primary" />
            <Button compact startContent={({ iconProps }) => <Icon.Copy {...iconProps} />} variant="negative" />
            <Button compact startContent={({ iconProps }) => <Icon.Copy {...iconProps} />} variant="positive" />
          </Example.Demo>
        </Example>
        <Example title="Start content">
          <Example.Demo>
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="default"
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="flat"
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="primary"
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="negative"
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="positive"
            />
          </Example.Demo>
        </Example>
        <Example title="Start content (compact)">
          <Example.Demo>
            <Button
              compact
              startContent={({ iconProps }) => <Icon.Copy {...iconProps} />}
              label="Copy"
              variant="default"
            />
            <Button
              compact
              startContent={({ iconProps }) => <Icon.Copy {...iconProps} />}
              label="Button"
              variant="flat"
            />
            <Button
              compact
              startContent={({ iconProps }) => <Icon.Copy {...iconProps} />}
              label="Button"
              variant="primary"
            />
            <Button
              compact
              startContent={({ iconProps }) => <Icon.Copy {...iconProps} />}
              label="Button"
              variant="negative"
            />
            <Button
              compact
              startContent={({ iconProps }) => <Icon.Copy {...iconProps} />}
              label="Button"
              variant="positive"
            />
          </Example.Demo>
        </Example>
        <Example title="Icon end content">
          <Example.Demo>
            <Button
              endContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="default"
            />
            <Button
              endContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="flat"
            />
            <Button
              endContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="primary"
            />
            <Button
              endContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="negative"
            />
            <Button
              endContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              label="Button"
              variant="positive"
            />
          </Example.Demo>
        </Example>
        <Example title="Badge end content">
          <Example.Demo>
            <Button endContent={<Badge label="99" />} label="Button" variant="default" />
            <Button endContent={<Badge label="99" />} label="Button" variant="flat" />
            <Button endContent={<Badge label="99" />} label="Button" variant="primary" />
            <Button endContent={<Badge label="99" />} label="Button" variant="negative" />
            <Button endContent={<Badge label="99" />} label="Button" variant="positive" />
          </Example.Demo>
        </Example>
        <Example title="Loading">
          <Example.Demo>
            <Button loading label="Button" variant="default" />
            <Button loading label="Button" variant="flat" />
            <Button loading label="Button" variant="primary" />
            <Button loading label="Button" variant="negative" />
            <Button loading label="Button" variant="positive" />
          </Example.Demo>
        </Example>
        <Example title="Disabled (with content)">
          <Example.Demo>
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              endContent={<Badge label="99" />}
              label="Button"
              variant="default"
              disabled
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              endContent={<Badge label="99" />}
              label="Button"
              variant="flat"
              disabled
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              endContent={<Badge label="99" />}
              label="Button"
              variant="primary"
              disabled
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              endContent={<Badge label="99" />}
              label="Button"
              variant="negative"
              disabled
            />
            <Button
              startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
              endContent={<Badge label="99" />}
              label="Button"
              variant="positive"
              disabled
            />
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
