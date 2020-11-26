import styled from "styled-components";

export const Container = styled.div`
  height: 2rem;
  width: 100vw;
  background: #12110f;

  border-bottom: 2px #dbdad8 solid;

  padding: 0 1rem;
`;
export const Content = styled.div`
  width: 95%;
  height: 100%;
  max-width: 1260px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ContactInfo = styled.div`
  display: flex;
`;
export const ContactActions = styled.div`
  display: flex;

  > div {
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 50%;

    background: #dbdad8;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0.7rem;
  }
`;
