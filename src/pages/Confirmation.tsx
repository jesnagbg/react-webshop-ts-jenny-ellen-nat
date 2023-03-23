import { Container, Typography } from '@mui/material';
import { useOrder } from '../contexts/OrderContext';

export default function Confirmation() {
  const { order } = useOrder();

  return (
    <Container>
      <Typography variant="h5">Thank you for your order!</Typography>
      <Typography variant="subtitle1">Order details:</Typography>
      <ul>
        {order.cart.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.title}: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <Typography variant="subtitle1">
        Total: $
        {order.cart
          .reduce((total, item) => total + item.quantity * item.price, 0)
          .toFixed(2)}
      </Typography>

      <Typography variant="subtitle1">Delivery address:</Typography>
      <Typography>
        {order.deliveryAddress.name}, {order.deliveryAddress.address},{' '}
        {order.deliveryAddress.postalCode} {order.deliveryAddress.city}
      </Typography>
      <Typography variant="subtitle1">Contact information:</Typography>
      <Typography>Email: {order.deliveryAddress.email}</Typography>
      <Typography>Phone: {order.deliveryAddress.phone}</Typography>
    </Container>
  );
}
