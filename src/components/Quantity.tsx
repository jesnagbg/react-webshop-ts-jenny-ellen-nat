import {Button, ButtonGroup, TextField} from "@mui/material";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import useClickOut from "../hooks/useClickOut";

interface Props {
  initialValue: number;
  valueHandler: (value: number) => void;
}

export default function Quantity({initialValue, valueHandler}: Props) {
  const [inputProps, setInputProps] = useState({
    value: initialValue.toString(),
  });
  const [quantity, setQuantity] = useState(initialValue);

  const ref = useRef();

  useEffect(() => {
    valueHandler(quantity);
  }, [quantity]);

  useClickOut(ref, () => {
    if (Number.isNaN(parseInt(inputProps.value))) {
      setInputProps({value: "0"});
      setQuantity(0);
    }
  });

  const oneLess = () => {
    setInputProps({value: (quantity - 1).toString()});
    setQuantity(quantity - 1);
  };

  const oneMore = () => {
    setInputProps({value: (quantity + 1).toString()});
    setQuantity(quantity + 1);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (!Number.isNaN(parseInt(newValue))) {
      setQuantity(parseInt(newValue));
    }
    setInputProps({value: newValue});
  };

  return (
    <ButtonGroup disableElevation>
      <Button onClick={oneLess}>-</Button>
      <TextField
        onChange={onChange}
        inputProps={inputProps}
        size="small"
      />
      <Button onClick={oneMore}>+</Button>
    </ButtonGroup>
  );
}
