import { styled } from "@mui/material";
import { useEffect, useState } from "react";

const Nav = styled("nav")(() => ({
  width: "100%",
  height: "70px",
  background: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
}));

const Logo = styled("div")(() => ({
  fontWeight: "bold",
  fontSize: "18px",
}));

const Menu = styled("div")(({ open }) => ({
  display: "flex",
  gap: "30px",

  "@media (max-width: 768px)": {
    position: "absolute",
    top: "70px",
    left: 0,
    width: "100%",
    background: "#fff",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    gap: "20px",
    transition: "0.3s",
    transform: open ? "translateY(0)" : "translateY(-200%)",
  },
}));

const NavItem = styled("button")(({ active }) => ({
  background: "none",
  border: "none",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  color: active ? "#5e67e6" : "#333",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    width: active ? "100%" : "0%",
    height: "2px",
    background: "#5e67e6",
    bottom: "-5px",
    left: 0,
    transition: "0.3s",
  },

  "&:hover::after": {
    width: "100%",
  },
}));

const Hamburger = styled("div")(() => ({
  display: "none",
  cursor: "pointer",

  "@media (max-width: 768px)": {
    display: "block",
  },
}));

const Line = styled("div")(() => ({
  width: "25px",
  height: "3px",
  background: "#333",
  margin: "5px 0",
}));

const sections = ["home", "projetos", "blog", "contato"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 70;

    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false); // fecha menu mobile
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav>
      <Logo>Meu Portfólio</Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>

      <Menu open={open}>
        {sections.map((sec) => (
          <NavItem
            key={sec}
            active={active === sec ? 1 : 0}
            onClick={() => scrollToSection(sec)}
          >
            {sec.toUpperCase()}
          </NavItem>
        ))}
      </Menu>
    </Nav>
  );
};

export default Navbar;