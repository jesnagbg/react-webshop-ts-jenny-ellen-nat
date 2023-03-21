import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Product } from '../../data';
import { useCart } from '../contexts/CartContext';
import { theme } from '../theme';

interface Props {
  product: Product;
}

export default function StartCard({ product }: Props) {
  const { id, title, image, images, price } = product;
  const [hoverImage, setHoverImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(image);
  const { addToCart } = useCart();

  const handleMouseEnter = () => {
    if (images && images.length > 0) {
      setCurrentImage(images[0]);
    }
    setHoverImage(true);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
    setHoverImage(false);
  };

  const addToCartClick = () => {
    addToCart(product, 1);
  };

  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      sx={cardStyling}
      data-cy="product"
    >
      <Box
        sx={imageBorder}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box
          sx={{ ...cardImage, backgroundImage: `url(${currentImage})` }}
          title={title}
          onClick={() => handleProductClick(product)}
        />
      </Box>
      <CardContent sx={cardContentStyling}>
        <Grid
          container
          sx={belowImageGrid}
        >
          <Box
            onClick={() => handleProductClick(product)}
            sx={linkedBoxStyling}
          >
            <Typography
              variant="h5"
              sx={titleStyling}
              data-cy="product-title"
            >
              {title}
            </Typography>
            <Typography
              sx={priceStyling}
              data-cy="product-price"
            >
              {price} SEK
            </Typography>
          </Box>
          <IconButton
            sx={shoppingButton}
            onClick={addToCartClick}
            data-cy="product-buy-button"
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
}

const cardStyling = {
  maxWidth: 430,
  boxShadow: 'none',
};

const imageBorder = {
  backgroundColor: theme.palette.lightGrey.main,
  padding: 2,
  height: { xs: 320, sm: 430 },
  width: { xs: 250, sm: 335 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardImage = {
  height: '100%',
  width: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
};

const shoppingButton = {
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: 'black',
  },
};

const titleStyling = {
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: theme.typography.body1.fontSize,
};

const priceStyling = {
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: 14,
  color: theme.typography.h1.color,
};

const cardContentStyling = {
  paddingTop: 1,
  paddingLeft: 0.2,
  paddingRight: 0.2,
  '&:last-child': { paddingBottom: 2 },
};

const belowImageGrid = {
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkedBoxStyling = {
  cursor: 'pointer',
};
