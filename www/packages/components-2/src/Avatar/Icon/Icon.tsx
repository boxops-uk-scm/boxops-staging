import * as stylex from '@stylexjs/stylex';
import Flexbox from '../../Flexbox/Flexbox';
import { getHash, getVariant, Variant, variants } from '../variants';
import type { Props as IconProps } from '../../Icon/Icon';
import { vars } from '../vars.stylex';

export interface Props {
  src: React.FC<IconProps>;
  style?: stylex.StyleXStyles;
  variant?: Variant;
}

const AvatarIcon = ({ variant, style, src: Src }: Props) => {
  return (
    <Flexbox
      alignItems="center"
      justifyContent="center"
      style={[styles.base, variants[variant ?? getVariant(getHash(Src.displayName))], style]}
    >
      <Src variant="solid" style={styles.icon} />
    </Flexbox>
  );
};

export default AvatarIcon;

export const styles = stylex.create({
  base: {
    backgroundColor: vars.backgroundColor,
    width: '100%',
    borderRadius: '50%',
  },
  icon: {
    width: vars.iconSize,
    height: vars.iconSize,
    fill: `oklch(from ${vars.backgroundColor} l c h / 100%)`,
  },
});
