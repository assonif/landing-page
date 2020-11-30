import React from "react";

import { Container } from "./styles";

import { Carousel } from "react-responsive-carousel";

import OfficeImage from "../../assets/office.png";

interface ImageCarrousselProps {
  isSticky: boolean;
}

const ImageCarroussel: React.FC<ImageCarrousselProps> = ({ isSticky }) => {
  return (
    <Container isSticky={isSticky}>
      <img src={OfficeImage} alt="office" />
    </Container>
  );
};

export default ImageCarroussel;
