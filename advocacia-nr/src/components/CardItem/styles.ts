import styled from "styled-components";

export const Container = styled.div`
  width: 17rem;
  height: 29rem;

  margin-left: 2rem;

  border-radius: 1rem;

  background: white;

  -webkit-box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);

  > div {
    padding: 0.5rem 1rem;
  }

  > img {
    width: 17rem;
    height: 17rem;

    border-radius: 1rem 1rem 0 0;
  }
`;
