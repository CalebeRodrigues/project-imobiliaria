import { createGlobalStyle } from 'styled-components';

import background_img from '../assets/img/thais/background.png';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(${background_img});
    background-size: 100vw;
    color: ${({ theme }) => theme.colors.text_main};
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
`;
