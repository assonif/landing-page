import React from "react";

import { Container, InfoItemContainer } from "./styles";

import { HiOutlineMail, HiPhone } from "react-icons/hi";

const InfoItem: React.FC = () => {
  return (
    <Container>
      <InfoItemContainer>
        <HiOutlineMail />
        <span>contato@advocacianr.com.br</span>
      </InfoItemContainer>
      <InfoItemContainer>
        <HiPhone />
        <span>contato@advocacianr.com.br</span>
      </InfoItemContainer>
    </Container>
  );
};

export default InfoItem;
