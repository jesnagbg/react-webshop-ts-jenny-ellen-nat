import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import ProductAdd from '../components/ProductAdd';
import ProductDescription from '../components/ProductDescription';
import ProductGallery from '../components/ProductGallery';
import { useProducts } from '../contexts/ProductsContext';
import { theme } from '../theme';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={'lg'}
      sx={styledContainer}
    >
      <Link
        component={RouterLink}
        sx={StyledLink}
        to="/"
      >
        <KeyboardArrowLeft />
        Back
      </Link>
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
  marginTop: '90px',
  position: 'relative',
  maxWidth: '1200px',
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

const StyledLink = {
  display: 'flex',
  fontFamily: theme.typography.fontFamily,
  alignItems: 'center',
  width: 'fit-content',
  marginBottom: '1rem',
  textDecorationColor: theme.palette.primary.main,
};
