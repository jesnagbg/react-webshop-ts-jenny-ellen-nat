import { Clear } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { CartItem } from '../../data';
import { useCart } from '../contexts/CartContext';
import Quantity from './Quantity';

interface Props {
  item: CartItem;
  readonly: boolean;
}

export default function CheckoutCard({ item, readonly }: Props) {
  const { removeFromCart, changeQuantity } = useCart();

  const removeItem = () => {
    removeFromCart(item);
  };

  const valueHandler = (value: number) => {
    changeQuantity(item, value);
  };

  return (
    <Card
      sx={styledCard}
      data-cy="cart-item"
    >
      <CardMedia
        sx={styledCardMedia}
        component="img"
        image={item.image}
        alt="Puzzle thumbnail."
      />
      <Box sx={styledBox}>
        <CardContent sx={styledCardContent}>
          <Typography
            data-cy="product-title"
            variant="h4"
          >
            {item.title}
          </Typography>
          <Typography variant="body1">{item.pieces} pieces</Typography>
          <Typography variant="body1"> Quantity:</Typography>
          {readonly ? (
            <Typography variant="body1">{item.quantity}</Typography>
          ) : (
            <Quantity
              initialValue={item.quantity}
              valueHandler={valueHandler}
              min={0}
            />
          )}
          <Typography
            data-cy="product-price"
            variant="body1"
          >
            {item.price * item.quantity}kr
          </Typography>
        </CardContent>
      </Box>
      {readonly ? null : (
        <Box>
          <IconButton
            color="primary"
            aria-label="remove"
            size="small"
            onClick={removeItem}
          >
            <Clear />
          </IconButton>
        </Box>
      )}
    </Card>
  );
}

const styledCard = {
  margin: '1rem 0',
  display: 'flex',
};

const styledCardMedia = {
  maxWidth: 0.3,
};

const styledCardContent = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  display: 'flex',
  gap: '10px',
  paddingTop: '0',
};

const styledBox = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
};
