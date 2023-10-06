import React from "react";
import {
  Container,
  ContainerCircle,
  CircleStyle,
  ImageContainer,
  TextContainer,
  Title,
  Description,
  ContactButton,
} from "./styles";
import { ReactComponent as Circle } from "../../assets/img/Circle.svg";
import MarianaPhoto from "../../assets/img/MarianaPhoto.png";

function Home() {
  const handleContactButtonClick = () => {
    const phoneNumber = "31971514755";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <Container id="Home">
      <TextContainer>
        <Title>Olá, eu sou a Mariana</Title>
        <Description>
          desenvolvedora de software com foco em frontend mobile e web.
        </Description>
        <ContactButton onClick={handleContactButtonClick}>
          CONTATO
        </ContactButton>
      </TextContainer>
      <ContainerCircle>
        <ImageContainer>
          <img
            src={MarianaPhoto}
            alt="Mariana"
            style={{ height: "350px", zIndex: 2 }}
          />
        </ImageContainer>{" "}
        <CircleStyle>
          <Circle width="500" height="500" style={{ zIndex: 1 }} />
        </CircleStyle>
      </ContainerCircle>
    </Container>
  );
}

export default Home;
