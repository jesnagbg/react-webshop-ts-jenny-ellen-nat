import { Box, Divider, Stack, Typography } from '@mui/material';
import { useCart } from '../contexts/CartContext';
import CheckoutCard from './CheckoutCard';

export default function Basket() {
  const { cartItems } = useCart();

  return (
    <Box>
      <Typography variant="h5">Basket</Typography>
      <Divider />
      <Stack>
        {cartItems.map((item) => (
          <Box key={item.id}>
            <CheckoutCard
              item={item}
              readonly={false}
            />
            <Divider />
          </Box>
        ))}
      </Stack>
      <Typography
        variant="subtitle1"
        sx={styledTypography}
        data-cy="total-price"
      >
        Total:{' '}
        {cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )}
        kr
      </Typography>
    </Box>
  );
}

const styledTypography = {
  textAlign: 'right',
};
