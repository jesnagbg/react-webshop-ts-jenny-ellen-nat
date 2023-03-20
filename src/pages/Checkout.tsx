import { Container, Grid, Typography } from '@mui/material';
import Basket from '../components/Basket';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../contexts/CartContext';
import { products } from '../data';

export default function Checkout() {
  // Test the basket!! (REMOVE ME LATER)
  const { addToCart } = useCart();

  // Basket testing. (REMOVE ME LATER)
  const addItemToCart = () => {
    addToCart(products[0], 1);
  };

  return (
    <Container maxWidth={'lg'}>
      {/* Basket testing button. REMOVE ME LATER */}
      <button onClick={addItemToCart}>Add me</button>
      {/**-------------------------------------- */}

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
          <CheckoutForm />
        </Grid>
      </Grid>
    </Container>
  );
}

const styledHeader = {
  margin: '5.4rem 0 0 0',
};
