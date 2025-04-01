import * as stylex from '@stylexjs/stylex';

export const BLUE_900 = '#042F97';
export const BLUE_650 = '#0064E0';
export const BLUE_600 = '#0171E3';
export const BLUE_550 = '#0082FB';

export const GRAY_1100 = '#0A1317';
export const GRAY_950 = '#25363F';
export const GRAY_700 = '#4E606F';
export const GRAY_650 = '#5D6C7B';
export const GRAY_600 = '#647685';
export const GRAY_550 = '#748695';
export const GRAY_350 = '#A4B0BC';
export const GRAY_200 = '#CCD3DB';
export const GRAY_150 = '#DDE2E8';
export const GRAY_100 = '#E6EBEF';

export const SHAMROCK_400 = '#24BB5E';

export const YELLOW_800 = '#753F07';
export const YELLOW_550 = '#B47700';
export const YELLOW_350 = '#E2A400';
export const YELLOW_300 = '#E9AF08';

export const ORANGE_900 = '#6B2203';
export const ORANGE_450 = '#F27902';

export const RED_900 = '#7B0210';
export const RED_600 = '#E3193B';

export const PINK_950 = '#650053';
export const PINK_600 = '#D123A1';
export const PINK_550 = '#E638B3';

export const PURPLE_950 = '#3E0697';
export const PURPLE_800 = '#5B08D8';
export const PURPLE_600 = '#7952FF';

export const TEAL_950 = '#083943';
export const TEAL_550 = '#0C9293';
export const TEAL_400 = '#0DB7AF';

export const CYAN_850 = '#014975';
export const CYAN_550 = '#028DC1';
export const CYAN_450 = '#03A7D7';

export const GREEN_900 = '#09441F';
export const GREEN_700 = '#076D29';
export const GREEN_600 = '#0D8626';
export const GREEN_550 = '#1EA920';
export const GREEN_500 = '#26A756';

export const nonsemanticBackgroundColors = stylex.defineVars({
  gray: 'rgba(10, 19, 23, 0.2)', // Gray 1100
  blue: 'rgba(1, 113, 227, 0.2)', // Blue 600
  green: 'rgba(36, 187, 94, 0.2)', // Shamrock 400
  yellow: 'rgba(226, 164, 0, 0.2)', // Yellow 350
  orange: 'rgba(242, 121, 2, 0.2)', // Orange 450
  red: 'rgba(227, 25, 59, 0.2)', // Red 600
  pink: 'rgba(230, 56, 179, 0.2)', // Pink 550
  purple: 'rgba(121, 82, 255, 0.2)', // Purple 600
  teal: 'rgba(13, 183, 175, 0.2)', // Teal 400
  cyan: 'rgba(3, 167, 215, 0.2)', // Cyan 450
});

export const nonsemanticTextColors = stylex.defineVars({
  gray: GRAY_1100,
  blue: BLUE_900,
  green: GREEN_900,
  yellow: YELLOW_800,
  orange: ORANGE_900,
  red: RED_900,
  pink: PINK_950,
  purple: PURPLE_950,
  teal: TEAL_950,
  cyan: CYAN_850,
});

export const persistentColors = stylex.defineVars({
  accent: BLUE_650,
  positive: GREEN_600,
  negative: RED_600,
  warning: YELLOW_300,
  info: PURPLE_800,
  accentDeemphasized: 'rgba(0, 130, 251, 0.2)', // Blue 550
  positiveDeemphasized: 'rgba(30, 169, 32, 0.2)', // Green 550
  negativeDeemphasized: 'rgba(227, 25, 59, 0.2)', // Red 600
  warningDeemphasized: 'rgba(226, 164, 0, 0.2)', // Yellow 350
  infoDeemphasized: 'rgba(121, 82, 255, 0.2)', // Purple 600
});

export const textColors = stylex.defineVars({
  primaryTextOnLightMedia: GRAY_1100,
  primaryTextOnDarkMedia: 'white',
  secondary: GRAY_700,
  link: BLUE_650,
});

export const backgroundColors = stylex.defineVars({
  surface: 'white',
  card: 'white',
  navbar: 'white',
  popover: 'white',
  secondary: 'rgba(0, 0, 0, 0.05)',
});

export const internalColors = stylex.defineVars({
  primaryButton: BLUE_650,
  secondaryButton: GRAY_100,
  inputFocusOutline: 'rgba(1, 113, 227, 0.3)', // Blue 600
  inputErrorOutline: 'rgba(227, 25, 59, 0.3)', // Red 600
  inputSuccessOutline: 'rgba(38, 167, 86, 0.3)', // Green 500
  inputWarningOutline: 'rgba(226, 164, 0, 0.3)', // Yellow 350
  inputHoverOutline: 'rgba(204, 211, 219, 0.3)', // Gray 200
  inputBackground: 'white',
  tooltipBackground: GRAY_950,
  tooltipText: GRAY_150,
  badgeBackground: GRAY_650,
});

export const dividerColors = stylex.defineVars({
  default: GRAY_200,
  strong: GRAY_600,
});

export const iconColors = stylex.defineVars({
  primaryOnLightMedia: GRAY_1100,
  primaryOnDarkMedia: 'white',
  secondary: GRAY_700,
  tertiary: GRAY_550,
  disabled: GRAY_350,
});

export const nonsemanticIconColors = stylex.defineVars({
  gray: GRAY_1100,
  blue: BLUE_650,
  green: GREEN_700,
  yellow: YELLOW_550,
  red: RED_600,
  pink: PINK_600,
  purple: PURPLE_600,
  teal: TEAL_550,
  cyan: CYAN_550,
});
