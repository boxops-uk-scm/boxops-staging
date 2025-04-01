import { PageRoute, usePrefetchLinkHandlers } from '@boxops/router';
import '../../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Flexbox from '../../Flexbox';
import Heading from '../../Heading';
import Link from '../../Link';
import Text from '../../Text';

export interface Props {
  pageRoute: PageRoute;
}

const Item = React.forwardRef<HTMLDivElement, Props>(({ pageRoute: { title, path, description }, ...props }, ref) => {
  const [onMouseEnter, onClick] = usePrefetchLinkHandlers(path!);

  return (
    <Flexbox ref={ref} style={styles.base} direction="column" {...props}>
      <Heading as="h4" onClick={onClick} onMouseEnter={onMouseEnter} style={Link.styles.base}>
        {title}
      </Heading>
      {description && (
        <Text as="small" variant="subtle">
          {description}
        </Text>
      )}
    </Flexbox>
  );
});

Item.displayName = 'Sitemap.Item';

export default Item;

export const styles = stylex.create({
  base: {
    width: '250px',
  },
});
