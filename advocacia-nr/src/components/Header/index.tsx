import React from "react";

import LogoImage from "../../assets/logo.png";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={LogoImage} alt="" />
    </Container>
  );
};

export default Header;
