import React, { useEffect, useRef, useState } from "react";

import HeaderInfo from "../../components/HeaderInfo";
import Header from "../../components/Header";
import ImageCarroussel from "../../components/ImageCarroussel";
import Scrollabe from "../../components/Scrollabe";

const Main: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < 565) {
      setPosition(0);
    } else if (window.scrollY < 1246) {
      setPosition(1);
    } else if (window.scrollY < 2699) {
      setPosition(2);
    } else if (window.scrollY < 3351) {
      setPosition(3);
    } else {
      setPosition(4);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        isSticky={isSticky}
        setIsSticky={setIsSticky}
        position={position}
        setPosition={setPosition}
      />
      <ImageCarroussel isSticky={isSticky} />
      <Scrollabe isSticky={isSticky} />
    </>
  );
};

export default Main;
