import React, { useState } from "react";
import { Container, ContainerColumn, Title } from "./styles";

import { ReactComponent as HtmlSvg } from "../../assets/img/htmlSvg.svg";
import { ReactComponent as TsSvg } from "../../assets/img/TsSvg.svg";
import { ReactComponent as CssSvg } from "../../assets/img/CssSvg.svg";
import { ReactComponent as GitSvg } from "../../assets/img/GitSvg.svg";
import { ReactComponent as ReactSvg } from "../../assets/img/ReactSvg.svg";
import { ReactComponent as FigmaSvg } from "../../assets/img/FigmaSvg.svg";
import { ReactComponent as JsSvg } from "../../assets/img/jsSvg.svg";
import { ReactComponent as CplusplusSvg } from "../../assets/img/CplusplusSvg.svg";

type IconType =
  | "html"
  | "ts"
  | "css"
  | "git"
  | "react"
  | "figma"
  | "js"
  | "cplusplus"
  | null;

function Skills() {
  const [hoveredIcon, setHoveredIcon] = useState<IconType>(null);

  const boxShadowStyle = {
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
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

  return (
    <>
      <Container id="Skills">
        <Title>Habilidades</Title>
        <ContainerColumn>
          <TsSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "ts" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("ts")}
            onMouseLeave={handleMouseLeave}
          />
          <JsSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "js" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("js")}
            onMouseLeave={handleMouseLeave}
          />
          <ReactSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "react" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("react")}
            onMouseLeave={handleMouseLeave}
          />
          <FigmaSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "figma" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("figma")}
            onMouseLeave={handleMouseLeave}
          />
        </ContainerColumn>

        <ContainerColumn>
          <CssSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "css" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("css")}
            onMouseLeave={handleMouseLeave}
          />
          <HtmlSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "html" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("html")}
            onMouseLeave={handleMouseLeave}
          />

          <GitSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "git" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("git")}
            onMouseLeave={handleMouseLeave}
          />
          <CplusplusSvg
            width="200"
            height="200"
            style={{
              ...iconStyle,
              ...(hoveredIcon === "cplusplus" && hoverStyle),
            }}
            onMouseEnter={() => handleMouseEnter("cplusplus")}
            onMouseLeave={handleMouseLeave}
          />
        </ContainerColumn>
      </Container>
    </>
  );
}

export default Skills;
