import React from "react";

import { Container } from "./styles";

interface SectionTitleProps {
  title: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div />
    </Container>
  );
};

export default SectionTitle;
