import React from "react";

import Logo from "../../assets/logo.png";

import { Container } from "./styles";

const ContactInfoCard: React.FC = () => {
  return (
    <Container>
      <b>Escritório:</b>
      <span>Rua Jose Maria De Azevedo e Souza, 297</span>
      <span>Centro, Lavras - MG</span>

      <div />

      <b>Horário de Funcionamento:</b>
      <span>Segunda a Sexta das 09:00 às 18:00</span>

      <div />

      <b>Converse com um Especialista.</b>
      <span>Tel. 11 3389-3637 / 3389-3636</span>
      <span>WhatsApp: 11 99919-2083</span>

      <span id="logo-container">
        <img src={Logo} alt="logo" />
      </span>
    </Container>
  );
};

export default ContactInfoCard;
