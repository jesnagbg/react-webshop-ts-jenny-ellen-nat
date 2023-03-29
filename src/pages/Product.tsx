import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductAdd from '../components/ProductAdd';
import ProductDescription from '../components/ProductDescription';
import ProductGallery from '../components/ProductGallery';
import { useProducts } from '../contexts/ProductsContext';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const [product, setProduct] = useState(products.find((p) => p.id === id));
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={'lg'}
      sx={styledContainer}
    >
      <Button
        sx={styledButton}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      {product ? (
        <Fragment>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <ProductGallery product={product} />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <ProductDescription product={product} />
            </Grid>
          </Grid>
          <Box sx={styledAddProducts}>
            <ProductAdd product={product} />
          </Box>
        </Fragment>
      ) : (
        <Typography variant="h2">
          Sorry, that product could not be found.
        </Typography>
      )}
    </Container>
  );
}

const styledContainer = {
  marginTop: '100px',
  position: 'relative',
  maxWidth: '1200px',
};

const styledButton = {
  margin: '0 0 10px 0',
};

const styledAddProducts = {
  position: 'sticky',
  bottom: '24px',
  left: '100%',
  width: 'fit-content',

  '@media (max-width: 899px)': {
    width: '100%',
    bottom: 0,
  },
};
