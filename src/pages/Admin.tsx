import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Product } from '../../data';
import AdminButton from '../components/AdminButton';
import AdminCard from '../components/AdminCard';
import { useProducts } from '../contexts/ProductsContext';

export default function Admin() {
  const { products } = useProducts();

  return (
    <Container
      maxWidth={'lg'}
      sx={topSpace}
    >
      <main>
       <AdminButton data-cy="admin-add-product" to="/admin/product/new">Add new item</AdminButton>
       <Outlet />
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
              item
              xs={12}
              md={6}
              lg={6}
              key={product.id}
            >
              <Box>
                <Divider />
                <AdminCard
                  product={product}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <AdminButton to="/">Back to main</AdminButton>
      </main>
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
