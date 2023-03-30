import { Box, Typography } from '@mui/material';
import { Product } from '../../data';

interface Props {
  product: Product;
}

export default function ProductDescription({
  product: { title, pieces, description },
}: Props) {
  return (
    <Box>
      <Box sx={styledHeadings}>
        <Typography
          variant="h3"
          data-cy="product-title"
        >
          {title}
        </Typography>
        <Typography variant="body1">{pieces} Pieces</Typography>
      </Box>
      <Typography
        sx={styledParagraph}
        variant="body1"
        data-cy="product-description"
      >
        {description}
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
  marginBottom: '1.2rem',
};
