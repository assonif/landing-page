import React from "react";

import HeaderInfo from "../../components/HeaderInfo";
import Header from "../../components/Header";
import ImageCarroussel from "../../components/ImageCarroussel";
import Scrollabe from "../../components/Scrollabe";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <ImageCarroussel />
      <Scrollabe />
    </>
  );
};

export default Main;
