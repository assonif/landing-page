import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: white;

  padding: 2rem;
  border-radius: 1rem;

  -webkit-box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);

  line-height: 1.7rem;

  width: 28rem;

  > div {
    margin: 1rem 0;
    width: 100%;
    height: 1px;

    background: ${colors.neutral_01};
  }

  #logo-container {
    display: flex;
    justify-content: center;

    background: none;
    margin: 0;

    > img {
      margin-top: 1rem;
      width: 4rem;
      height: 4rem;
    }
  }
`;
