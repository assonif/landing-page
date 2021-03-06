import styled from "styled-components";
import colors from "../../styles/colors";

interface MenuItemProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 2rem;

  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.neutral_01};

    flex-direction: column;

    justify-content: space-around;

    z-index: 10;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  background: ${(props) => (props.selected ? "#d3a73c" : "none")};

  margin-left: 0.2rem;
  padding: 0 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  cursor: pointer;

  > span {
    color: #dbdad8;
  }

  &:first-child {
    margin-left: 0;
  }

  transition: all 0.3s;

  &:hover {
    > span {
      color: ${(props) => (!props.selected ? "#d3a73c" : "none")};
    }
  }

  @media (max-width: 767px) {
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;

    cursor: pointer;

    > span {
      color: #dbdad8;
    }
  }
`;
