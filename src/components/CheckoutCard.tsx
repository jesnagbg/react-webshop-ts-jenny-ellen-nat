import {Clear} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";
import {useCart} from "../contexts/CartContext";
import {CartItem} from "../data";
import Quantity from "./Quantity";

interface Props {
  item: CartItem;
}

export default function CheckoutCard({item}: Props) {
  const {removeFromCart, changeQuantity} = useCart();

  const removeItem = () => {
    removeFromCart(item);
  };

  const valueHandler = (value: number) => {
    changeQuantity(item, value);
  };

  return (
    <Card
      sx={styledCard}
      data-cy="cart-item"
    >
      <CardMedia
        sx={styledCardMedia}
        component="img"
        image={item.image}
        alt="Puzzle thumbnail."
      />
      <Box sx={styledBox}>
        <CardContent sx={styledCardContent}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="body1">{item.pieces} pieces</Typography>
          <Typography variant="body1"> Quantity:</Typography>
          <Quantity
            initialValue={item.quantity}
            valueHandler={valueHandler}
          />
          <Typography variant="body1">{item.price}kr</Typography>
        </CardContent>
      </Box>
      <Fab
        color="primary"
        aria-label="remove"
        size="small"
        onClick={removeItem}
      >
        <Clear />
      </Fab>
    </Card>
  );
}

const styledCard = {
  margin: "1rem 0",
  display: "flex",
};

const styledCardMedia = {
  maxWidth: 0.3,
};

const styledCardContent = {
  padding: "0 1rem",
};

const styledBox = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
};
