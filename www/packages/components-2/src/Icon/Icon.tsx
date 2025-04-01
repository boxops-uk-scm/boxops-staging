import * as stylex from '@stylexjs/stylex';
import { FC, forwardRef, SVGProps } from 'react';

export interface Props {
  size?: keyof typeof variants.size;
  variant?: 'outline' | 'solid';
  style?: stylex.StyleXStyles;
}

interface InternalProps {
  outline: FC<SVGProps<SVGSVGElement>>;
  solid: FC<SVGProps<SVGSVGElement>>;
}

const Icon = forwardRef<HTMLDivElement, Props & InternalProps>(
  ({ variant = 'outline', size = 'M', style, outline: Outline, solid: Solid, ...props }, ref) => {
    switch (variant) {
      case 'outline':
        return (
          <div ref={ref} {...props}>
            <Outline {...stylex.props(styles.base, size && variants.size[size], style)} />
          </div>
        );
      case 'solid':
        return (
          <div ref={ref} {...props}>
            <Solid {...stylex.props(styles.base, size && variants.size[size], style)} />
          </div>
        );
    }
  },
);

Icon.displayName = 'Icon';

export default Icon;

export const styles = stylex.create({
  base: {
    fill: 'inherit',
    color: 'inherit',
  },
});

export type Size = keyof typeof variants.size;

export const variants = {
  size: stylex.create({
    inline: {
      width: '0.8em',
      height: '0.8em',
    },
    S: {
      width: '16px',
      height: '16px',
    },
    M: {
      width: '20px',
      height: '20px',
    },
    L: {
      width: '24px',
      height: '24px',
    },
    XL: {
      width: '32px',
      height: '32px',
    },
    XXL: {
      width: '48px',
      height: '48px',
    },
  }),
};
