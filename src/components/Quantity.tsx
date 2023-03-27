import { Button, ButtonGroup, TextField } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';
import { useEffect, useState } from 'react';

interface Props {
  initialValue: number;
  valueHandler: (value: number) => void;
}

export default function Quantity({ initialValue, valueHandler }: Props) {
  const [valueString, setValueString] = useState('');
  const [valueNum, setValueNum] = useState(initialValue);
  const [error, setError] = useState(false);

  useEffect(() => {
    const parsedValue = parseInt(valueString);
    !isNaN(parsedValue)
      ? (valueHandler(parsedValue), setValueNum(parsedValue), setError(false))
      : setError(true);
  }, [valueString]);

  useEffect(() => {
    setValueString(valueNum.toString());
  }, [valueNum]);

  const oneLess = () => {
    setValueNum(valueNum - 1);
  };

  const oneMore = () => {
    setValueNum(valueNum + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueString(event.target.value);
  };

  const handleBlur = () => {
    setValueString(valueNum.toString());
  };

  return (
    <ButtonGroup
      sx={styledButtonGroup}
      disableElevation
    >
      <Button
        sx={styledButton}
        data-cy="decrease-quantity-button"
        onClick={oneLess}
      >
        -
      </Button>
      <TextField
        sx={error ? styledTextFieldError : styledTextField}
        data-cy="product-quantity"
        value={valueString}
        inputMode="numeric"
        onChange={handleInputChange}
        onBlur={handleBlur}
        error
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

const styledTextFieldError = {
  '& *': {
    textAlign: 'center',
  },
  width: '4rem',
};

const styledTextField = {
  '& fieldset': {
    border: 'none',
  },
  '& *': {
    textAlign: 'center',
  },
  width: '4rem',
};

const styledButtonGroup: CSSProperties = {
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
