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

  margin-left: 2rem;

  width: 28rem;

  > input {
    margin-top: 1rem;
    height: 2.5rem;

    border: solid 1px ${colors.neutral_03};

    border-radius: 0.4rem;

    padding-left: 0.5rem;
  }

  > input:last-child {
    margin-bottom: 1rem;
  }

  > input::placeholder {
    font-style: italic;
    opacity: 70%;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: row-reverse;

    > button {
      background-color: ${colors.primary_01};
      color: ${colors.neutral_01};
      font-size: 1.1rem;
      width: 8rem;
      height: 2.5rem;
      border-radius: 2rem;

      border: none;

      margin-top: 1rem;

      font-weight: bold;
    }
  }

  > textarea {
    border-radius: 0.4rem;

    height: 6rem;

    border: solid 1px ${colors.neutral_03};
    overflow: auto;
    outline: none;

    margin-top: 1rem;

    padding-left: 0.5rem;

    resize: none; /*remove the resize handle on the bottom right*/
  }

  > textarea::placeholder {
    font-style: italic;
    opacity: 70%;

    font-size: 1rem;

    margin-top: 0.5rem;
  }
`;
