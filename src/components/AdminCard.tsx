import { Clear } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data';
import { theme } from '../theme';
import ConfirmDelete from './ConfirmDelete';

interface Props {
  product: Product;
}

export default function AdminCard({ product }: Props) {
  const { id, title, image, images, price, pieces } = product;
  const [confirmOpen, setConfirmOpen] = useState(false);

  const openConfirmDelete = () => {
    setConfirmOpen(true);
  };

  const anchorRef = useRef(null);
  

  return (
    <Card
      sx={styledCard}
      ref={anchorRef}
      data-cy="product"
    >
      <ConfirmDelete
        product={product}
        setConfirmOpen={setConfirmOpen}
        confirmOpen={confirmOpen}
        anchorEl={anchorRef.current}
      />
      <CardMedia
        sx={styledCardMedia}
        component="img"
        image={image}
        alt={`${image} thumbnail`}
      />
      <Box sx={styledBox}>
        <CardContent sx={styledCardContent}>
          <Typography
            variant="h4"
            data-cy="product-title"
          >
            {title}
          </Typography>
          <Typography variant="body1">
            Article number: <span data-cy="product-id">{id}</span>
          </Typography>
          <Typography variant="body1">Pieces: {pieces}</Typography>
          <Typography
            variant="body1"
            data-cy="product-price"
          >
            {price} SEK
          </Typography>
        </CardContent>
        {images && (
          <Box sx={imageContainer}>
            {images.map((imageUrl, index) => (
              <CardMedia
                key={index}
                component="img"
                image={imageUrl}
                alt={`Extra Image ${index + 1}`}
                sx={extraImageStyle}
              />
            ))}
          </Box>
        )}
      </Box>
      <Box sx={rightContainer}>
        <IconButton
          onClick={openConfirmDelete}
          sx={removeButton}
          aria-label="remove"
          data-cy="admin-remove-product"
        >
          <Clear />
        </IconButton>
        <Link
          to={`/admin/product/${product.id}`}
          data-cy="admin-edit-product"
          style={styledLink}
        >
          <Typography
            variant="h6"
            sx={styledLink}
          >
            Edit
          </Typography>
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
  maxWidth: { xs: 0.4, md: 0.5, lg: 0.3, },
};

const styledCardContent = {
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const styledBox = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: "space-between"
};

const removeButton = {
  height: '2rem',
  width: '2rem',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: theme.palette.lightGrey.main,
  },
};

const rightContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
};

const styledLink = {
  textDecorationColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  fontFamily: 'DM Sans',
};

const imageContainer = {
  display: 'flex',
  flexDirection: 'row',
  width: '30%',
};

const extraImageStyle = {
  height: { xs: 30, sm: 50 },
  width: { xs: 30, sm: 50 },
  objectFit: 'cover',
  marginLeft: '0.5rem',
};
