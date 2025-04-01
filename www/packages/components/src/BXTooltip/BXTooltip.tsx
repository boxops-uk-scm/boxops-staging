import '../colors.stylex.ts';

import * as InternalTooltip from '@radix-ui/react-tooltip';
import stylex from '@stylexjs/stylex';

import { internalColors } from '../colors.stylex';

interface BXTooltipProps {
  label: string;
  children: React.ReactNode;
}

const BXTooltip = ({ label, children }: BXTooltipProps) => {
  return (
    <InternalTooltip.Provider>
      <InternalTooltip.Root>
        <InternalTooltip.Trigger asChild>{children}</InternalTooltip.Trigger>
        <InternalTooltip.Portal>
          <InternalTooltip.Content sideOffset={5} {...stylex.props(bxTooltipStyles.base)}>
            {label}
          </InternalTooltip.Content>
        </InternalTooltip.Portal>
      </InternalTooltip.Root>
    </InternalTooltip.Provider>
  );
};

const bxTooltipStyles = stylex.create({
  base: {
    width: 'fit-content',
    borderRadius: '12px',
    padding: '4px 8px',
    fontSize: '15px',
    lineHeight: '1',
    color: internalColors.tooltipText,
    backgroundColor: internalColors.tooltipBackground,
    userSelect: 'none',
    zIndex: 200,
  },
});

export { BXTooltip, bxTooltipStyles };
export type { BXTooltipProps };
