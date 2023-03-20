import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductAdd from "../components/ProductAdd";
import ProductDescription from "../components/ProductDescription";
import ProductGallery from "../components/ProductGallery";
import { useProducts } from "../contexts/ProductsContext";

export default function Product() {
  const {id} = useParams<{id: string}>();
  const {products, setProduct} = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((p) => p.id === id) || null;
    setProduct(product);
  }, [id, products, setProduct]);

  return (
    <Container sx={styledContainer}>
      <Button sx={styledButton} onClick={() => navigate(-1)}>
        Back
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductGallery />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDescription />
        </Grid>
      </Grid>
      <Box sx={styledAddProducts}>
        <ProductAdd />
      </Box>
    </Container>
  );
}

const styledContainer = {
  margin: "100px 0",
  position: "relative",
  maxWidth: "1200px",
};

const styledButton = {
  margin: "0 0 10px 0",
};

const styledAddProducts = {
  position: "sticky",
  bottom: "24px",
  left: "100%",
  width: "fit-content",

  "@media (max-width: 899px)": {
    width: "100%",
    bottom: 0,
  },
};
