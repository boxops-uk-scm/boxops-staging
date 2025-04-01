import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { ButtonGroup, Flexbox, SideNav, ToggleButton } from '@boxops/components-2';
import React, { useCallback } from 'react';
import { semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';
import Icon from '@boxops/components-2/src/Icon';
import { vars } from '@boxops/components-2/src/Button/vars.stylex';

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example>
          <Example.Demo>
            <ToggleButton.Uncontrolled
              startContent={({ iconProps }) => <Icon.Diff {...iconProps} />}
              label="Toggle Button"
            />
          </Example.Demo>
        </Example>
        <Example title="Flat">
          <Example.Demo>
            <ToggleButton.Uncontrolled
              variant="flat"
              startContent={({ iconProps }) => <Icon.Diff {...iconProps} />}
              label="Toggle Button"
            />
          </Example.Demo>
        </Example>
        <Example title="ButtonGroup">
          <Example.Demo>
            <SelectGroupDemo />
          </Example.Demo>
        </Example>
        <Example title="Disabled">
          <Example.Demo>
            <ToggleButton.Uncontrolled
              disabled
              startContent={({ iconProps }) => <Icon.Diff {...iconProps} />}
              label="Toggle Button"
            />
            <ToggleButton.Uncontrolled
              disabled
              variant="flat"
              startContent={({ iconProps }) => <Icon.Diff {...iconProps} />}
              label="Toggle Button"
            />
            <ToggleButton
              disabled
              isSelected
              startContent={({ iconProps }) => <Icon.Diff {...iconProps} />}
              label="Toggle Button"
            />
          </Example.Demo>
        </Example>
        <Example title="Favourite">
          <Example.Demo>
            <ToggleButton.Uncontrolled
              startContent={({ iconProps }) => <Icon.Star {...iconProps} />}
              // @ts-expect-error :is() is not a supported selector
              style={[ToggleButton.variants.default, styles.star]}
            />
            <ToggleButton.Uncontrolled
              startContent={({ iconProps }) => <Icon.Star {...iconProps} />}
              // @ts-expect-error :is() is not a supported selector
              style={[ToggleButton.variants.flat, styles.star]}
            />
          </Example.Demo>
        </Example>
        <Example title="Bookmark">
          <Example.Demo>
            <ToggleButton.Uncontrolled
              startContent={({ iconProps }) => <Icon.BookmarkSimple {...iconProps} />}
              style={[ToggleButton.variants.default]}
            />
            <ToggleButton.Uncontrolled
              startContent={({ iconProps }) => <Icon.BookmarkSimple {...iconProps} />}
              style={[ToggleButton.variants.flat]}
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

const SelectGroupDemoItem: React.FC<
  {
    index: number;
    selectedIndex: number;
    setSelectedIndex: (prev: number) => void;
  } & ToggleButton.Props
> = ({ index, selectedIndex, setSelectedIndex, ...props }) => {
  const onClick = React.useCallback(() => {
    setSelectedIndex(index);
  }, [setSelectedIndex]);

  return <ToggleButton isSelected={index === selectedIndex} onClick={onClick} {...props} />;
};

const SelectGroupDemo = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const leftAlign = useCallback(
    ({ iconProps }: { iconProps: Partial<Icon.Props> }) => (
      <Icon.TextAlignLeft {...iconProps} variant="outline" size="L" />
    ),
    [selectedIndex],
  );

  const centertAlign = useCallback(
    ({ iconProps }: { iconProps: Partial<Icon.Props> }) => (
      <Icon.TextAlignCenter {...iconProps} variant="outline" size="L" />
    ),
    [selectedIndex],
  );

  const rightAlign = useCallback(
    ({ iconProps }: { iconProps: Partial<Icon.Props> }) => (
      <Icon.TextAlignRight {...iconProps} variant="outline" size="L" />
    ),
    [selectedIndex],
  );

  return (
    <ButtonGroup>
      {[leftAlign, centertAlign, rightAlign].map((startContent, i) => {
        return (
          <SelectGroupDemoItem
            key={i}
            index={i}
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
            startContent={startContent}
          />
        );
      })}
    </ButtonGroup>
  );
};

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
  star: {
    ':is([data-selected="true"])': {
      [vars.color]: semanticColor.warning,
    },
  },
});
