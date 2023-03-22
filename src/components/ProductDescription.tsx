import { Box, Typography } from '@mui/material';
import { useProducts } from '../contexts/ProductsContext';

export default function ProductDescription() {
  const { product } = useProducts();

  return (
    <Box>
      <Box sx={styledHeadings}>
        <Typography
          variant="h4"
          data-cy="product-title"
        >
          {product?.title}
        </Typography>
        <Typography variant="body1">{product?.pieces} Pieces</Typography>
      </Box>
      <Typography
        sx={styledParagraph}
        variant="body1"
        data-cy="product-description"
      >
        {product?.description}
      </Typography>
    </Box>
  );
}

const styledHeadings = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1.2rem',
};

const styledParagraph = {
  fontSize: '20px',
  marginBottom: '1.2rem',
};
