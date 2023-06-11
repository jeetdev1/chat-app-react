import styled from "styled-components";

export const LeftContainerWrapper = styled.div`
  background-color: ${(props) =>
    props.theme.colors[props.theme.defaultTheme].primary};
  min-width: 70px;
  max-width: 70px;
`;
export const Avatar = styled.div`
  color: #ffffff;
`;
