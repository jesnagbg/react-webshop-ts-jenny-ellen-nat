import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
} from '@mui/material';
import { SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

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

  const toCheckout = (event: SyntheticEvent | Event, reason?: string) => {
    handleClose(event, reason);
    navigate('/checkout');
  };

  const handleExited = () => {
    setMessageData(undefined);
  };

  return messageData ? (
    <Snackbar
      data-cy="added-to-cart-toast"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited }}
      sx={styledSnackbar}
    >
      <SnackbarContent
        message={
          <Box sx={styledContainerBox}>
            <Box
              component="img"
              src={messageData.cartItem.image}
              sx={styledImgBox}
            />
            <Box sx={styledTextBox}>
              <Typography
                variant="body1"
                sx={styledType}
              >
                {messageData.cartItem.quantity}x {messageData.cartItem.title}{' '}
                {messageData.cartItem.quantity > 1 ? 'have' : 'has'} been{' '}
                {messageData.remove ? 'removed from' : 'added to'} the cart.
              </Typography>
              {!messageData.remove ? (
                <Button
                  sx={styledButton}
                  onClick={toCheckout}
                >
                  TO CHECKOUT
                </Button>
              ) : null}
            </Box>
          </Box>
        }
        action={
          <IconButton
            onClick={handleClose}
            sx={styledIconButton}
          >
            <CloseIcon
              fontSize="small"
              sx={styledIcon}
            />
          </IconButton>
        }
      ></SnackbarContent>
    </Snackbar>
  ) : null;
}

const styledSnackbar = {
  '& .MuiSnackbarContent-root': {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    flexWrap: 'nowrap',
    alignItems: 'start',
  },
};

const styledContainerBox = {
  display: 'flex',
  maxWidth: '20rem',
};

const styledImgBox = {
  maxWidth: '30%',
  marginRight: '1rem',
};

const styledTextBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWith: '10rem',
  color: 'black',
};

const styledType = {
  color: 'black',
};

const styledButton = {
  border: '1px solid black',
  maxWidth: '8rem',
  color: 'black',
};

const styledIconButton = {
  marginTop: '2px',
};

const styledIcon = {
  color: 'black',
};
