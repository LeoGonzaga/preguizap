import React, { ChangeEvent, useCallback, useState } from "react";

import { API } from "../../API/URL";
import {
  Button,
  Container,
  Form,
  Phone,
  InputArea,
  Title,
  WhatsLogo,
  Wrapper,
} from "./styled";
import Logo from "../../assets/logo.png";

const Home: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(async () => {
    try {
      console.log(message);
      if (message.length == 10) {
        window.open(`${API.URL + phone}&text=${message}`);
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  }, [message, phone]);

  const handlePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPhone(event.target.value);
    },
    [phone]
  );

  const handleMessage = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.target.value);
    },
    [message]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <WhatsLogo src={Logo} alt="" />
          <Title>Preguizap</Title>
        </Wrapper>

        <Phone
          type="tel"
          mask="(99) 9 9999-9999"
          value={phone}
          onChange={(e) => handlePhone(e)}
        />

        <InputArea
          placeholder="Digite uma mensagem"
          onChange={(e) => handleMessage(e)}
        />
        <Button onClick={handleSubmit}>Enviar</Button>
      </Form>
    </Container>
  );
};

export default Home;
