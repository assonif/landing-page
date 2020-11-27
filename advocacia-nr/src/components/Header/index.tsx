import React, { useEffect, useRef, useState } from "react";

import LogoImage from "../../assets/logo.png";

import HeaderInfo from "../HeaderInfo";
import Menu from "../Menu";

import { Anchor, Container, Logo } from "./styles";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) setIsSticky(window.scrollY > 50);

    console.log("SCROLLLL");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Anchor>
      <HeaderInfo />
      <Container ref={ref} isSticky={isSticky}>
        <Logo isSticky={isSticky}>
          <img src={LogoImage} alt="" />
          <div>
            <span>ADVOCACIA</span>
            <p>CONSULTORIA JURÍDICA E ADMINISTRATIVA</p>
          </div>
        </Logo>
        <Menu />
      </Container>
    </Anchor>
  );
};

export default Header;
