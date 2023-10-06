import React from "react";
import {
  Container,
  ImageContainer,
  Caption,
  Title,
  ContainerImages,
} from "./styles";
import ClickCard from "../../assets/img/ClickCard.png";
import CincoMinutes from "../../assets/img/CincoMinutes.png";

function Experiences() {
  return (
    <Container id="Experiences">
      <Title>Experiências Anteriores</Title>
      <ContainerImages>
        <ImageContainer>
          <img
            src={ClickCard}
            alt="ClickCard App"
            style={{ height: "600px" }}
          />
          <Caption>Estagiária de Desenvolvimento de Software</Caption>
          <Caption>Empresa - CLICKCARD </Caption>
        </ImageContainer>
        <ImageContainer>
          <img
            src={CincoMinutes}
            alt="CincoMinutes App"
            style={{ height: "600px" }}
          />
          <Caption>Freelancer</Caption>
          <Caption>Empresa - Agência Polvo </Caption>
        </ImageContainer>
      </ContainerImages>
    </Container>
  );
}

export default Experiences;
