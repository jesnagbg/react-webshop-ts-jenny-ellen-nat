import { Box, Button, Popover, Typography } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';
import { SetStateAction } from 'react';
import { Product } from '../../data';
import { useProducts } from '../contexts/ProductsContext';

interface Props {
  product: Product;
  setConfirmOpen: React.Dispatch<SetStateAction<boolean>>;
  confirmOpen: boolean;
  anchorEl: HTMLElement | null;
}

export default function ConfirmDelete({
  product,
  setConfirmOpen,
  confirmOpen,
  anchorEl,
}: Props) {
  const { setProducts, products } = useProducts();

  const removeProduct = () => {
    setProducts(products.filter((eachProduct) => eachProduct !== product));
  };

  const handleClose = () => {
    setConfirmOpen(false);
  };

  return (
    <Popover
      open={confirmOpen}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      PaperProps={{
        style: {
          width: anchorEl?.getBoundingClientRect().width + 'px',
          height: anchorEl?.getBoundingClientRect().height + 'px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: '1rem',
        },
      }}
    >
      <Typography
        variant="body1"
        sx={styledTypography}
      >
        Are you sure you want to delete {product.title} from your inventory?
      </Typography>
      <Box sx={styledButtonBox}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={removeProduct}
          data-cy="confirm-delete-button"
        >
          Remove product
        </Button>
      </Box>
    </Popover>
  );
}

const styledTypography: CSSProperties = {
  margin: '1rem;',
};

const styledButtonBox: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
};
