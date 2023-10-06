import React, { useState } from "react";
import { Container, ContainerColumn, Title } from "./styles";

import { ReactComponent as ContatoGmail } from "../../assets/img/ConatoGmail.svg";
import { ReactComponent as ContatoGit } from "../../assets/img/ContatoGit.svg";
import { ReactComponent as ContatoLinkedin } from "../../assets/img/ContatoLinkedin.svg";
import { ReactComponent as ContatoWpp } from "../../assets/img/ContatoWpp.svg";

type IconType = "git" | "linkedin" | "wpp" | null;

function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState<IconType>(null);

  const boxShadowStyle = {
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "50px",
  };

  const iconStyle = {
    ...boxShadowStyle,
    zIndex: 1,
    transition: "transform 0.3s, cursor 0.3s",
    cursor: "pointer",
  };

  const hoverStyle = {
    transform: "scale(1.1)", // Ajuste este valor conforme necessário
  };

  const handleMouseEnter = (icon: IconType) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleGitClick = () => {
    window.open("https://github.com/Mariana1523", "_blank");
    console.log("Clicou no Git");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/marigurgel/", "_blank");
  };

  const handleWppClick = () => {
    const phoneNumber = "31971514755";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Container id="Contact">
        <Title>Contato</Title>
        <ContainerColumn>
          <ContatoGit
            width="100"
            height="100"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "git" && hoverStyle),
            }}
            onClick={handleGitClick}
            onMouseEnter={() => handleMouseEnter("git")}
            onMouseLeave={handleMouseLeave}
          />
          <ContatoLinkedin
            width="100"
            height="100"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "linkedin" && hoverStyle),
            }}
            onClick={handleLinkedinClick}
            onMouseEnter={() => handleMouseEnter("linkedin")}
            onMouseLeave={handleMouseLeave}
          />
          <ContatoWpp
            width="100"
            height="100"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "wpp" && hoverStyle),
              transition: "transform 0.7s, cursor 0.3s",
            }}
            onClick={handleWppClick}
            onMouseEnter={() => handleMouseEnter("wpp")}
            onMouseLeave={handleMouseLeave}
          />
        </ContainerColumn>
      </Container>
    </>
  );
}

export default Contact;
