import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductsContext';
import AddToCartButton from './AddToCartButton';
import Quantity from './Quantity';

export default function ProductAdd() {
  const { product } = useProducts();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const onAdd = () => {
    if (product) addToCart(product, quantity);
  };

  return (
    <Box sx={styledAdd}>
      <Typography
        sx={styledPrice}
        variant="body1"
      >
        {product?.price} SEK
      </Typography>
      <Quantity
        initialValue={quantity}
        valueHandler={setQuantity}
      />
      <AddToCartButton onAdd={onAdd} />
    </Box>
  );
}

const styledPrice = {
  fontWeight: 'bold',
};

const styledAdd = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '1rem',
  background: '#fff',
  '@media (max-width: 899px)': {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '10px 0',
  },
};
