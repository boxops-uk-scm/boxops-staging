import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Flexbox, Icon, Link, List, SideNav } from '@boxops/components-2';
import React, { useCallback } from 'react';
import { gap, semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import Item from '@boxops/components-2/src/List/Item';
import PageTitle from '../../components/PageTitle';

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <div {...stylex.props(styles.examples)}>
          <Example style={styles.spanRow} caption="Click on an item to select it.">
            <Example.Demo>
              <SelectGroupDemo />
            </Example.Demo>
          </Example>
          <Example title="Start content">
            <Example.Demo>
              <List style={styles.list}>
                <List.Item label="List Item" startContent={<Icon.UserCircle size="L" />} />
                <List.Item label="List Item" startContent={<Icon.UserCircle size="L" />} />
                <List.Item label="List Item" startContent={<Icon.UserCircle size="L" />} />
                <List.Item label="List Item" startContent={<Icon.UserCircle size="L" />} />
              </List>
            </Example.Demo>
          </Example>
          <Example title="Selected">
            <Example.Demo>
              <List style={styles.list}>
                <List.Item
                  label="List Item"
                  description="Description"
                  startContent={({ iconProps }) => <Icon.UserCircle {...iconProps} size="L" />}
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label="List Item"
                  description="Description"
                  startContent={({ iconProps }) => <Icon.UserCircle {...iconProps} size="L" />}
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  isSelected
                  label="List Item"
                  description="This item is selected"
                  startContent={({ iconProps }) => <Icon.UserCircle {...iconProps} size="L" />}
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label="List Item"
                  description="Description"
                  startContent={({ iconProps }) => <Icon.UserCircle {...iconProps} size="L" />}
                  endContent={<Icon.X size="S" />}
                />
              </List>
            </Example.Demo>
          </Example>
          <Example title="Label links">
            <Example.Demo>
              <List style={styles.list}>
                <List.Item
                  label={<Link href="https://www.google.com">List Item</Link>}
                  description="Description"
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label={<Link href="https://www.google.com">List Item</Link>}
                  description="Description"
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label={<Link href="https://www.google.com">List Item</Link>}
                  description="Description"
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label={<Link href="https://www.google.com">List Item</Link>}
                  description="Description"
                  endContent={<Icon.X size="S" />}
                />
              </List>
            </Example.Demo>
          </Example>
          <Example title="Description links">
            <Example.Demo>
              <List style={styles.list}>
                <List.Item
                  label="List Item"
                  description={<Link href="https://www.google.com">Description</Link>}
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label="List Item"
                  description={<Link href="https://www.google.com">Description</Link>}
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label="List Item"
                  description={<Link href="https://www.google.com">Description</Link>}
                  endContent={<Icon.X size="S" />}
                />
                <List.Item
                  label="List Item"
                  description={<Link href="https://www.google.com">Description</Link>}
                  endContent={<Icon.X size="S" />}
                />
              </List>
            </Example.Demo>
          </Example>
        </div>
        <div {...stylex.props(styles.footer)} />
      </Flexbox>
      <div />
    </div>
  );
};

const SelectGroupDemoItem: React.FC<{
  index: number;
  selectedIndex: number;
  setSelectedIndex: (prev: number) => void;
}> = ({ index, selectedIndex, setSelectedIndex }) => {
  const onClick = useCallback(() => {
    setSelectedIndex(index);
  }, [setSelectedIndex]);

  const finalStartContent = React.useCallback(
    ({ iconProps }: Item.RenderProps) => <Icon.UserCircle {...iconProps} size="L" />,
    [],
  );

  const finalEndContent = React.useCallback(
    ({ iconProps }: Item.RenderProps) => <Icon.X {...iconProps} size="S" />,
    [],
  );

  return (
    <List.Item
      key={index}
      onClick={onClick}
      isSelected={index === selectedIndex}
      label="List Item"
      description="Description"
      startContent={finalStartContent}
      endContent={finalEndContent}
    />
  );
};

const SelectGroupDemo = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <List style={styles.list}>
      {[0, 1, 2, 3].map((index) => {
        return (
          <SelectGroupDemoItem
            key={index}
            index={index}
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
          />
        );
      })}
    </List>
  );
};

export default Page;

const styles = stylex.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr 800px 1fr',
    minHeight: '100vh',
  },
  examples: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: gap.M,
  },
  spanRow: {
    gridColumn: '1 / -1',
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
  list: {
    width: '300px',
  },
});
