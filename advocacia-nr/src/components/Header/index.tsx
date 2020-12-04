import React, { useEffect, useRef, useState } from "react";

import LogoImage from "../../assets/logo.png";

import HeaderInfo from "../HeaderInfo";
import Menu from "../Menu";
import Burguer from "../Burguer";

import { Anchor, Container, Logo } from "./styles";

interface HeaderProps {
  isSticky: boolean;
  setIsSticky: (value: boolean) => void;
  position: number;
  setPosition: (value: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  isSticky,
  setIsSticky,
  position,
  setPosition,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);

  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 767);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Anchor>
      {!isMobile && <HeaderInfo />}

      <Container ref={ref} isSticky={isSticky}>
        <Logo isSticky={isSticky}>
          <img src={LogoImage} alt="" />
          <div>
            <span>ADVOCACIA</span>
            <p>CONSULTORIA JURÍDICA E ADMINISTRATIVA</p>
          </div>
        </Logo>
        {isMobile && <Burguer />}
        {!isMobile ||
          (wasClicked && (
            <Menu position={position} setPosition={setPosition} />
          ))}
      </Container>
    </Anchor>
  );
};

export default Header;
