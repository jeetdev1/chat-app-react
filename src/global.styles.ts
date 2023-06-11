import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.colors[props.theme.defaultTheme].primary};
    margin: 0;
    padding: 0;
    font-family: Archivo, sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
  }
`;
