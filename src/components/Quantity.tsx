import { Box, Button, ButtonGroup } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface Props {
  initialValue: number;
  valueHandler: (value: number) => void;
}

export default function Quantity({ initialValue, valueHandler }: Props) {
  const [quantity, setQuantity] = useState(initialValue);

  const ref = useRef();

  useEffect(() => {
    valueHandler(quantity);
  }, [quantity]);

  const oneLess = () => {
    setQuantity(quantity - 1);
  };

  const oneMore = () => {
    setQuantity(quantity + 1);
  };

  return (
    <ButtonGroup
      sx={styledButtonGroup}
      disableElevation
    >
      <Button
        sx={styledButton}
        onClick={oneLess}
      >
        -
      </Button>
      <Box sx={styledBox}>{quantity}</Box>
      <Button
        sx={styledButton}
        onClick={oneMore}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

const styledButtonGroup = {
  border: '1px solid black',
  borderRadius: '5px',
  fontFamily: '"DM Sans", sans-serif',
};

const styledButton = {
  border: 'none',
  '&:hover': {
    border: 'none',
  },
};

const styledBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
};
