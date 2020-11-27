import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 20rem;

  background: #12110f;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 0.4rem;

  > img {
    width: 10rem;
  }

  > span {
    color: #dbdad8;
    font-weight: bold;
    font-size: 2rem;
  }

  > p {
    color: #dbdad8;
  }
`;
