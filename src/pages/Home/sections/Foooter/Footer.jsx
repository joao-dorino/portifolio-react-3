import { styled } from "@mui/material";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled("footer")(() => ({
  width: "100%",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",   
  gap: "20px",
  background: "#f5f5f5",
}));

const IconLink = styled("a")(() => ({
  color: "#333",
  fontSize: "28px",
  transition: "0.3s",

  "&:hover": {
    color: "#1976d2",
    transform: "scale(1.2)",
  },
}));

const IconsWrapper = styled("div")(() => ({
  display: "flex",
  gap: "30px",
}));

const FooterH1 = styled("h1")(() => ({
  paddingBottom: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem"
}));

const Footer = () => {
  return (
    <FooterContainer>

      <IconsWrapper>
        <IconLink href="https://www.instagram.com/joao_dorin0/" target="_blank">
          <FaInstagram />
        </IconLink>

        <IconLink href="https://www.linkedin.com/in/jo%C3%A3o-lucas-santos-297bb719a/" target="_blank">
          <FaLinkedin />
        </IconLink>

        <IconLink href="https://github.com/joao-dorino" target="_blank">
          <FaGithub />
        </IconLink>
      </IconsWrapper>

      <FooterH1>
        Copyright ©2030 All rights reserved
      </FooterH1>

    </FooterContainer>
  );
}; 

export default Footer