import React from "react";

import LogoImage from "../../assets/logo.png";

import Menu from "../Menu";

import { Container, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={LogoImage} alt="" />
        <span>ADVOCACIA</span>
        <p>CONSULTORIA JURÍDICA E ADMINISTRATIVA</p>
      </Logo>
      <Menu />
    </Container>
  );
};

export default Header;
