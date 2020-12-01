import styled, { css } from "styled-components";

interface ContainerProps {
  isReverse: boolean;
  isFirstChild: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: ${(props) => (props.isFirstChild ? "0px" : "3rem")};

  background: #fff;

  border-radius: 1rem;

  display: flex;

  -webkit-box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);

  max-width: 1080px;

  > img {
    height: 18rem;
    width: 18rem;

    border-radius: 1rem 0 0 1rem;
  }

  ${(props) =>
    props.isReverse &&
    css`
      flex-direction: row-reverse;

      > img {
        border-radius: 0 1rem 1rem 0;
      }
    `}

  > div {
    padding: 2rem 3rem;
  }

  > div > strong {
    font-size: 1.8rem;
  }

  > div > p {
    text-align: justify;
    margin-top: 1rem;
    font-size: 1.1rem;
  }
`;
