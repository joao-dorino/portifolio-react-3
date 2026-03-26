import {
  Container,
  Typography,
  styled,
} from "@mui/material";
import { useState, useMemo, useCallback } from "react";

import fotoArq from "../../../../assets/arq.png";
import fotoDashboard from "../../../../assets/dashboard.png";
import fotoTarefas from "../../../../assets/tarefas.png";

/*  STYLES  */

const StyledProjects = styled("div")(() => ({
  width: "100%",
  background: "#f9fafc",
  padding: "40px 0",
}));

const Filters = styled("div")(() => ({
  marginBottom: "20px",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
}));

const Card = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "20px",
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  borderRadius: "12px",
  marginBottom: "20px",
  background: "#fff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  transition: "0.3s",
  cursor: "pointer",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "300px",
  borderRadius: "12px",
  objectFit: "cover",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StyledButton = styled("button")(({ active }) => ({
  background: active ? "#4a52c5" : "#5e67e6",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",

  "&:hover": {
    opacity: 0.9,
  },
}));

const StyledLink = styled("a")(() => ({
  display: "inline-block",
  marginTop: "10px",
  padding: "8px 16px",
  background: "#5e67e6",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",

  "&:hover": {
    background: "#4a52c5",
  },
}));

const ModalOverlay = styled("div")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  zIndex: 10,
}));

const ModalContent = styled("div")(() => ({
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "500px",
  width: "100%",
  textAlign: "center",
}));

/* ================== DATA ================== */

const projetos = [
  {
    nome: "Projeto Dashboard",
    tipo: "typescript",
    imagem: fotoDashboard,
    descricao:
      "Dashboard interativo com React e TypeScript, consumindo APIs.",
    tecnologia: "React | TypeScript | Vite | API | Hooks",
    link: "https://dnc-dashboard-j-l.vercel.app/login",
  },
  {
    nome: "Site Arquitetura",
    tipo: "react",
    imagem: fotoArq,
    descricao:
      "Aplicação em React com Router e Context API.",
    tecnologia: "React | JavaScript | React Router | Context API",
    link: "https://dnc-arq-joaolucas-project.vercel.app/",
  },
  {
    nome: "Board Tarefas",
    tipo: "javascript",
    imagem: fotoTarefas,
    descricao:
      "Board com JS puro e LocalStorage.",
    tecnologia: "JavaScript | HTML | CSS | LocalStorage",
    link: "https://dnc-board-tarefas.netlify.app/",
  },
];

/* ================== COMPONENT ================== */

const Projects = () => {
  const [filtro, setFiltro] = useState("todos");
  const [selecionado, setSelecionado] = useState(null);

  /* 🔥 performance */
  const projetosFiltrados = useMemo(() => {
    return filtro === "todos"
      ? projetos
      : projetos.filter((p) => p.tipo === filtro);
  }, [filtro]);

  const handleFiltro = useCallback((tipo) => {
    setFiltro(tipo);
  }, []);

  const abrirModal = useCallback((projeto) => {
    setSelecionado(projeto);
  }, []);

  const fecharModal = useCallback(() => {
    setSelecionado(null);
  }, []);

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography variant="h4" mb={2}>
          Projetos
        </Typography>

        {/* FILTROS */}
        <Filters>
          {["todos", "typescript", "react", "javascript"].map((tipo) => (
            <StyledButton
              key={tipo}
              active={filtro === tipo ? 1 : 0}
              onClick={() => handleFiltro(tipo)}
            >
              {tipo.toUpperCase()}
            </StyledButton>
          ))}
        </Filters>

        {/* LISTA */}
        {projetosFiltrados.map((p) => (
          <Card key={p.nome} onClick={() => abrirModal(p)}>
            <StyledImage src={p.imagem} alt={p.nome} />

            <div style={{ flex: 1 }}>
              <Typography variant="h5">{p.nome}</Typography>

              <Typography variant="body2" mt={1}>
                {p.descricao}
              </Typography>

              <StyledLink
                href={p.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                Ver projeto 🚀
              </StyledLink>
            </div>
          </Card>
        ))}

        {/* MODAL */}
        {selecionado && (
          <ModalOverlay onClick={fecharModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <Typography variant="h5" mb={2}>
                {selecionado.nome}
              </Typography>

              <Typography mb={2}>
                {selecionado.tecnologia}
              </Typography>

              <StyledLink href={selecionado.link} target="_blank">
                Acessar projeto
              </StyledLink>

              <br /><br />

              <StyledButton onClick={fecharModal}>
                Fechar
              </StyledButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </StyledProjects>
  );
};

export default Projects;