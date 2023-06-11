import React from "react";
import {LayoutWrapper} from "./Layout.styles";
import LeftContainer from "../LeftContainer/LeftContainer";
import MiddleContainer from "../MiddleContainer/MiddleContainer";

const Layout = () => {
  return (
    <LayoutWrapper>
      <LeftContainer/>
      <MiddleContainer/>
    </LayoutWrapper>
  );
};

export default Layout;
