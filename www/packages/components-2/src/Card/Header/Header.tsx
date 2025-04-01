import '../../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Flexbox from '../../Flexbox';
import Text from '../../Text';
import Heading from '../../Heading';
import { padding } from '../../tokens.stylex';
import Icon from '../../Icon';
import ButtonGroup from '../../ButtonGroup';

export interface Props {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  style?: stylex.StyleXStyles;
  buttons?: React.ReactNode[];
}

export interface RenderProps {
  iconProps: Partial<Icon.Props>;
}

const Header = React.forwardRef<HTMLDivElement, Props>(({ title, subtitle, icon, style, buttons, ...props }, ref) => {
  return (
    <Flexbox alignItems="center" direction="row" gap="XS" ref={ref} {...props} style={[styles.base, style]}>
      {typeof icon === 'function' ? icon({ iconProps: { size: 'L', variant: 'outline' } }) : icon}
      <Flexbox direction="column" justifyContent="center">
        <Heading as="h3">{title}</Heading>
        {subtitle && (
          <Text as="small" variant="subtle">
            {subtitle}
          </Text>
        )}
      </Flexbox>
      <div {...stylex.props(styles.grow)} />
      {buttons && <ButtonGroup>{buttons}</ButtonGroup>}
    </Flexbox>
  );
});

Header.displayName = 'Header';

export default Header;

export const styles = stylex.create({
  base: {
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    paddingTop: padding.S,
  },
  grow: {
    flexGrow: 1,
  },
});
