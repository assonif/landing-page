import React from "react";

import { Container, MenuItem } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuItem selected={false}>
        <span>HOME</span>
      </MenuItem>
      <MenuItem selected={true}>
        <span>ÁREAS DE ATUAÇÃO</span>
      </MenuItem>
      <MenuItem selected={false}>
        <span>SOBRE NÓS</span>
      </MenuItem>
      <MenuItem selected={false}>
        <span>CONTATO</span>
      </MenuItem>
      <MenuItem selected={false}>
        <span>LOCALIZAÇÃO</span>
      </MenuItem>
    </Container>
  );
};

export default Menu;
