import React, { useState } from "react";

import HeaderInfo from "../../components/HeaderInfo";
import Header from "../../components/Header";
import ImageCarroussel from "../../components/ImageCarroussel";
import Scrollabe from "../../components/Scrollabe";

const Main: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <>
      <Header isSticky={isSticky} setIsSticky={setIsSticky} />
      <ImageCarroussel isSticky={isSticky} />
      <Scrollabe />
    </>
  );
};

export default Main;
