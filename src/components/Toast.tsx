import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Snackbar } from '@mui/material';
import {
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { CartItem } from '../../data';

interface Props {
  snackpack: SnackbarData[];
  setSnackpack: React.Dispatch<SetStateAction<SnackbarData[]>>;
}

interface SnackbarData {
  cartItem: CartItem;
  remove: boolean;
}

export default function Toast({ snackpack, setSnackpack }: Props) {
  const [open, setOpen] = useState(false);
  const [messageData, setMessageData] = useState<SnackbarData | undefined>(
    undefined
  );

  useEffect(() => {
    if (snackpack.length && !messageData) {
      setMessageData({ ...snackpack[0] });
      setSnackpack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackpack.length && messageData && open) {
      setOpen(false);
    }
  }, [snackpack, messageData, open]);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const handleExited = () => {
    setMessageData(undefined);
  };

  const action = (
    <Fragment>
      <IconButton onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return messageData ? (
    <Snackbar
      data-cy="added-to-cart-toast"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={`${messageData.cartItem.quantity}x ${
        messageData.cartItem.title
      } ${messageData.cartItem.quantity > 1 ? 'have' : 'has'} been ${
        messageData.remove ? 'removed from' : 'added to'
      } the cart.`}
      action={action}
      TransitionProps={{ onExited: handleExited }}
    />
  ) : (
    <></>
  );
}
