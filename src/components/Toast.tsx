import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Snackbar } from '@mui/material';
import { Fragment } from 'react';

interface Props {
  name: string;
  quantity: number;
  remove: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toast({
  name,
  quantity,
  remove,
  open,
  setOpen,
}: Props) {
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={
        remove
          ? `${name} has been removed from the cart.`
          : `${quantity}x ${name} has been added to the cart.`
      }
      action={action}
    />
  );
}
