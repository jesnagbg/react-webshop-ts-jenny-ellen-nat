import { Container, Grid, Typography } from "@mui/material";
import Basket from "../components/Basket";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout() {
  return (
    <Container
      sx={containerWidth}
      maxWidth={false}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          width={12}
        >
          <Typography component="h1">CHECKOUT</Typography>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          xl={6}
        >
          <Basket></Basket>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          xl={6}
        >
          <CheckoutForm></CheckoutForm>
        </Grid>
      </Grid>
    </Container>
  );
}

const containerWidth = {
  maxWidth: "1400px",
};
