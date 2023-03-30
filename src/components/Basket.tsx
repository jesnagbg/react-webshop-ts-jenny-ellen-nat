import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { Theme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { theme } from '../theme';
import CheckoutCard from './CheckoutCard';

export default function Basket() {
  const { cartItems } = useCart();

  const navigate = useNavigate();

  const countryRoad = () => {
    navigate('/');
  };

  return (
    <Box>
      <Typography variant="h5">Cart</Typography>
      <Divider />
      {cartItems.length ? (
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
      ) : (
        <Box sx={styledEmptyFrame}>
          <Box sx={styledEmptyBox(theme)}>
            <Typography
              variant="h5"
              sx={styledEmptyText}
            >
              Your cart is empty!
            </Typography>
            <Typography
              variant="h5"
              sx={styledEmptyText}
            >
              :(
            </Typography>
            <Button
              onClick={countryRoad}
              sx={styledButton}
            >
              FILL IT
            </Button>
          </Box>
        </Box>
      )}
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

const styledEmptyFrame = {
  position: 'relative',
  paddingTop: '100%',
};

const styledEmptyBox = (theme: Theme) => {
  return {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: theme.palette?.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem,',
  };
};

const styledEmptyText = {
  marginTop: '0.5rem',
  textAlign: 'center',
};
const styledButton = {
  marginTop: '1rem',
  border: '1px solid black',
  color: 'black',
};

const styledTypography = {
  textAlign: 'right',
};
