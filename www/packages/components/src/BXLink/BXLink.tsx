import '../colors.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { Children, cloneElement, forwardRef, isValidElement, ReactNode } from 'react';

import { textColors } from '../colors.stylex';

interface BXLinkProps {
  href: string;
  children: ReactNode;
  style?: stylex.StyleXStyles;
}

const BXLink = forwardRef<HTMLAnchorElement, BXLinkProps>(({ children, style, ...props }: BXLinkProps, ref) => {
  return (
    <a ref={ref} {...stylex.props(bxLinkStyles.base, style)} {...props}>
      {Children.map(children, (child) => {
        if (isValidElement<{ style?: stylex.StyleXStyles }>(child)) {
          child = cloneElement(child, {
            style: [bxLinkStyles.base],
          });
        }

        return child;
      })}
    </a>
  );
});

BXLink.displayName = 'BXLink';

const bxLinkStyles = stylex.create({
  base: {
    color: textColors.link,
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.2em',
    },
  },
});

export { BXLink, bxLinkStyles };
export type { BXLinkProps };
