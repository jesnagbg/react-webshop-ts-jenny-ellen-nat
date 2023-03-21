import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Snackbar } from '@mui/material';
import {
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';

interface Props {
  snackpack: SnackbarMessage[];
  setSnackpack: React.Dispatch<SetStateAction<SnackbarMessage[]>>;
}

interface SnackbarMessage {
  title: string;
  quantity: number;
  remove: boolean;
}

export default function Toast({ snackpack, setSnackpack }: Props) {
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(
    undefined
  );

  useEffect(() => {
    console.log('Toast useEffect ran.');
    if (snackpack.length && !messageInfo) {
      console.log('If statement block 1 ran.');
      setMessageInfo({ ...snackpack[0] });
      setSnackpack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackpack.length && messageInfo && open) {
      console.log('If statement block 2 ran.');
      setOpen(false);
    }
  }, [snackpack, messageInfo, open]);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const action = (
    <Fragment>
      <IconButton onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return messageInfo ? (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={`${messageInfo.quantity}x ${messageInfo.title} ${
        messageInfo.quantity > 1 ? 'have' : 'has'
      } been ${messageInfo.remove ? 'removed from' : 'added to'} the cart.`}
      action={action}
      TransitionProps={{ onExited: handleExited }}
    />
  ) : (
    <></>
  );
}
