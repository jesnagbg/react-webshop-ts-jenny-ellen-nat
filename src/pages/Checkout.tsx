import {Container, Grid, Typography} from "@mui/material";
import Basket from "../components/Basket";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout() {
  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xl={12}
        >
          <Typography variant="h1">CHECKOUT</Typography>
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
