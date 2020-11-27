import React from "react";

import ContactInfo from "../ContactInfo";
import ContactActions from "../ContactActions";

import { Container, Content } from "./styles";

const HeaderInfo: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContactInfo />
        <ContactActions />
      </Content>
    </Container>
  );
};

export default HeaderInfo;
