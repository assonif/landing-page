import React from "react";

import InfoItem from "../InfoItem";

import { HiOutlineMail, HiPhone } from "react-icons/hi";

import {
  Container,
  Content,
  InfoItemContainer,
  ContactInfo,
  ContactActions,
} from "./styles";

const HeaderInfo: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContactInfo>
          <InfoItemContainer>
            <HiOutlineMail />
            <span>contato@advocacianr.com.br</span>
          </InfoItemContainer>
          <InfoItemContainer>
            <HiPhone />
            <span>contato@advocacianr.com.br</span>
          </InfoItemContainer>
        </ContactInfo>
        <ContactActions>
          <div>
            <HiPhone />
          </div>
          <div>
            <HiOutlineMail />
          </div>
        </ContactActions>
      </Content>
    </Container>
  );
};

export default HeaderInfo;
