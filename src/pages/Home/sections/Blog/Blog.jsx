import { Container, Typography, styled } from "@mui/material";

const StyledBlog = styled("div")(({ theme }) => ({
  width: "95%",
  margin: "0 auto",
  background: "#EDF7FA",
  padding: "40px 0",
  borderRadius: "8px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px 0",
  },
}));

const Card = styled("div")(() => ({
  width: "100%",
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "stretch",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const Blog = () => {
  return (
    <StyledBlog>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            ml: { xs: 1, md: 3 },
            fontWeight: 300,
            mb: 3,
          }}
        >
          Blog
        </Typography>

        <CardsContainer>
          <Card>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Creating interfaces from scratch with React and MUI
            </Typography>

            <Typography variant="caption" color="text.secondary">
              20 mar 2026 • Desenvolvimento Front-End
            </Typography>

            <Typography variant="body2" mt={1}>
              Neste projeto, meu objetivo foi criar uma interface moderna do
              zero utilizando React e Material UI. A ideia era desenvolver um
              layout limpo e profissional.
            </Typography>
          </Card>

          <Card>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Data Manipulation with JavaScript
            </Typography>

            <Typography variant="caption" color="text.secondary">
              27 mar 2026 • Desenvolvimento Front-End
            </Typography>

            <Typography variant="body2" mt={1}>
              Neste projeto, utilizei JavaScript para manipular dados usando
              métodos como map, filter e reduce, com foco na organização e
              transformação de informações.
            </Typography>
          </Card>
        </CardsContainer>
      </Container>
    </StyledBlog>
  );
};

export default Blog;
