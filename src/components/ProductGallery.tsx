import { Box, Stack } from '@mui/material';
import { useProducts } from '../contexts/ProductsContext';
import { theme } from '../theme';

export default function ProductGallery() {
  const { product } = useProducts();

  return (
    <Stack spacing={2}>
      <Box sx={styledBackground}>
        <Box
          sx={styledBigImg}
          component="img"
          alt={`Image of a puzzle called ${product?.title}.`}
          src={`${product?.image}`}
        ></Box>
      </Box>

      <Box sx={styledSmallImgs}>
        {product?.images?.[0] && (
          <Box
            sx={styledImg}
            component="img"
            alt={`Image of a puzzle called ${product?.title}.`}
            src={`${product?.images[0]}`}
          ></Box>
        )}
        {product?.images?.[1] && (
          <Box
            sx={styledImg}
            component="img"
            alt={`Close up image of puzzle ${product?.title}.`}
            src={`${product?.images[1]}`}
          ></Box>
        )}
      </Box>
    </Stack>
  );
}

const styledBackground = {
  width: 'calc(100% -16px)',
  height: '100%',
  background: theme.palette.lightGrey.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
};

const styledImg = {
  maxWidth: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover',
};
const styledBigImg = {
  maxWidth: '70%',
  objectFit: 'contain',
};

const styledSmallImgs = {
  display: 'flex',
  maxWidth: '25%',
  gap: '1rem',
};
