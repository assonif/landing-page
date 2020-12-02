import styled, { css } from "styled-components";

interface ContainerProps {
  isSticky: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 1000vh;
  position: relative;
  background: #dbdad8;
  top: 787px;
  z-index: 1;

  border-radius: 64px 64px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 4rem 4rem 4rem;

  transition: all 0.2s;

  ${(props) =>
    props.isSticky &&
    css`
      top: 700px;
    `}
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
