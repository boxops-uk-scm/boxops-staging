import '../colors.stylex.ts';

import * as Collapsible from '@radix-ui/react-collapsible';
import * as stylex from '@stylexjs/stylex';
import { FC, ReactNode, useCallback, useState } from 'react';

import { BXButton } from '../BXButton/BXButton';
import { BXCard } from '../BXCard/BXCard';
import { CheckCircleIcon, WarningIcon, XCircleIcon } from '../BXIcon';
import { BXIconProps } from '../BXIcon/BXIcon';
import CaretDownIcon from '../BXIcon/caret-down/CaretDownIcon';
import CaretUpIcon from '../BXIcon/caret-up/CaretUpIcon';
import InfoIcon from '../BXIcon/info/InfoIcon';
import XIcon from '../BXIcon/x/XIcon';
import { BXTextPair } from '../BXTextPair/BXTextPair';
import { persistentColors } from '../colors.stylex';

type BXBannerProps = BXUncontrolledBannerProps & {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  isDismissed: boolean;
  onDismiss: () => void;
};

const BXBanner = ({
  title,
  description,
  children,
  style,
  endContent,
  isOpen,
  onOpenChange,
  isDismissed,
  onDismiss,
  variant,
}: BXBannerProps) => {
  const toggleOpen = useCallback(() => {
    onOpenChange(!isOpen);
  }, [isOpen, onOpenChange]);

  if (isDismissed) return <></>;

  const StartIcon = getStartIcon(variant);

  return (
    <BXCard style={[bxBannerStyles.base, style]}>
      <Collapsible.Root open={isOpen} onOpenChange={toggleOpen}>
        <div {...stylex.props(bxBannerStyles.header, bxBannerVariants[variant], isOpen && bxBannerStyles.headerOpen)}>
          <StartIcon variant="solid" />
          <BXTextPair variant="h3" description={description}>
            {title}
          </BXTextPair>
          <span {...stylex.props(bxBannerStyles.spacer)} />
          {endContent}
          {children && (
            <Collapsible.Trigger asChild>
              <BXButton startIcon={isOpen ? CaretUpIcon : CaretDownIcon} variant="flat" compact />
            </Collapsible.Trigger>
          )}
          <BXButton startIcon={XIcon} variant="flat" compact onClick={onDismiss} />
        </div>
        <Collapsible.Content asChild>
          <div {...stylex.props(bxBannerStyles.content)}>{children}</div>
        </Collapsible.Content>
      </Collapsible.Root>
    </BXCard>
  );
};

function getStartIcon(variant: BXBannerVariant): FC<BXIconProps> {
  switch (variant) {
    case 'info':
      return InfoIcon;
    case 'warning':
      return WarningIcon;
    case 'error':
      return XCircleIcon;
    case 'success':
      return CheckCircleIcon;
    default:
      return InfoIcon;
  }
}

interface BXUncontrolledBannerProps {
  startIcon?: FC<BXIconProps>;
  children?: ReactNode;
  description?: string;
  endContent?: ReactNode;
  style?: stylex.StyleXStyles;
  title?: string;
  variant: BXBannerVariant;
}

const BXUncontrolledBanner = ({ ...props }: BXUncontrolledBannerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const dismiss = useCallback(() => {
    setIsDismissed(true);
  }, [isDismissed, setIsDismissed]);

  return <BXBanner {...props} isOpen={isOpen} onOpenChange={setIsOpen} isDismissed={isDismissed} onDismiss={dismiss} />;
};

const bxBannerStyles = stylex.create({
  content: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  spacer: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '12px',
    paddingRight: '12px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    gap: '8px',
  },
  headerOpen: {
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    paddingBottom: '8px',
  },
  base: {
    width: '100%',
    padding: '0px',
  },
});

type BXBannerVariant = keyof typeof bxBannerVariants;

const bxBannerVariants = stylex.create({
  info: {
    fill: persistentColors.accent,
    backgroundColor: persistentColors.accentDeemphasized,
  },
  warning: {
    fill: persistentColors.warning,
    backgroundColor: persistentColors.warningDeemphasized,
  },
  error: {
    fill: persistentColors.negative,
    backgroundColor: persistentColors.negativeDeemphasized,
  },
  success: {
    fill: persistentColors.positive,
    backgroundColor: persistentColors.positiveDeemphasized,
  },
});

export { BXBanner, BXUncontrolledBanner, bxBannerStyles, bxBannerVariants };
export type { BXBannerProps, BXUncontrolledBannerProps, BXBannerVariant };
