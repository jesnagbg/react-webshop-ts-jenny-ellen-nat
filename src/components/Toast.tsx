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
import { NavLink, useNavigate } from 'react-router-dom';
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

  const toCheckout = () => {
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
      autoHideDuration={1000000}
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
              <Typography variant="body1">
                {messageData.cartItem.quantity}x {messageData.cartItem.title}{' '}
                {messageData.cartItem.quantity > 1 ? 'have' : 'has'} been{' '}
                {messageData.remove ? 'removed from' : 'added to'} the cart.
              </Typography>
              <Button>
                <NavLink
                  to={'/checkout'}
                  onClick={handleClose}
                >
                  TO CHECKOUT
                </NavLink>
              </Button>
            </Box>
          </Box>
        }
        action={
          <IconButton onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      ></SnackbarContent>
    </Snackbar>
  ) : (
    <></>
  );
}

const styledSnackbar = {
  '& .MuiSnackbarContent-root': {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
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
};
