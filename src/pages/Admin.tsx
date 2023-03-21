import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { Product, products } from '../../data';
import AdminAddForm from '../components/AdminAddForm';
import AdminButton from '../components/AdminButton';
import AdminCard from '../components/AdminCard';
import { useDialog } from '../hooks/useDialog';

export default function Admin() {
  const { open, handleOpen, handleClose } = useDialog();

  return (
    <Container
      maxWidth={'lg'}
      sx={topSpace}
    >
      <main>
       <AdminButton onClick={handleOpen}>Add new item</AdminButton>
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
              item
              xs={12}
              md={6}
              lg={6}
            >
              <Box>
                <Divider />
                <AdminCard
                  product={product}
                  key={product.id}
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
