import { Button, FormHelperText, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { theme } from '../theme';

export default function CheckoutForm() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, 'Name must be at least two characters')
      .required('Name required'),
    address: yup
      .string()
      .min(4, 'Please enter a valid address')
      .required('Address required'),
    postalCode: yup
      .string()
      .min(4, 'Postal code must be at least two characters')
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

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      postalCode: '',
      phone: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
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
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          inputProps={{
            'data-cy': 'customer-name',
            'aria-describedby': 'customer-name-helper-text',
            autoComplete: 'name',
          }}
          required={true}
          onFocus={() => formik.setFieldTouched('name', true, false)}
        />
        <FormHelperText
          id="customer-name-helper-text"
          data-cy="customer-name-error"
        ></FormHelperText>

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
          inputProps={{
            'data-cy': 'customer-address',
            'aria-describedby': 'customer-address-helper-text',
            autoComplete: 'street-address',
          }}
          required={true}
          onBlur={formik.handleBlur}
        />
        <FormHelperText
          id="customer-address-helper-text"
          data-cy="customer-address-error"
        ></FormHelperText>
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
          required={true}
          onBlur={formik.handleBlur}
          inputProps={{ 'data-cy': 'customer-city', autoComplete: 'city' }}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="postalCode"
          name="postalCode"
          label="Postal code"
          type="postalCode"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
          helperText={formik.touched.postalCode && formik.errors.postalCode}
          required={true}
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
          required={true}
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
          required={true}
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
