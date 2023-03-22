import { Container, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
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
      <Grid container>
        <Grid
          sx={styledPageHeader}
          item
          sm={12}
          md={8}
        >
          <Typography variant="h2">Thank you for your order!</Typography>
          <Typography variant="h4">
            Your order number is {testOrder.orderID} You'll receive your
            confirmation email soon.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          {testOrder.orderItems.map((item) => {
            return (
              <CheckoutCard
                item={item}
                readonly={true}
              />
            );
          })}
          <Typography variant="h5">Total: {testOrder.totalPrice}kr</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
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
        </Grid>
      </Grid>
    </Container>
  );
}

const styledPageHeader = {
  marginBottom: '4rem',
};

const styledSubheader = {
  marginBottom: '1rem',
};

const styledContainer = {
  paddingTop: '80px',
};
