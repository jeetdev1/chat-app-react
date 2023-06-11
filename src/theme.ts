interface ThemeInterface {
  colors: {
    light: {
      primary: string;
      secondary: string;
      font: {
        primary: string;
        secondary: string;
      };
    };
    dark: {
      primary: string;
      secondary: string;
      font: {
        primary: string;
        secondary: string;
      };
    };
  };
  font: {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    light: {
      primary: "#ffffff",
      secondary: "#b1b1b1",
      font: {
        primary: "#000000",
        secondary: "#000000",
      },
    },
    dark: {
      primary: "#131313",
      secondary: "#2e333d",
      font: {
        primary: "#ffffff",
        secondary: "#ffffff",
      },
    },
  },
  font: {
    fontFamily: "string",
    fontSize: "string",
    fontWeight: "string",
  },
};

export default theme;
