import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyle } from "./global.styles";

const App = () => {
  const [colorScheme] = useState<"light" | "dark">("dark");
  return (
    <ThemeProvider theme={{ ...theme, defaultTheme: colorScheme }}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
