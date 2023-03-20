import {Box, Button, Typography} from "@mui/material";
import {useProducts} from "../contexts/ProductsContext";
import AddToCartButton from "./AddToCartButton";

export default function ProductAdd() {
  const {product} = useProducts();

  return (
    <Box sx={styledAdd}>
      <Typography sx={styledPrice} variant="body1">
        {product?.price} SEK
      </Typography>
      <Button variant="outlined"> + - </Button>
      <AddToCartButton />
    </Box>
  );
}

const styledPrice = {
  fontWeight: "bold",
};

const styledAdd = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "1rem",
  background: "#fff",
  "@media (max-width: 899px)": {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "10px 0",
  },
};
