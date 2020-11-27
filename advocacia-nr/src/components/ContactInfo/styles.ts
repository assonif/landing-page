import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;

  > svg {
    width: 1.6rem;
    height: 1.6rem;

    color: #dbdad8;

    margin-right: 0.5rem;
  }

  > span {
    color: #dbdad8;

    margin-right: 1rem;
  }
`;
