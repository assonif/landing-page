import styled, { css } from "styled-components";

interface ContainerProps {
  isSticky: boolean;
}

export const Anchor = styled.div`
  position: fixed;
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #12110f;
  display: flex;

  padding: 0 2rem;

  ${(props) =>
    props.isSticky &&
    css`
      height: 7rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    !props.isSticky &&
    css`
      height: 20rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`;

export const Logo = styled.div<ContainerProps>`
  ${(props) =>
    props.isSticky &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      img {
        width: 5rem;
      }

      span {
        margin-left: 1rem;
      }

      p {
        margin-left: 1rem;
      }
    `}

  ${(props) =>
    !props.isSticky &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-top: 0.4rem;

      margin-bottom: 2rem;

      img {
        width: 10rem;
      }

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    `}

  span {
    color: #dbdad8;
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    color: #dbdad8;
  }
`;
