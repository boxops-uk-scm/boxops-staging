import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Flexbox from '../Flexbox';
import { vars as buttonVars } from '../Button/vars.stylex';

export interface Props {
  children: React.ReactNode;
  style?: stylex.StyleXStyles;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, Props>(({ style, ...props }: Props, ref) => {
  if (Array.isArray(props.children)) {
    const children = React.Children.toArray(props.children);

    switch (children.length) {
      case 0: {
        return <Flexbox ref={ref} style={style} />;
      }
      case 1: {
        return (
          <Flexbox ref={ref} style={style}>
            {children}
          </Flexbox>
        );
      }
      case 2: {
        const [start, end] = children;
        return (
          <Flexbox gap="XXS" ref={ref} style={style}>
            <div {...stylex.props(styles.wrapper, styles.start)} key={0}>
              {start}
            </div>
            <div {...stylex.props(styles.wrapper, styles.end)} key={1}>
              {end}
            </div>
          </Flexbox>
        );
      }
      default: {
        const start = children[0];
        const middle = children.slice(1, children.length - 1);
        const end = children[children.length - 1];
        return (
          <Flexbox gap="XXS" ref={ref} style={style}>
            <div {...stylex.props(styles.wrapper, styles.start)} key={0}>
              {start}
            </div>
            {middle.map((child, i) => (
              <div {...stylex.props(styles.wrapper, styles.middle)} key={i + 1}>
                {child}
              </div>
            ))}
            <div {...stylex.props(styles.wrapper, styles.end)} key={children.length - 1}>
              {end}
            </div>
          </Flexbox>
        );
      }
    }
  }

  return (
    <Flexbox ref={ref} style={style}>
      {props.children}
    </Flexbox>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;

export const styles = stylex.create({
  wrapper: {
    display: 'contents',
  },
  start: {
    [buttonVars.borderRadiusRight]: '0px',
  },
  middle: {
    [buttonVars.borderRadiusRight]: '0px',
    [buttonVars.borderRadiusLeft]: '0px',
  },
  end: {
    [buttonVars.borderRadiusLeft]: '0px',
  },
});
