import stylex from '@stylexjs/stylex';

import { internalColors, textColors } from '../colors.stylex';


export const bxBadgeVars = stylex.defineVars({
  color: textColors.primaryTextOnDarkMedia,
  backgroundColor: internalColors.badgeBackground,
});
