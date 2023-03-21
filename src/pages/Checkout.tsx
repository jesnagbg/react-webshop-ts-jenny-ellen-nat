import { Container, Grid, Typography } from '@mui/material';
import Basket from '../components/Basket';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../contexts/CartContext';
import { products } from '../data';

export default function Checkout() {
  // Test the basket!! (REMOVE ME LATER)
  const { addToCart } = useCart();

  // Basket testing. (REMOVE ME LATER)
  const onClick = () => {
    addToCart(products[0], 1);
  };

  return (
    <Container
      maxWidth={'lg'}
      component={'main'}
    >
      {/* Basket testing button. REMOVE ME LATER */}
      <button onClick={onClick}>Add me</button>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
        >
          <Typography variant="h1">CHECKOUT</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <Basket></Basket>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <CheckoutForm></CheckoutForm>
        </Grid>
      </Grid>
    </Container>
  );
}
