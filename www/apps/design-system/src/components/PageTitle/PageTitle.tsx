import { Flexbox, Heading, Text } from '@boxops/components-2';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { useMatch } from '@boxops/router';

export interface Props {
  style?: stylex.StyleXStyles;
}

const PageTitle = React.forwardRef<HTMLDivElement, Props>(({ style, ...props }, ref) => {
  const { title, description } = useMatch();

  return (
    <Flexbox ref={ref} direction="column" justifyContent="end" style={[styles.base, style]} {...props}>
      {title && (
        <Heading as="h1" isContent>
          {title}
        </Heading>
      )}
      {description && <Text>{description}</Text>}
    </Flexbox>
  );
});

PageTitle.displayName = 'PageTitle';

export default PageTitle;

export const styles = stylex.create({
  base: {
    paddingTop: '30px',
  },
});
