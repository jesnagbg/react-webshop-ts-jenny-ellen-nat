import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import AdminAddForm from '../components/AdminAddForm';
import AdminButton from '../components/AdminButton';
import AdminCard from '../components/AdminCard';
import { Product, products } from '../data';

export default function Admin() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      maxWidth={'lg'}
      sx={topSpace}
    >
      <AdminButton onClick={handleClickOpen}>Add new item</AdminButton>
      <AdminAddForm open={open} handleClose={handleClose} />
      <Grid
        sx={bottomSpace}
        container
        spacing={0}
        columnSpacing={12}
      >
        <Grid
          item
          xs={12}
        >
          <Typography
            sx={titleStyling}
            variant="h1"
          >
            All products
          </Typography>
        </Grid>
        {products.map((product: Product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            md={6}
            lg={6}
          >
            <Box>
              <Divider />
              <AdminCard product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <AdminButton to="/">Back to main</AdminButton>
    </Container>
  );
}

const topSpace = {
  marginTop: '80px',
};

const titleStyling = {
  marginBottom: '1rem',
};

const bottomSpace = {
  marginBottom: 2,
};
