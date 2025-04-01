import * as Popover from '@radix-ui/react-popover';
import * as stylex from '@stylexjs/stylex';
import { Children, cloneElement, forwardRef, isValidElement, MouseEventHandler, ReactNode, useState } from 'react';

import { BXButton, BXButtonProps } from '../BXButton/BXButton';
import { BXButtonGroup } from '../BXButtonGroup';
import { BXCard } from '../BXCard/BXCard';
import { CaretDownIcon } from '../BXIcon';

type BXSplitButtonProps = BXUncontrolledSplitButtonProps & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const BXSplitButton = forwardRef<HTMLSpanElement, BXSplitButtonProps>(
  ({ open, onOpenChange, children, style, compact, variant, disabled, ...props }: BXSplitButtonProps, ref) => (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <Popover.Anchor asChild>
        <BXButtonGroup ref={ref}>
          <BXButton style={style} compact={compact} variant={variant} disabled={disabled} {...props} />
          <Popover.Trigger asChild>
            <BXButton compact={compact} variant={variant} disabled={disabled} endIcon={CaretDownIcon} />
          </Popover.Trigger>
        </BXButtonGroup>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          style={{ zIndex: 100 }}
          sideOffset={5}
          align="end"
          onFocusOutside={() => onOpenChange?.(false)}
        >
          <BXCard style={bxSplitButtonStyles.menu}>{children}</BXCard>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ),
);

BXSplitButton.displayName = 'BXSplitButton';

type BXUncontrolledSplitButtonProps = Omit<BXButtonProps, 'hasChevron'> & {
  children?: ReactNode;
  style?: stylex.StyleXStyles;
};

const BXUncontrolledSplitButton = forwardRef<HTMLSpanElement, BXSplitButtonProps>(
  ({ children, ...props }: BXSplitButtonProps, ref) => {
    const [open, setOpen] = useState(false);
    return (
      <BXSplitButton ref={ref} open={open} onOpenChange={setOpen} {...props}>
        {Children.map(children, (child) => {
          if (isValidElement<{ onClick: MouseEventHandler<HTMLButtonElement> }>(child)) {
            return cloneElement(child, {
              onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                setOpen(false);
                child.props.onClick?.(event);
              },
            });
          }

          return child;
        })}
      </BXSplitButton>
    );
  },
);

BXUncontrolledSplitButton.displayName = 'BXUncontrolledSplitButton';

const bxSplitButtonStyles = stylex.create({
  menu: {
    minWidth: 'var(--radix-popper-anchor-width)',
    width: 'fix-content',
    padding: '0px',
    gap: '2px',
  },
  menuItem: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

type BXSplitButtonMenuItemProps = Omit<BXButtonProps, 'variant' | 'style' | 'hasChevron' | 'compact'>;

const BXSplitButtonMenuItem = forwardRef<HTMLButtonElement, BXSplitButtonMenuItemProps>(
  ({ ...props }: BXSplitButtonMenuItemProps, ref) => (
    <BXButton ref={ref} variant="flat" style={bxSplitButtonStyles.menuItem} {...props} />
  ),
);

BXSplitButtonMenuItem.displayName = 'BXSplitButtonMenuItem';

export { BXSplitButton, BXUncontrolledSplitButton, BXSplitButtonMenuItem, bxSplitButtonStyles };
export type { BXSplitButtonProps, BXUncontrolledSplitButtonProps, BXSplitButtonMenuItemProps };
