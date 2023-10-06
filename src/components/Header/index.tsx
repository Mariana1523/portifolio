import React from "react";
import { Container, OptionHeader, OptionHeaderMariana } from "./styles";
import Home from "../Home/index";
function Header() {
  return (
    <Container>
      <OptionHeader href="#Experiences">EXPERIÊNCIAS</OptionHeader>
      <OptionHeader href="#Progress">ATUALMENTE</OptionHeader>
      <OptionHeaderMariana href="#Home">MARIANA GURGEL</OptionHeaderMariana>
      <OptionHeader href="#Skills">HABILIDADES</OptionHeader>
      <OptionHeader href="#Contact">CONTATO</OptionHeader>
    </Container>
  );
}

export default Header;
