import React from "react";

import CardItem from "../CardItem";

import { Container } from "./styles";

const CardCarroussel: React.FC = () => {
  return (
    <Container>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Container>
  );
};

export default CardCarroussel;
