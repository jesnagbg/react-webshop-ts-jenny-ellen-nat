import {
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { CartItem, products } from '../../data';
import CheckoutCard from '../components/CheckoutCard';

// Test data

interface DelieryDetails {
  firstName: string;
  lastName: string;
  addressLine1: string;
  phoneNumber: string;
  email: string;
  postCode: string;
}

interface OrderItems {
  items: CartItem[];
  totalPrice: number;
}

interface Order {
  deliveryDetails: DelieryDetails;
  orderItems: CartItem[];
  orderID: string;
  totalPrice: number;
}

export default function Confirmation() {
  const testDelivery: DelieryDetails = {
    firstName: 'Nathanael',
    lastName: 'Blackbourn',
    addressLine1: '123 Madeup Street',
    phoneNumber: '+46 65578990987655',
    email: 'email@fejkemail.com',
    postCode: '8766678',
  };

  const testOrder: Order = {
    deliveryDetails: testDelivery,
    orderItems: [
      { ...products[0], quantity: 1 },
      { ...products[1], quantity: 2 },
    ],
    orderID: crypto.randomUUID(),
    totalPrice: 9999,
  };

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
            variant="body2"
            sx={styledType}
          >
            Dear {testOrder.deliveryDetails.firstName}, thank you for your
            order! We are pleased to confirm that your order has been
            successfully placed and is being processed. Your order ID is
            {testOrder.orderID}. We will notify you as soon as your order has
            been shipped. Best regards, Piece by Piece.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <Typography variant="h4">Order #{testOrder.orderID}</Typography>
          <Divider />
          {testOrder.orderItems.map((item) => {
            return (
              <Fragment>
                <CheckoutCard
                  item={item}
                  readonly={true}
                />
                <Divider />
              </Fragment>
            );
          })}
          <Typography variant="h5">Total: {testOrder.totalPrice}kr</Typography>
          <Typography
            variant="h3"
            sx={styledSubheader}
          >
            Delivery details
          </Typography>
          <Stack>
            <Typography variant="body1">{testDelivery.firstName}</Typography>
            <Typography variant="body1">{testDelivery.lastName}</Typography>
            <Typography variant="body1">{testDelivery.addressLine1}</Typography>
            <Typography variant="body1">{testDelivery.postCode}</Typography>
            <Typography variant="body1">{testDelivery.email}</Typography>
            <Typography variant="body1">{testDelivery.phoneNumber}</Typography>
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
