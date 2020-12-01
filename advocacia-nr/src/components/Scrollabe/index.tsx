import React from "react";

import CardCarroussel from "../CardCarroussel";
import ContactFormCard from "../ContactFormCard";
import ContactInfoCard from "../ContactInfoCard";
import LawyerCard from "../LawyerCard";
import SectionTitle from "../SectionTitle";

import { Container, ContactContainer } from "./styles";

interface ScrollabeProps {
  isSticky: boolean;
}

const Scrollabe: React.FC<ScrollabeProps> = ({ isSticky }) => {
  return (
    <Container isSticky={isSticky}>
      <SectionTitle title="ÁREAS DE ATUAÇÃO" />
      <CardCarroussel />
      <SectionTitle title="SOBRE NÓS/A EMPRESA" />

      <LawyerCard isFirstChild isReverse={false} />
      <LawyerCard isReverse={true} />
      <LawyerCard isReverse={false} />
      <LawyerCard isReverse={true} />

      <SectionTitle title="ATENDIMENTO/CONTATO" />
      <ContactContainer>
        <ContactInfoCard />
        <ContactFormCard />
      </ContactContainer>
    </Container>
  );
};

export default Scrollabe;
