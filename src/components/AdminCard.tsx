import { Clear } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../data';
import { theme } from '../theme';

interface Props {
  product: Product;
}

export default function AdminCard({ product }: Props) {
  const { id, title, image, images, price } = product;

  return (
    <Card
      sx={styledCard}
      data-cy="product"
    >
      <CardMedia
        sx={styledCardMedia}
        component="img"
        image={image}
        alt="Image thumbnail"
      />
      <Box sx={styledBox}>
        <CardContent sx={styledCardContent}>
          <Typography
            variant="h5"
            data-cy="product-title"
          >
            {title}
          </Typography>
          <Typography variant="body1">Article number: <span data-cy="product-id">{id}</span></Typography>
          <Typography variant="body1">Details:</Typography>
          <Typography
            variant="body1"
            data-cy="product-price"
          >
            {price} SEK
          </Typography>
        </CardContent>
      </Box>
      <Box sx={rightContainer}>
        <IconButton
          sx={removeButton}
          aria-label="remove"
          data-cy="admin-remove-product"
        >
          <Clear />
        </IconButton>
        <Link to="/admin/edit" style={editLink} data-cy="admin-edit-product">
          Edit
        </Link>
      </Box>
    </Card>
  );
}

const styledCard = {
  margin: '1rem 0',
  display: 'flex',
};

const styledCardMedia = {
  maxWidth: 0.3,
};

const styledCardContent = {
  padding: '0 1rem',
};

const styledBox = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
};

const removeButton = {
  height: '2rem',
  width: '2rem',
  backgroundColor: "white",
  color: 'black',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: theme.palette.lightGrey.main,
  },
};

const editLink = {};

const rightContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
};
