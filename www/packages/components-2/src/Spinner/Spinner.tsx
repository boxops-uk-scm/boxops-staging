import './vars.stylex.ts';

import stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { ReactComponent as OnDarkMedia } from './on-dark-media.svg?react';
import { ReactComponent as OnLightMedia } from './on-light-media.svg?react';
import Icon from '../Icon';
import { semanticColor } from '../tokens.stylex';
import { vars } from './vars.stylex';

type Props = Omit<Icon.Props, 'variant'> & {
  variant?: 'on-light-media' | 'on-dark-media' | 'accent';
};

const Spinner = forwardRef<SVGSVGElement, Props>(
  ({ size = 'M', style, variant = 'on-light-media', ...props }: Props, ref) => {
    switch (variant) {
      case 'on-light-media':
      case 'accent':
        return (
          <OnLightMedia
            ref={ref}
            {...stylex.props(
              Icon.styles.base,
              Icon.variants.size[size],
              styles.base,
              variant === 'accent' && variants.accent,
              style,
            )}
            {...props}
          />
        );
      case 'on-dark-media':
        return (
          <OnDarkMedia
            ref={ref}
            {...stylex.props(Icon.styles.base, Icon.variants.size[size], styles.base, style)}
            {...props}
          />
        );
    }
  },
);

Spinner.displayName = 'Spinner';

export default Spinner;

export const styles = stylex.create({
  base: {
    fill: vars.fill,
  },
});

export const variants = stylex.create({
  accent: {
    [vars.fill]: semanticColor.accent,
  },
});
