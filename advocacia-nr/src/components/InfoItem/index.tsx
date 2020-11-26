import React from "react";

import { Container } from "./styles";

interface infoItemProps {
  icon: any;
  text: string;
}

const InfoItem: React.FC<infoItemProps> = ({ icon, text }) => {
  return (
    <Container>
      <img src={icon} alt="icon" />
      <span>{text}</span>
    </Container>
  );
};

export default InfoItem;
