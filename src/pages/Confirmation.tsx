import {
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CheckoutCard from '../components/CheckoutCard';
import { useOrder } from '../contexts/OrderContext';

export default function Confirmation() {
  const { order } = useOrder();

  return (
    <Container sx={styledContainer}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <Typography
            variant="h3"
            sx={styledPageHeader}
          >
            Thank you for your order!
          </Typography>
          <Typography
            variant="body1"
            sx={styledType}
          >
            Dear {order.deliveryAddress.name}, thank you for your order! We are
            pleased to confirm that your order has been successfully placed and
            is being processed. Your order ID is
            {order.id}. We will notify you as soon as your order has been
            shipped. Best regards, Piece by Piece.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <Typography
            sx={styledOrderTitle}
            variant="h4"
          >
            Order #{order.id}
          </Typography>
          <Divider />
          {order.cart.map((item) => {
            return (
              <Fragment key={item.id}>
                <CheckoutCard
                  item={item}
                  readonly={true}
                />
                <Divider />
              </Fragment>
            );
          })}
          <Typography variant="h5">
            Total:
            {order.cart
              .reduce((total, item) => total + item.quantity * item.price, 0)
              .toFixed(2)}
            kr
          </Typography>
          <Typography
            variant="h3"
            sx={styledSubheader}
          >
            Delivery details
          </Typography>
          <Stack>
            <Typography variant="body1">
              {order.deliveryAddress.name}
            </Typography>
            <Typography variant="body1">
              {order.deliveryAddress.address}
            </Typography>
            <Typography variant="body1">
              {order.deliveryAddress.postalCode}
            </Typography>
            <Typography variant="body1">
              {order.deliveryAddress.email}
            </Typography>
            <Typography variant="body1">
              {order.deliveryAddress.phone}
            </Typography>
          </Stack>
          <Link
            component={RouterLink}
            to="/"
          >
            <Button sx={styledButton}>Back to home</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

const styledPageHeader = {
  marginBottom: '2rem',
};

const styledType = {
  maxWidth: '500px',
};

const styledSubheader = {
  marginTop: '3rem',
  marginBottom: '1rem',
};

const styledContainer = {
  paddingTop: '80px',
};

const styledButton = {
  marginTop: '2rem',
  border: '1px solid black',
};

const styledOrderTitle = {
  marginBottom: '1rem',
};
