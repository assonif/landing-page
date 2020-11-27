import React from "react";

import { Container } from "./styles";

import OfficeImage from "../../assets/office.png";

const ImageCarroussel: React.FC = () => {
  return (
    <Container>
      <img src={OfficeImage} alt="office" />
    </Container>
  );
};

export default ImageCarroussel;
