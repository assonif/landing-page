import styled from "styled-components";
import color from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3rem 0;

  > div {
    margin-top: 0.6rem;
    width: 100px;
    height: 5px;
    background: ${color.primary_02};
  }
`;
