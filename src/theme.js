import { css } from 'styled-components';

export default {
  text: {
    base: '#212121',
    white: '#FFFFFF',
    light: '#7E7E7E',
    medium: '#666666',
    hover: {
      base: '#636363',
      white: '#B2B2B2',
      light: '#585858',
    },
    active: {
      base: '#A6A6A6',
      white: '#666666',
      light: '#323232',
    },
  },
  bg: {
    base: '#FFFFFF',
    light: '#EEF3F7',
    medium: '#ECEFF2',
    gray: '#D3D3D3',
    dark: '#5E6061',
    hover: {
      base: '#D8D8D8',
      medium: '#C1CBD4',
    },
    active: {
      base: '#B2B2B2',
      medium: '#96A7B7',
    },
    default: '#F7FAFF',
  },
  color: {
    blue: {
      primary: '#0974D6',
      secondary: '#1E55B7',
      light: '#91B7FB',
      dark: '#15355F',
      hover: {
        dark: '#1F508F',
      },
      active: {
        dark: '#2A6BBF',
      },
      light_dark: '#1B3E6B',
    },
    yellow: {
      primary: '#F6BF56',
      light: '#FFD689',
      dark: '#C08F25',
      hover: {
        primary: '#dc940b',
        light: '#ffad13',
      },
      active: {
        primary: '#7e5506',
        light: '#9c6600',
      },
    },
    green: {
      primary: '#91C462',
      light: '#C4ECA0',
      dark: '#619334',
    },
    red: {
      primary: '#ED654C',
      light: '#FF9784',
      dark: '#B53422',
      hover: {
        dark: '#992C1C',
      },
      active: {
        dark: '#7E2417',
      },
    },
  },
  font: {
    primary: ['"Roboto", sans-serif'],
  },
  size: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    smDown: '575px',
    mdDown: '767px',
    lgDown: '991px',
    xlDown: '1199px',
  },
  css: {
    h1: css`
      font-weight: 300;
      line-height: 1.4;
      font-size: 2.75rem;
      letter-spacing: -0.03125rem;
    `,
    h2: css`
      font-weight: 400;
      line-height: 1.4;
      font-size: 2.25rem;
      letter-spacing: 0rem;
    `,
    h3: css`
      font-weight: 400;
      line-height: 1.4;
      font-size: 1.5rem;
      letter-spacing: 0.009375rem;
    `,
    h4: css`
      font-weight: 500;
      line-height: 1.4;
      font-size: 1.125rem;
      letter-spacing: 0.0625rem;
      text-transform: uppercase;
    `,
    h5: css`
      font-weight: 500;
      line-height: 1.4;
      font-size: 1.125rem;
      letter-spacing: 0.0625rem;
    `,
    p1: css`
      font-weight: 400;
      line-height: 1.5;
      font-size: 1rem;
      letter-spacing: 0.03125rem;
    `,
    p2: css`
      font-weight: 400;
      line-height: 1.15;
      font-size: 0.75rem;
      letter-spacing: 0.046875rem;
    `,
    caption: css`
      font-weight: 500;
      line-height: 1.15;
      font-size: 0.625rem;
      letter-spacing: 0.03125rem;
    `,
    overline: css`
      font-weight: 500;
      line-height: 1.15;
      font-size: 0.625rem;
      letter-spacing: 0.09375rem;
      text-transform: uppercase;
    `,
  },
};
