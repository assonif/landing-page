import React from "react";

import House from "../../assets/house.jpg";

import { Container } from "./styles";

const CardItem: React.FC = () => {
  return (
    <Container>
      <img src={House} alt="" />
      <div>
        <strong>Direito do Consumidor </strong>
        <p>
          O Direito Empresarial é uma área do Direito Privado – que versa, em
          resumo, sobre as relações entre particulares, e cuida das atividades
          empresariais e do empresário
        </p>
        <a href="/">VER MAIS</a>
      </div>
    </Container>
  );
};

export default CardItem;
