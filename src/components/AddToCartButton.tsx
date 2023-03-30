import { Button } from '@mui/material';

interface Props {
  onAdd: () => void;
}

export default function AddToCartButton({ onAdd }: Props) {
  return (
    <Button
      variant="contained"
      sx={styledButton}
      onClick={onAdd}
      data-cy="product-buy-button"
    >
      Add to cart
    </Button>
  );
}

const styledButton = {
  padding: '.6rem 2rem',
  whiteSpace: 'no-wrap',
  '@media (max-width: 350px)': {
    fontSize: '12px',
    padding: '.4rem 1rem',
  },
};
