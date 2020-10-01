export const color = {
  white: '#FFFFFF',
  whiteDarker: '#f7f7f7',
  dark: '#313131',
  darkGrey: '#9D9D9D',
  darkGrey2: '#C7C7C7',
  darkGrey3: '#747474',
  darkGrey4: '#434343',
  lightGrey: '#F5F5F5',
  lightGrey2: '#FAFAFA',
  lightGrey3: '#E3E3E3',
  red: '#F21F59',
  red2: '#F09A9A',
  orange: '#FFB779',
  orange2: '#EFAB00',
  apricot: '#FFB6B6',
  salmon: '#FFC1AF',
  pink: '#F46FFF',
  pink2: '#FFCED8',
  pink3: 'rgba(232, 110, 232, 0.84)',
  lavender: '#B597FA',
  blue: '#57EAE9',
  blue2: '#C6CCFD',
  blue3: '#03C3BD',
  blueLink: '#1890FF',
  blueLabel: '#9DE6E3',
  aquamarine: '#82E9E3',
  aquamarine2: '#2ACBBB',
  yellow: '#FFFF00',
  yellow2: '#FAD98D',
  yellow3: '#FFFA6A',
  brown: '#DBC6B7',
  green: '#CED5AC',
  green2: '#72f002',
  skyblue: '#C3DEE8',
  purple: '#D4C0F1',
  violet: '#D78CFC',
  transparent: 'transparent',
};

const fontWeight = {
  thin: 100,
  light: 300,
  regular: 400,
  semiBold: 500,
  bold: 600,
};

export type CustomColorType = keyof typeof color;

export type CustomFontWeightType = keyof typeof fontWeight;

const theme = {
  color,
  fontWeight,
};

export type Theme = typeof theme;
export default theme;
