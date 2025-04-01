import '../../tokens.stylex.ts';
import '../vars.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { vars } from '../vars.stylex.js';

const Dot = forwardRef<HTMLDivElement, object>((_, ref) => <div ref={ref} {...stylex.props(styles.base)} />);

Dot.displayName = 'Dot';

export default Dot;

export const styles = stylex.create({
  base: {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: [vars.fill],
  },
});
