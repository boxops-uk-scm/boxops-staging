import '../../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Flexbox from '../../Flexbox';
import Button from '../../Button';

export interface Props {
  style?: stylex.StyleXStyles;
  confirmButton?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  cancelButton?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  startContent?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  fullWidthButtons?: boolean;
}

export interface RenderProps {
  buttonProps: Partial<Button.Props>;
}

const Footer = React.forwardRef<HTMLDivElement, Props>(
  ({ confirmButton, cancelButton, startContent, fullWidthButtons, style, ...props }, ref) => {
    const defaultButtonProps: Partial<Button.Props> = {
      compact: false,
      style: fullWidthButtons && styles.grow,
    };

    const primaryButtonProps: Partial<Button.Props> = {
      ...defaultButtonProps,
      variant: 'primary',
    };

    console.log(cancelButton !== undefined);

    return (
      <Flexbox direction="row" gap="XS" justifyContent="end" ref={ref} {...props} style={[styles.base, style]}>
        {startContent && (
          <>
            {typeof startContent === 'function' ? startContent({ buttonProps: defaultButtonProps }) : startContent}
            {!fullWidthButtons && <div {...stylex.props(styles.grow)} />}
          </>
        )}
        {cancelButton &&
          (typeof cancelButton === 'function' ? cancelButton({ buttonProps: defaultButtonProps }) : cancelButton)}
        {confirmButton &&
          (typeof confirmButton === 'function' ? confirmButton({ buttonProps: primaryButtonProps }) : confirmButton)}
      </Flexbox>
    );
  },
);

Footer.displayName = 'Footer';

export default Footer;

export const styles = stylex.create({
  base: {
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  },
  grow: {
    flexGrow: 1,
  },
});
