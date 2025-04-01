import '@boxops/components-2/src/tokens.stylex.ts';

import { Text, Flexbox } from '@boxops/components-2';
import { dividerColor } from '@boxops/components-2/src/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Heading from '@boxops/components-2/src/Heading/Heading';

export type Props = Flexbox.Props & { title?: React.ReactNode; caption?: React.ReactNode };

const Example = ({ style, children, title, caption }: Props) => (
  <Flexbox direction="column" gap="XS" style={style}>
    {title && <Heading as="h2">{title}</Heading>}
    {children}
    <Flexbox justifyContent="center">
      {caption && (
        <Text>
          <Text as="i">{caption}</Text>
        </Text>
      )}
    </Flexbox>
  </Flexbox>
);

export default Example;

export const Demo = ({
  style,
  alignItems = 'center',
  justifyContent = 'spaceEvenly',
  children,
  ...props
}: Flexbox.Props) => (
  <Flexbox {...props} alignItems={alignItems} justifyContent={justifyContent} style={[styles.base, style]}>
    {children}
  </Flexbox>
);

export const styles = stylex.create({
  base: {
    height: '100%',
    backgroundImage: 'url(https://boxops-static.s3.eu-north-1.amazonaws.com/public/checkboard.svg)',
    backgroundSize: '64px',
    backgroundRepeat: 'false',
    borderColor: dividerColor.subtle,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '8px',
    padding: '12px',
  },
});
