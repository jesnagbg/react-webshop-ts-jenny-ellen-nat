import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { theme } from '../theme';

export default function CheckoutForm() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(2, 'Please enter a valid first name')
      .required('First name is required'),
    lastName: yup
      .string()
      .min(2, 'Please enter a valid last name')
      .required('Last name is required'),
    address: yup
      .string()
      .min(2, 'Please enter a valid address')
      .required('Last name is required'),
    address2: yup.string().min(2, 'Please enter a valid address'),
    postalCode: yup
      .string()
      .min(4, 'Please enter a valid postal code')
      .required('Postal code is required'),
    phone: yup
      .string()
      .min(4, 'Please enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .min(4, 'Please enter a valid email')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      postalCode: '',
      phone: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
      console.log('confirm');
      navigate(`/confirm`);
    },
  });

  return (
    <div>
      <Typography variant="h6">Shipping address</Typography>
      <StyledForm
        onSubmit={formik.handleSubmit}
        data-cy="customer-form"
      >
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="firstName"
          name="firstName"
          label="first name"
          // autoComplete=""
          data-cy="customer-name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={
            <span data-cy="customer-name-error">
              {formik.touched.firstName && formik.errors.firstName}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="lastName"
          name="lastName"
          label="last name"
          type="last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="address"
          name="address"
          label="address"
          type="address"
          data-cy="customer-address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={
            <span data-cy="customer-address-error">
              {formik.touched.address && formik.errors.address}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="address2"
          name="address2"
          label="address line 2"
          type="address2"
          value={formik.values.address2}
          onChange={formik.handleChange}
          error={formik.touched.address2 && Boolean(formik.errors.address2)}
          helperText={formik.touched.address2 && formik.errors.address2}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="city"
          name="city"
          label="city"
          type="city"
          data-cy="customer-city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="postalCode"
          name="postalCode"
          label="postal code"
          type="postalCode"
          data-cy="customer-zipcode"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
          helperText={formik.touched.postalCode && formik.errors.postalCode}
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="phone"
          name="phone"
          label="phone"
          type="phone"
          data-cy="customer-phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={
            <span data-cy="customer-phone-error">
              {formik.touched.phone && formik.errors.phone}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="email"
          name="email"
          label="email"
          type="email"
          data-cy="customer-email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            <span data-cy="customer-email-error">
              {formik.touched.email && formik.errors.email}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <Button
          sx={styledButton}
          color="primary"
          variant="contained"
          type="submit"
          data-cy="product-buy-button"
        >
          Confirm
        </Button>
      </StyledForm>
    </div>
  );
}

const styledButton = {
  margin: '2rem 0',
  padding: '.6rem 2rem',
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
};

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
