import styled from "styled-components";

interface MenuItemProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 2rem;

  margin-top: 2rem;
`;

export const MenuItem = styled.div<MenuItemProps>`
  background: ${(props) => (props.selected ? "#d3a73c" : "none")};

  margin-left: 1rem;
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
`;
