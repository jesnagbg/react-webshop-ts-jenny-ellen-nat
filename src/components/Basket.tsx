import {Box, Divider, Stack, Typography} from "@mui/material";
import {useCart} from "../contexts/CartContext";
import CheckoutCard from "./CheckoutCard";

export default function Basket() {
  const {cartItems} = useCart();

  return (
    <Box>
      <Typography variant="h5">Basket</Typography>
      <Divider />
      <Stack spacing={2}>
        {cartItems.map((item) => (
          <Box>
            <CheckoutCard item={item} />
            <Divider />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
