import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";
import { PageNotFoundIllustration } from "assets/NotFound";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0)
}));

const NotFoundPage = () => {
  return (
    <Container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="h3" paragraph>
          Error 404 Not Found
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>We dont have what you are looking for</Typography>

        <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />

        <Button component={Link} to="/" size="large" variant="contained">
          Back to Home
        </Button>
      </ContentStyle>
    </Container>
  );
};

export default NotFoundPage;
