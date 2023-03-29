import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Product } from '../../data';
import { useCart } from '../contexts/CartContext';
import AddToCartButton from './AddToCartButton';
import Quantity from './Quantity';

interface Props {
  product: Product;
}

export default function ProductAdd({ product }: Props) {
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
        data-cy="product-price"
      >
        {product?.price} SEK
      </Typography>
      <Quantity
        initialValue={quantity}
        valueHandler={setQuantity}
        min={1}
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
  flexWrap: 'wrap',
  '@media (max-width: 899px)': {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '10px 0',
  },
};
