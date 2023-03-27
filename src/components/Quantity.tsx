import { Button, ButtonGroup, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  initialValue: number;
  valueHandler: (value: number) => void;
}

export default function Quantity({ initialValue, valueHandler }: Props) {
  const [valueString, setValueString] = useState('');
  const [valueNum, setValueNum] = useState(initialValue);

  useEffect(() => {
    const parsedValue = parseInt(valueString);
    !isNaN(parsedValue)
      ? (valueHandler(parsedValue), setValueNum(parsedValue))
      : null;
  }, [valueString]);

  useEffect(() => {
    setValueString(valueNum.toString());
  }, [valueNum]);

  useEffect;

  const oneLess = () => {
    setValueNum(valueNum - 1);
  };

  const oneMore = () => {
    setValueNum(valueNum + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueString(event.target.value);
  };

  return (
    <ButtonGroup
      sx={styledButtonGroup}
      disableElevation
    >
      <Button
        data-cy="decrease-quantity-button"
        sx={styledButton}
        onClick={oneLess}
      >
        -
      </Button>
      <TextField
        data-cy="product-quantity"
        value={valueString}
        inputMode="numeric"
        onChange={handleInputChange}
      />
      <Button
        data-cy="increase-quantity-button"
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
