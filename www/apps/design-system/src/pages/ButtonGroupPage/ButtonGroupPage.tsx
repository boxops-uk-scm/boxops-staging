import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Button, ButtonGroup, Flexbox, Icon, SideNav } from '@boxops/components-2';
import React from 'react';
import { semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';

const Page: React.FC<EmptyEntryPointProps> = () => {
  const [isDownloading, setIsDownloading] = React.useState(false);

  const onClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example>
          <Example.Demo>
            <ButtonGroup>
              <Button
                startContent={({ iconProps }) => <Icon.PencilSimple {...iconProps} />}
                endContent={<Icon.CaretDown variant="solid" size="S" />}
                label="Edit"
              />
              <Button startContent={({ iconProps }) => <Icon.Copy {...iconProps} />} label="Duplicate" />
              <Button
                onClick={onClick}
                loading={isDownloading}
                startContent={({ iconProps }) => <Icon.Download {...iconProps} />}
                label="Download"
              />
            </ButtonGroup>
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
