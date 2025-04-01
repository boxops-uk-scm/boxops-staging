import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import { padding } from '../tokens.stylex';
import * as Tooltip from '@radix-ui/react-tooltip';
import BXTooltip from '../Tooltip';
import Text from '../Text';

export interface Props {
  clipboardValue: string;
  variant?: Button.Props['variant'];
  disabled?: Button.Props['disabled'];
  style?: stylex.StyleXStyles;
}

const CopyButton = React.forwardRef<HTMLButtonElement, Props & TooltipContentProps>(
  ({ clipboardValue, style, tooltip, tooltipAfterCopy, ...props }, ref) => {
    const copyToClipboard = React.useCallback(() => {
      navigator.clipboard.writeText(clipboardValue);
    }, [clipboardValue]);

    const triggerRef = React.useRef<HTMLButtonElement>(null);

    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger
            asChild
            ref={triggerRef}
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{ border: 'none', backgroundColor: 'transparent', width: 'fit-content' }}
          >
            <div>
              <Button
                ref={ref}
                style={[styles.base, style]}
                startContent={<Icon.Copy size="S" />}
                onClick={copyToClipboard}
                {...props}
              />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <CopyButtonTooltipContent tooltip={tooltip} tooltipAfterCopy={tooltipAfterCopy} />
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  },
);

CopyButton.displayName = 'CopyButton';

export default CopyButton;

export const styles = stylex.create({
  base: {
    borderRadius: '4px',
    padding: padding.XS,
  },
});

type TooltipContentProps = {
  tooltip?: React.ReactNode;
  tooltipAfterCopy?: React.ReactNode;
};

const CopyButtonTooltipContent = ({ tooltip, tooltipAfterCopy }: TooltipContentProps) => {
  const [content, setContent] = React.useState(tooltip ?? 'Copy to clipboard');

  return (
    <Tooltip.Content
      onPointerDownOutside={(e) => {
        e.preventDefault();
        setContent(tooltipAfterCopy ?? 'Copied!');
      }}
      side="right"
      sideOffset={5}
      {...stylex.props(BXTooltip.styles.base)}
    >
      <Text style={BXTooltip.styles.label}>{content}</Text>
    </Tooltip.Content>
  );
};
