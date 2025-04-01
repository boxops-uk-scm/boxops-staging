import '../colors.stylex.ts';
import '../BXButton/vars.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { forwardRef, ReactNode } from 'react';

import { bxButtonVars } from '../BXButton/vars.stylex';

interface BXButtonGroupProps {
  children: ReactNode;
  style?: stylex.StyleXStyles;
}

const BXButtonGroup = forwardRef<HTMLSpanElement, BXButtonGroupProps>(
  ({ children, style }: BXButtonGroupProps, ref) => {
    if (Array.isArray(children)) {
      switch (children.length) {
        case 0: {
          return <span ref={ref} {...stylex.props(bxButtonGroupStyles.base, style)} />;
        }
        case 1: {
          return (
            <span ref={ref} {...stylex.props(bxButtonGroupStyles.base, style)}>
              {children}
            </span>
          );
        }
        case 2: {
          const [start, end] = children;
          return (
            <span ref={ref} {...stylex.props(bxButtonGroupStyles.base, style)}>
              <div {...stylex.props(bxButtonGroupStyles.wrapper, bxButtonGroupStyles.start)} key={0}>
                {start}
              </div>
              <div {...stylex.props(bxButtonGroupStyles.wrapper, bxButtonGroupStyles.end)} key={1}>
                {end}
              </div>
            </span>
          );
        }
        default: {
          const start = children[0];
          const middle = children.slice(1, children.length - 1);
          const end = children[children.length - 1];
          return (
            <span ref={ref} {...stylex.props(bxButtonGroupStyles.base, style)}>
              <div {...stylex.props(bxButtonGroupStyles.wrapper, bxButtonGroupStyles.start)} key={0}>
                {start}
              </div>
              {middle.map((child, i) => (
                <div {...stylex.props(bxButtonGroupStyles.wrapper, bxButtonGroupStyles.middle)} key={i + 1}>
                  {child}
                </div>
              ))}
              <div {...stylex.props(bxButtonGroupStyles.wrapper, bxButtonGroupStyles.end)} key={children.length - 1}>
                {end}
              </div>
            </span>
          );
        }
      }
    }

    return <></>;
  },
);

BXButtonGroup.displayName = 'BXButtonGroup';

const bxButtonGroupStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2px',
  },
  wrapper: {
    display: 'contents',
  },
  start: {
    [bxButtonVars.borderTopRightRadius]: '0px',
    [bxButtonVars.borderBottomRightRadius]: '0px',
  },
  middle: {
    [bxButtonVars.borderTopRightRadius]: '0px',
    [bxButtonVars.borderBottomRightRadius]: '0px',
    [bxButtonVars.borderTopLeftRadius]: '0px',
    [bxButtonVars.borderBottomLeftRadius]: '0px',
  },
  end: {
    [bxButtonVars.borderTopLeftRadius]: '0px',
    [bxButtonVars.borderBottomLeftRadius]: '0px',
  },
});

export { BXButtonGroup, bxButtonGroupStyles };
export type { BXButtonGroupProps };
