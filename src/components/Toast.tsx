import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Snackbar } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';

interface Props {
  name: string;
  quantity: number;
  remove: boolean;
}

export default function Toast(props: Props) {
  const [open, setOpen] = useState(false);
  const [toastProps, setToastProps] = useState(props);

  useEffect(() => {
    setOpen(true);
  }, [toastProps]);

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
      message={`${toastProps.quantity}x ${toastProps.name} ${
        toastProps.remove ? 'removed from' : 'added to'
      } cart`}
      action={action}
    />
  );
}
