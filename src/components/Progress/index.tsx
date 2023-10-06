import React from "react";
import {
  Container,
  Title,
  ContainerGreen,
  ImageComputerContainer,
  Description,
  DescriptionContainer,
} from "./styles";
import AtendeAi from "../../assets/img/AtendeAi.png";
import HallisonSmarthphones from "../../assets/img/HallisonSmarthphones.png";
import HallisonSmarthphone from "../../assets/img/HallisonSmartphone.png";

function Progress() {
  return (
    <Container id="Progress">
      <Title>Em Andamento</Title>
      <ContainerGreen>
        <ImageComputerContainer>
          <img
            src={AtendeAi}
            alt="AtendeAi"
            style={{ height: "500px", zIndex: 2 }}
          />
        </ImageComputerContainer>
        <DescriptionContainer>
          <Description>ESTÁGIO</Description>
          <Description>
            Desenvolvedora de software, utilizando o framework vue.js
          </Description>
          <Description>Empresa - AtendeAí</Description>
        </DescriptionContainer>
      </ContainerGreen>

      <ContainerGreen>
        <ImageComputerContainer>
          <img
            src={HallisonSmarthphones}
            alt="AtendeAi"
            style={{ height: "500px", zIndex: 2 }}
          />
        </ImageComputerContainer>
        <DescriptionContainer>
          <Description>FREELANCE</Description>
          <Description>
            APLICATIVO PARA UM PERSONAL QUE DESEJA GERENCIAR SEUS ALUNOS E SUAS
            AULAS{" "}
          </Description>
          <Description>Cliente - Hallison Henrique</Description>
        </DescriptionContainer>
        <ImageComputerContainer>
          <img
            src={HallisonSmarthphone}
            alt="AtendeAi"
            style={{ height: "500px", zIndex: 2 }}
          />
        </ImageComputerContainer>
      </ContainerGreen>
    </Container>
  );
}

export default Progress;
