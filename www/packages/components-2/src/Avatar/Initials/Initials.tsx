import * as stylex from '@stylexjs/stylex';
import Flexbox from '../../Flexbox/Flexbox';
import Text from '../../Text/Text';
import { getHash, getVariant, Variant, variants } from '../variants';
import { vars } from '../vars.stylex';

export interface Props {
  initials: string;
  style?: stylex.StyleXStyles;
  variant?: Variant;
}

const Initials = ({ initials, variant, style }: Props) => {
  return (
    <Flexbox
      alignItems="center"
      justifyContent="center"
      style={[styles.base, variants[variant ?? getVariant(getHash(initials))], style]}
    >
      <Text style={styles.label}>{initials}</Text>
    </Flexbox>
  );
};

export default Initials;

export const styles = stylex.create({
  base: {
    backgroundColor: vars.backgroundColor,
    width: '100%',
    borderRadius: '50%',
  },
  label: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    userSelect: 'none',
  },
});
