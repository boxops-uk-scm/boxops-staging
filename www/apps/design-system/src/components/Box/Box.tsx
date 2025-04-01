import { nonsemanticBackgroundColor, nonsemanticTextColor } from '@boxops/components-2/src/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

interface Props {
  size?: keyof typeof variants.size;
}

const Box = ({ size }: Props) => <div {...stylex.props(styles.base, size && variants.size[size])} />;

export default Box;

const styles = stylex.create({
  base: {
    backgroundColor: nonsemanticBackgroundColor.pink,
    borderColor: nonsemanticTextColor.pink,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
  },
});

const variants = {
  size: stylex.create({
    S: {
      minWidth: '32px',
      minHeight: '32px',
    },
    M: {
      minWidth: '48px',
      minHeight: '48px',
    },
    L: {
      minWidth: '64px',
      minHeight: '64px',
    },
  }),
};
