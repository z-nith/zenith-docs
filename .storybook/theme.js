import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  colorPrimary: '#3373FF',
  colorSecondary: '#3A3C43',

  // UI
  appBg: '#1F2229',
  appContentBg: '#0F1117',
  appBorderColor: 'rgba(255,255,255,0.2)',
  appBorderRadius: 20,

  // Typography
  fontBase: '"Anonymous Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgba(255,255,255,0.87)',
  textInverseColor: 'rgba(255,255,255,0.87)',

  // Toolbar default and active colors
  barTextColor: 'rgba(255,255,255,0.87)',
  barSelectedColor: 'rgba(255,255,255,0.87)',
  barBg: '#3A3C43',

  // Form colors
  inputBg: 'rgba(255,255,255,0.05)',
  inputBorder: 'rgba(255,255,255,0.4)',
  inputTextColor: 'rgba(255,255,255,0.87)',
  inputBorderRadius: 20,

  brandTitle: 'Zenith',
  brandUrl: 'https://github.com/Jmeza081/zenith-ui',
  brandImage: 'https://user-images.githubusercontent.com/16481834/70382660-0d8c3c00-1925-11ea-9419-191a47b207c3.png',
});
