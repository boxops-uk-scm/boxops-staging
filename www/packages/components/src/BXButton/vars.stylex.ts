import stylex from '@stylexjs/stylex';

import { internalColors, persistentColors, textColors } from '../colors.stylex';


export const bxButtonVars = stylex.defineVars({
  color: textColors.primaryTextOnLightMedia,
  backgroundColors: internalColors.secondaryButton,
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  spinnerColor: persistentColors.accent,
});
