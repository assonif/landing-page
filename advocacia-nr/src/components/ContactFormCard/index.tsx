import React from "react";

import { Container } from "./styles";

const ContactFormCard: React.FC = () => {
  return (
    <Container>
      <b>Fale Conosco:</b>
      <input type="text" placeholder="Nome*" />
      <input type="text" placeholder="Email*" />
      <input type="text" placeholder="Telefone*" />
      <textarea
        name=""
        cols={30}
        rows={10}
        placeholder="Digite sua mensagem*"
      ></textarea>

      <span>
        O formulário será lido e respondido por um de nossos especialistas.
      </span>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </Container>
  );
};

export default ContactFormCard;
