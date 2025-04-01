import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { forwardRef, ReactNode } from 'react';
import { textColor } from '../tokens.stylex';

export interface Props {
  href: string;
  children: ReactNode;
  style?: stylex.StyleXStyles;
}

const Link = forwardRef<HTMLAnchorElement, Props>(({ children, style, ...props }: Props, ref) => (
  <a ref={ref} {...stylex.props(styles.base, style)} {...props}>
    {children}
  </a>
));

Link.displayName = 'Link';

export default Link;

export const styles = stylex.create({
  base: {
    color: textColor.link,
    cursor: 'pointer',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.2em',
      textDecorationColor: 'currentcolor',
    },
  },
});
