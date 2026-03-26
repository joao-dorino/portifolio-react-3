import { Container, Grid, styled, Typography } from "@mui/material";

const StyledHero = styled("div")(() => ({
  width: "90vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0 auto",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              textAlign="left"
              mb={3}
              sx={{ maxWidth: "600px" }}
            >
              João Lucas | Desenvolvedor Front-End
            </Typography>
            <Typography
              color="secondary"
              variant="h5"
              textAlign="left"
              sx={{ maxWidth: "600px" }}
            >
              Construindo interfaces modernas, rápidas e responsivas utilizando
              React e JavaScript / TypeScript.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
