import styled, { css } from "styled-components";

interface ContainerProps {
  isSticky: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  z-index: auto;
  img {
    width: 100%;
  }

  ${(props) =>
    props.isSticky &&
    css`
      position: fixed;
      top: 144px;
    `}

  ${(props) =>
    !props.isSticky &&
    css`
      position: relative;
      top: 352px;
    `}
`;
