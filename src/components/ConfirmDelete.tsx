import { Button, Dialog, Typography } from '@mui/material';
import { SetStateAction } from 'react';
import { Product } from '../../data';
import { useProducts } from '../contexts/ProductsContext';

interface Props {
  product: Product;
  setConfirmOpen: React.Dispatch<SetStateAction<boolean>>;
  confirmOpen: boolean;
}

export default function ConfirmDelete({
  product,
  setConfirmOpen,
  confirmOpen,
}: Props) {
  const { setProducts, products } = useProducts();

  const removeProduct = () => {
    setProducts(products.filter((eachProduct) => eachProduct !== product));
  };

  const handleClose = () => {
    setConfirmOpen(false);
  };

  return (
    <Dialog open={confirmOpen}>
      <Typography variant="body1">
        Are you sure you want to delete this product fron your inventory?
      </Typography>
      <Button onClick={handleClose}>Cancel</Button>
      <Button
        onClick={removeProduct}
        data-cy="confirm-delete-button"
      >
        Remove product
      </Button>
    </Dialog>
  );
}
