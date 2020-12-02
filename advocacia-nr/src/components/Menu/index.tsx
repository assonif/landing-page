import React, { useEffect, useState } from "react";

import { Container, MenuItem } from "./styles";

interface MenuProps {
  position: number;
  setPosition: (value: number) => void;
}

const Menu: React.FC<MenuProps> = ({ position, setPosition }) => {
  const [menuData, setMenuData] = useState([
    { title: "HOME" },
    { title: "ÁREAS DE ATUAÇÃO" },
    { title: "SOBRE NÓS" },
    { title: "CONTATO" },
    { title: "LOCALIZAÇÃO" },
  ]);

  const handleClick = (index) => {
    console.log(index);
    switch (index) {
      case 1:
        window.scrollTo(0, 565);
        break;
      case 2:
        window.scrollTo(0, 1246);
        break;
      case 3:
        window.scrollTo(0, 2699);
        break;
      case 4:
        window.scrollTo(0, 3351);
        break;
      default:
        window.scrollTo(0, 0);
    }
  };

  return (
    <Container>
      {menuData.map((item, index) => {
        const selected = index === position ? true : false;

        return (
          <MenuItem selected={selected} onClick={() => handleClick(index)}>
            <span>{item.title}</span>
          </MenuItem>
        );
      })}
    </Container>
  );
};

export default Menu;
