import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
  colors: {
    success: {
      '100': '#EBFCD8',
      '300': '#B0EF88',
      '500': '#5DCC39',
      '700': '#28921C',
      '900': '#0A610E',
    },
    danger: {
      '100': '#FFE7D9',
      '300': '#FFA48D',
      '500': '#FF4842',
      '700': '#B72136',
      '900': '#7A0C2E',
    },
    warning: {
      '100': '#FFF6CE',
      '300': '#FFDD6D',
      '500': '#FFB80C',
      '700': '#B77906',
      '900': '#7A4802',
    },
  },
  // We can set the font of our project

  // We can define an initial colorMode (I chose dark 🌙 as default )
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});
