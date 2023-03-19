import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import AdminCard from "../components/AdminCard";
import CheckoutForm from "../components/CheckoutForm";
import { Product, products } from "../data";

export default function Checkout() {
  return (
    <Container maxWidth={"lg"} sx={topSpace}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">All products</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {products.map((product: Product) => (
            <Box key={product.id}>
              <Divider />
              <AdminCard product={product} />
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckoutForm></CheckoutForm>
        </Grid>
      </Grid>
    </Container>
  );
}

const topSpace = {
  marginTop: "100px",
};
