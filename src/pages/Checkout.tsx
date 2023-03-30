import { Container, Grid, Typography } from '@mui/material';
import Basket from '../components/Basket';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../contexts/CartContext';

export default function Checkout() {
  const { cartItems } = useCart();

  return (
    <Container maxWidth={'lg'}>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          xs={12}
          sx={styledHeader}
        >
          <Typography variant="h1">CHECKOUT</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <Basket />
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{ gridColumnStart: 8 }}
        >
          {cartItems.length ? <CheckoutForm /> : null}
        </Grid>
      </Grid>
    </Container>
  );
}

const styledHeader = {
  margin: '5.4rem 0 0 0',
};
