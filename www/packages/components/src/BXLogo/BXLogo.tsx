import '../colors.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { FC, forwardRef } from 'react';

import { BXIconProps } from '../BXIcon';
import { internalColors, persistentColors } from '../colors.stylex';

interface BXLogoProps {
  icon: FC<BXIconProps>;
}

const BXLogo = forwardRef<HTMLDivElement, BXLogoProps>(({ icon: Icon }: BXLogoProps, ref) => {
  return (
    <div ref={ref} {...stylex.props(bxLogoStyles.base)}>
      <Icon variant="solid" />
    </div>
  );
});

BXLogo.displayName = 'BXLogo';

const bxLogoStyles = stylex.create({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    backgroundColor: persistentColors.accent,
    borderRadius: '50%',
    fill: 'white',
    ':hover': {
      fill: `color-mix(in srgb, black 5%, white 95%)`,
      backgroundColor: `color-mix(in srgb, black 5%, ${internalColors.primaryButton} 95%)`,
    },
  },
});

export type { BXLogoProps };
export { BXLogo, bxLogoStyles };
