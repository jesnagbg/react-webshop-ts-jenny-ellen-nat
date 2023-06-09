import {
  Button,
  FormHelperTextProps,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useCart } from '../contexts/CartContext';
import { useOrder } from '../contexts/OrderContext';
import { theme } from '../theme';

export default function CheckoutForm() {
  const navigate = useNavigate();
  const { order, updateOrder } = useOrder();
  const { emptyCart, cartItems } = useCart();

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      phone: '',
      email: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const updatedOrder = {
        ...order,
        cart: order.cart,
        deliveryAddress: {
          ...order.deliveryAddress,
          name: values.name,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          phone: values.phone,
          email: values.email,
        },
      };
      updateOrder(updatedOrder);
      localStorage.removeItem('cart');
      emptyCart();
      navigate(`/confirmation`);
    },
  });

  return (
    <div>
      <Typography variant="h5">Shipping address</Typography>
      <StyledForm
        onSubmit={formik.handleSubmit}
        data-cy="customer-form"
      >
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          FormHelperTextProps={
            { 'data-cy': 'customer-name-error' } as FormHelperTextProps
          }
          inputProps={{
            'data-cy': 'customer-name',
            autoComplete: 'name',
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="address"
          name="address"
          label="Address"
          type="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          FormHelperTextProps={
            { 'data-cy': 'customer-address-error' } as FormHelperTextProps
          }
          inputProps={{
            'data-cy': 'customer-address',
            autoComplete: 'street-address',
          }}
          onBlur={formik.handleBlur}
        />

        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="city"
          name="city"
          label="City"
          type="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          FormHelperTextProps={
            { 'data-cy': 'customer-city-error' } as FormHelperTextProps
          }
          onBlur={formik.handleBlur}
          inputProps={{
            'data-cy': 'customer-city',
            autoComplete: 'address-level2',
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="zipCode"
          name="zipCode"
          label="Postal code"
          type="zipCode"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
          helperText={formik.touched.zipCode && formik.errors.zipCode}
          FormHelperTextProps={
            { 'data-cy': 'customer-zipcode-error' } as FormHelperTextProps
          }
          onBlur={formik.handleBlur}
          inputProps={{
            'data-cy': 'customer-zipcode',
            autoComplete: 'postal-code',
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="phone"
          name="phone"
          label="Phone"
          type="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          FormHelperTextProps={{ 'data-cy': 'customer-phone-error' } as any}
          onBlur={formik.handleBlur}
          inputProps={{ 'data-cy': 'customer-phone', autoComplete: 'tel' }}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          FormHelperTextProps={{ 'data-cy': 'customer-email-error' } as any}
          onBlur={formik.handleBlur}
          inputProps={{ 'data-cy': 'customer-email', autoComplete: 'email' }}
        />
        <Button
          sx={styledButton}
          color="primary"
          variant="contained"
          type="submit"
        >
          Confirm
        </Button>
      </StyledForm>
    </div>
  );
}

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least two characters')
    .required('Name required'),
  address: yup
    .string()
    .min(4, 'Please enter a valid address')
    .required('Address required'),
  zipCode: yup
    .string()
    .matches(/^[0-9]+$/, 'Postal code must be a number')
    .min(4, 'Postal code must be at least two characters')
    .max(7, 'Postal code can not be more than seven characters')
    .required('Postal code required'),
  city: yup
    .string()
    .min(2, 'Please enter a valid city')
    .required('City required'),
  phone: yup
    .string()
    .min(6, 'Phone number must be at least six characters')
    .required('Phone number required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email required'),
});

const styledButton = {
  margin: '2rem 0',
  padding: '.6rem 2rem',
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,

  '&: hover': {
    color: '#fff',
  },
};

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
